import { EntityType } from "./EntityType";
import { Data } from "./IFetchParams";

export interface ICategory{
    type:"Category"
    id?:number;
    name:string;
    urlImage:string;
    state:boolean;
    color:string;
}

export const emptyCategory:ICategory ={
    type:"Category",
    name: "",
    urlImage: "",
    color: "",
    state: false
}
export  const isCategory=(item:EntityType):item is ICategory=>{
    return item.type==="Category"
}

interface Props<T>{
    data:Data<T> 
}
export function dataToCategory <T>({data}:Props<T>):ICategory[]|null{

    if(data && Array.isArray(data)){
        const parsedCategory = data.map((i)=>{
            return {...i,type:"Category"}as ICategory;
        })
        return parsedCategory.length > 0 ? parsedCategory : null;
    }
    return null
}