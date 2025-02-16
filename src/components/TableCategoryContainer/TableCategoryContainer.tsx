import { useEffect } from "react";
import { useApiService } from "../../hooks";
import Table from "../Table/Table";
import { serviceCategory } from "../../services";
import { dataToCategory } from "../../intefaces";
import { useRefresh } from "../../context/RefreshTableContext";

export default function TableCategoryContainer(){

    const {fetchData,data} =useApiService(serviceCategory.findAll())
    const {refresh}=useRefresh()
    useEffect(()=>{
        fetchData()
    },[refresh])
    const thead=["id","name","state","color","urlImage"]
    const tbody = dataToCategory({data})
    return(
        <>
            <Table thead={thead} tbody={tbody} ></Table>
        
        </>
    )
}