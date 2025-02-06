
import { useApiService } from "../../hooks"
import { IButton, IProduct } from "../../intefaces"
import { serviceSB } from "../../services"
import Button from "../Button/Button"

 interface Props{
    id:string
}

export default function TableButtons ({id}:Props){
    
   
        const {fetchData}= useApiService<IProduct>(serviceSB.deleteProductById(id))
 
    

    const agregar:IButton={
        label:"agregame" ,
        classname: "agregar"
    }
    const modificar:IButton={
        label:"modificar" ,
        classname: "modificar"
    }

    const eliminar:IButton={
        label:"eliminar" ,
        classname: "eliminar",
        method:fetchData
    }
    
    
    
    
    return(
        
        <>
            <td><Button {...agregar}/></td>
            <td><Button {...modificar}/></td>
            <td><Button {...eliminar}/></td>
        </>
        )
}