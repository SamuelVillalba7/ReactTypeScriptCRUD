import { useEffect } from "react";
import { useApiService } from "../../hooks";
import Table from "../Table/Table";
import { serviceCategory } from "../../services";
import { dataToCategory } from "../../intefaces";
import { useRefresh } from "../../context/RefreshTableContext";
import "./TableCategoryContainer.css"
export default function TableCategoryContainer(){

    const {fetchData,data} =useApiService(serviceCategory.findAll())
    const {refresh}=useRefresh()
    useEffect(()=>{
        fetchData()
    },[refresh])
    const thead=["id","name","urlImage","color","state"]
    const tbody = dataToCategory({data})
    return(
        <div className="TableCategoryContainer">
            <Table thead={thead} tbody={tbody} ></Table>
        
        </div>
    )
}