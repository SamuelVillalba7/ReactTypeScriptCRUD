import { useApiService } from "../../hooks"
import { IProduct } from "../../intefaces"
import { Endponints } from "../../services/EndpointsService"

export const ItemProduct =()=>{

    const product:IProduct = {
        name: "salchicha",
        idCategory: 1,
        description: "rey del pancho",
        price: 23,
        urlImage: "sadd",
        stock: 10,
        state: true
    }
    const endpoints = new Endponints()
    
    const {loading,data,error} = useApiService<IProduct>(endpoints.saveProduct(product))


    if(loading){
        return <h1>cargando...</h1>
    }
    if(error){
        return <h1>error</h1>
    }

    return(
        <>
            <h1>{ JSON.stringify(data)}</h1>
        </>
    )
}