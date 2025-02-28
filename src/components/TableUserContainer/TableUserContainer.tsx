import { useEffect } from "react"
import { useApiService } from "../../hooks"
import { serviceUser } from "../../services"
import { useRefresh } from "../../context/RefreshTableContext"
import Table from "../Table/Table"
import { dataToUsers, IUser } from "../../intefaces/IUsers"
import { Data } from "../../intefaces"

interface TableProps<T> {
    thead: string[],
    tbody: Data<T[]>
}
export default function TableUserContiner(){

    const {data,fetchData,loading}=useApiService(serviceUser.findAll())
    const {refresh}=useRefresh()
    useEffect(()=>{
    fetchData()
        console.log(data,loading)
    },[refresh])

    const users= dataToUsers({data})
    const props:TableProps<IUser>={
        tbody:users,
        thead:["id","name","lastname"]
    }
    
    return(
        <>
            <Table {...props}/>
        </>
    )
}