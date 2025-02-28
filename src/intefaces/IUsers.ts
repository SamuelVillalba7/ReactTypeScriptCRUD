
import { Data } from "./IFetchParams"
import { EntityType } from "./EntityType"

export interface IUser{
    id?: number,
    type:"User",
    name:string,
    lastname:string,
    phone:string,
    mail:string,
    password:string,
    state:boolean,
    admin:boolean
}

export const emptyUser:IUser ={
    type:"User",
    name:"",
    lastname:"",
    mail:"",
    password:"",
    phone:"",
    state:false,
    admin:false
}

interface Props<T> {
    data: Data<T>
}

export const isUser=(item:EntityType):item is IUser =>{
    return item.type === "User"
}

export const dataToUsers =<T>({data}:Props<T>):IUser[] | null=>{

    if(data && Array.isArray(data)){
        const parsedUsers = data.map((item)=>{
            return {...item,type:"User"} as IUser
        })

        return parsedUsers.length>0 ? parsedUsers : null
    }
    return null
}