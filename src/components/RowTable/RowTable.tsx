import { ReactNode } from "react"



interface Props<T>{
    item:T,
    children?:ReactNode
}

export default function RowTable <T>({item,children}:Props<T>){

    if(typeof item !== "object" || item ===null){
        return null
    }




    return(
        <tr> 
            {Object.values(item).map((i,index)=>(
                  <td key={index} className="border p-2">{String(i)}</td>
            ))}
           {children}
        </tr>
    )
}