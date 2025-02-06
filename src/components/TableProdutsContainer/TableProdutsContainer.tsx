
import { Data, IProduct } from "../../intefaces"
import { useApiService } from "../../hooks"
import { serviceSB } from "../../services"
import Table from "../Table/Table"
import "./TableProdutsContainer.css"
import { useEffect } from "react"
interface TableProps<T> {
    thead: string[],
    tbody: Data<T>
}

export default function TableProdutsContainer(){
    
    const {data,fetchData} = useApiService<IProduct>(serviceSB.getAllProducts())

    useEffect(()=>{
        fetchData()
    },[])
    
    const props:TableProps<IProduct> ={
        thead:["id","nombre","idCategoria","description","precio","urlImagen","stock","estado"],
        tbody: data || null
    }

    return (
        <>
            <div className="TableProductsContainer">
                <Table<IProduct> {...props} />

            </div>
        
        </>
    )
}