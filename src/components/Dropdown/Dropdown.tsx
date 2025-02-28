import { EntityType } from "../../intefaces"


interface Props{
    items: EntityType[],
    handleChange:(key: string, value: unknown)=>void,
    text:string
}

export default function Dropdown({items,handleChange,text}:Props){
 
    if(!items){
        return null
    }
    
    return (
        <>
           
            <select className="form-select" onChange={(e)=>handleChange(text,e.target.value)} >
                {Object.values(items).map((value)=>(
                    <option key={value.id} value={value.id}>{value.name}</option>
                ))}
            </select>
            
        </>
    )
}