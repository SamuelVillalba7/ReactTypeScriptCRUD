import { useEffect } from "react"
import { useApiService } from "../../hooks"
import { dataToCategory,  ICategory } from "../../intefaces"
import { serviceCategory } from "../../services"
import Dropdown from "../Dropdown/Dropdown"



interface Props{
    handleChange:(key: string, value: unknown)=>void
}
export default function DropdownCategory({handleChange}:Props){
    
    const {fetchData,data}= useApiService<ICategory>(serviceCategory.findAll())

 
    useEffect(()=>{
        fetchData()
    },[])
    const result = dataToCategory({data})
    
    if(!result ){
        return null
    }
    
    return(
        <Dropdown items={result} text="idCategory" handleChange={handleChange} />   
    )
}