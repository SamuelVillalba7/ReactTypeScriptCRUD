
import { Data, ICategory, IProduct } from "../../intefaces";


import RowTable from "../RowTable/RowTable";
import TableButtons from "../TableButtons/TableButtons";

import "./Table.css"

interface TableProps<T> {
    thead: string[],
    tbody: Data<T[]>
}

export default function Table <T extends IProduct | ICategory>({thead, tbody}:TableProps<T>){

  
    if(tbody === null || tbody=== undefined || typeof tbody !== "object"  ){
        return null
    }

    

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        {thead.map((item,index)=>(
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                        {Object.values(tbody).map((item,index)=>(
                            <RowTable key={index} item={item} >
                                <TableButtons item={item} />
                            </RowTable>
                        ))}
                </tbody>
            </table>
                        
          
        </>
    )
}