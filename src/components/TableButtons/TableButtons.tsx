import { useForm } from "../../context/FormContext"
import { useApiService, useService } from "../../hooks"
import { EntityType, IButton, ICategory, IProduct, isCategory } from "../../intefaces"
import Button from "../Button/Button"

 interface Props{
    item:EntityType
}


export default function TableButtons <T extends IProduct | ICategory>({item}:Props){
    
    const {setProduct,setCategory}=useForm()
    const {deleteService,highLogicService,lowLogicService}=useService(item)
    
 

    const setear=()=> isCategory(item)? (setCategory(item)):(setProduct(item))
 

    const {fetchData: deleteById}= useApiService<T>(deleteService)
    const {fetchData: highLogic}= useApiService<T>(highLogicService)
    const {fetchData: lowLogic}= useApiService<T>(lowLogicService)
    

    const altaLogica:IButton={
        label:"alta" ,
        classname: "alta",
        method:highLogic,
        refresh:true
    }
    const bajaLogica:IButton={
        label:"baja" ,
        classname: "baja",
        method: lowLogic,
        refresh:true
    }

    const modificar:IButton={
        label:"modificar" ,
        classname: "modificar",
        method:setear
    }

    const eliminar:IButton={
        label:"eliminar" ,
        classname: "eliminar",
        method:deleteById,
        refresh:true
        
    }
    
    
    
    
    return(
        
        <>
            {item.state ===true ? (
                <td><Button {...bajaLogica}/></td>
            ):(
                <td><Button {...altaLogica}/></td>
            )}
            
            
            <td><Button {...modificar}/></td>
            <td><Button {...eliminar}/></td>
        </>
        )
}