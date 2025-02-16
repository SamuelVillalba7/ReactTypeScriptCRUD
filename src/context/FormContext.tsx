import React, { createContext, useContext, useState } from "react";
import {emptyCategory, emptyProduct, ICategory, IProduct } from "../intefaces";

interface FormProps{
    product : IProduct
    setProduct: React.Dispatch<React.SetStateAction<IProduct>>
    category : ICategory
    setCategory: React.Dispatch<React.SetStateAction<ICategory>>
}

const FormContext = createContext<FormProps | null>(null)


export const FormProvider=({children}:{children:React.ReactNode})=>{

    const [product,setProduct] = useState<IProduct>(emptyProduct)
    const [category,setCategory]=useState<ICategory>(emptyCategory) 
    return(
        <FormContext.Provider value={{product,setProduct,category,setCategory}}>
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

