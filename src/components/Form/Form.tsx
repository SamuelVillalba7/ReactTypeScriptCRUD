import { useState } from "react"

interface Props<T>{
    item:T 
}
export default function Form<T extends Record<string, unknown>>({item}:Props<T>){

    const [itemForm,setItemForm]= useState<T>(item)

    if(typeof item !== "object" || !item){
        return null
    }
    const handleChange = (key: string, value: string) => {
        setItemForm((prev) => ({
          ...prev,
          [key]: value,
        }));
      };
   

    return(
        <>
            <form>
                {Object.entries(itemForm).map(([key,value])=>(
                    <label key={key}>
                            {key}
                            <input type="text" value={typeof value === "string" ? value : ""}  onChange={(e) => handleChange(key, e.target.value)}  />
                    </label>
                  
                ))}
            </form>
            
        </>
    )
}