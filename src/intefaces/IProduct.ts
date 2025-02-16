import { EntityType } from "./EntityType";
import { Data } from "./IFetchParams";

export interface IProduct {
    type:"Product"
    id?: number;
    name: string;
    idCategory: number;
    description: string;
    price: number;
    urlImage: string;
    stock: number;
    state: boolean;
}

 export const emptyProduct:IProduct={
    type:"Product",
    name: "",
    idCategory: 1,
    description: "",
    price: 0,
    urlImage: "",
    stock: 0,
    state: false
}

export const isProduct=(item:EntityType):item is IProduct=>{
    return item.type==="Product"
}



interface Props<T>{
    data:Data<T> 
}

export function dataToProducts<T>({data}:Props<T>):IProduct[] |null{
    
    if (data && Array.isArray(data)){
        const parsedProducts = data.map((item) => {
            const productData = { ...item, type: "Product" } as IProduct;
            return productData
        })
        return parsedProducts.length > 0 ? parsedProducts : null;
   
    }
    return null

}

    // return Object.values(data).map((i)=>({
    //     ...(i ?? { 
    //         id: 0, 
    //         name: "Desconocido", 
    //         idCategory: 0, 
    //         description: "", 
    //         price: 0, 
    //         urlImage: "", 
    //         stock: 0, 
    //         state: false 
    //     }), 
    //     type: "Product",
    // }))


    
     


