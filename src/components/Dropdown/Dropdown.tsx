
import { useEffect } from "react"
import { useApiService } from "../../hooks"
import { dataToCategory, EntityType, ICategory } from "../../intefaces"
import { serviceCategory } from "../../services"

interface Props{
    items?:EntityType[] | null,
    handleChange:(key: string, value: unknown)=>void,
    text:string
}

export default function Dropdown({items,handleChange,text}:Props){

    const {fetchData,data}= useApiService<ICategory>(serviceCategory.findAll())

    useEffect(()=>{
        fetchData()
    },[])

    const result = dataToCategory({data})
    
    if(result === null || items=== result || typeof result !== "object"  ){
        return null
    }
    
    return (
        <>
           
            <select className="form-select" onChange={(e)=>handleChange(text,e.target.value)} >
                {Object.values(result).map((value)=>(
                    <option key={value.id} value={value.id}>{value.name}</option>
                ))}
            </select>
            
        </>
    )
}