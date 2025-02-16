import Button from "../Button/Button"
import { emptyCategory, EntityType, isCategory } from "../../intefaces"
import { useApiService, useService } from "../../hooks"
import { emptyProduct } from "../../intefaces"


interface Props<T>{
    item: EntityType,
    setItem: React.Dispatch<React.SetStateAction<T>>
}

export default function FormButtons<T>({item,setItem}:Props<T>){
        
        const {saveService,updateService}=useService(item) 
        const setItemForm = () => {
            setItem((isCategory(item) ? (emptyCategory as T ) : (emptyProduct as T)));
        };

        const {fetchData : save} = useApiService<T>(saveService)
        const {fetchData : update} = useApiService<T>(updateService)
    
        const saveItem=()=>{
            save()
            setItemForm()
        }
    
        const updateItem=()=>{
            update()
            setItemForm()
        }
    
        const cancel=()=>{
            setItemForm()
        }
    
    
    return(
            <div>  
                {item.id?(
                            <Button label="modificar" classname="agregar" method={updateItem} refresh={true} />
                        ):(
                            <Button label="agregar" classname="agregar" method={saveItem} refresh={true} />
                        )}
                        <Button  label="cancelar" classname="eliminar" method={cancel} />
            </div>
    )
}


// export default function FormButtons<T extends IProduct | ICategory >({item,setItem}:Props<T>){
        
//     const {saveService}=useService(item) 

//     const isCategory = (item: ICategory | IProduct): item is ICategory => {
//         return item.type === "Category";
//     };  
        
   
//     const setItemForm = () => {
//         setItem((isCategory(item) ? (emptyCategory as T) : (emptyProduct as T)));
//     };




//     const saveHandler = ():IServiceConfig => {
//         if (isCategory(item)) {
//            return serviceCategory.save(item as ICategory);
//         } else {
//            return serviceProduct.save(item as IProduct);
//         }
//     };

//     const updateHandler=():IServiceConfig=>{
//         if(isCategory(item)){
//             return serviceCategory.update(item as ICategory)
//         }else{
//             return serviceProduct.update(item as IProduct)
//         }
//     }
//     const {fetchData : save} = useApiService<T>(saveHandler())
//     const {fetchData : update} = useApiService<T>(updateHandler())