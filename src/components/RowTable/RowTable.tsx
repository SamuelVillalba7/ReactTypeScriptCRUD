import { ReactNode } from "react"
import { EntityType } from "../../intefaces"



interface Props{
    item:EntityType,
    children?:ReactNode
}

export default function RowTable({item,children}:Props){   
    return(
        <tr> 
            {Object.entries(item).map(([key,value])=>(
                key !== "type"?(
                    <td key={key} className="border p-2">{String(value)}</td>
                ):(
                   null
                )
                 
            ))}
           {children}
        </tr>
    )
}