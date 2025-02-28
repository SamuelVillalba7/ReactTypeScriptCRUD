
import {  Data, dataToProducts, IProduct } from "../../intefaces"
import { useApiService } from "../../hooks"
import { serviceProduct  } from "../../services"
import Table from "../Table/Table"
import "./TableProdutsContainer.css"
import { useEffect } from "react"
import { useRefresh } from "../../context/RefreshTableContext"


interface TableProps<T> {
    thead: string[],
    tbody: Data<T[]>
}

export default function TableProdutsContainer(){
    
    const {data,fetchData} = useApiService<IProduct>(serviceProduct.findAll())
    const {refresh}=useRefresh()
 
    useEffect(()=>{ 
        
        fetchData()
      
    },[refresh])


    
    const props:TableProps<IProduct> ={
        thead:["id","nombre","idCategoria","description","precio","urlImagen","stock","estado"],
        tbody:dataToProducts({ data })
    }
    return (
        <div className="TableProductsContainer">
            <Table<IProduct> {...props} />
        </div>
        
    )
}