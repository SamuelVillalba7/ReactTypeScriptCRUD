import React, { createContext, useContext, useState } from "react";
import {emptyCategory, emptyProduct, ICategory, IProduct } from "../intefaces";
import { emptyUser, IUser } from "../intefaces/IUsers";

interface FormProps{
    product : IProduct
    setProduct: React.Dispatch<React.SetStateAction<IProduct>>
    category : ICategory
    setCategory: React.Dispatch<React.SetStateAction<ICategory>>
    user:IUser
    setUser: React.Dispatch<React.SetStateAction<IUser>>
}

const FormContext = createContext<FormProps | null>(null)


export const FormProvider=({children}:{children:React.ReactNode})=>{

    const [product,setProduct] = useState<IProduct>(emptyProduct)
    const [category,setCategory]=useState<ICategory>(emptyCategory)
    const [user,setUser]=useState<IUser>(emptyUser)
    return(
        <FormContext.Provider value={{product,setProduct,category,setCategory,user,setUser}}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm=()=>{
    const context = useContext(FormContext)
    if(!context){
        throw new Error("useForm debe usarse dentro de un FormProvider");
    }
    return context
}

