import { useState } from "react";
import { Data, ErrorType, IFetchConfiguration, IFetchParams } from "../intefaces";



 export  const useFetch = <T>(url:string, config:IFetchConfiguration):IFetchParams<T> =>{

    const [data,setData]=useState<Data<T>>(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState<ErrorType>(null)
    
 
        const fetchData = async () =>{
            setLoading(true)
            try{
                
                const response = await fetch(url,config)
                console.log(response)
                if(!response){
                    console.log("!2")
                    throw new Error("Error en la peticion")
                    console.log("error")
                }
                const jsonData = await response.json();
            
                setData(jsonData);
                console.log("!")

            }catch(err){
                setError(err as Error)
            }finally{
                setLoading(false)
            }
        }

      


    return {data,loading,error,fetchData}

}












/*import { useEffect, useState } from "react";
import { Data, ErrorType, IFetchConfiguration, IFetchParams } from "../intefaces";



 export  const useFetch = <T>(url:string, config:IFetchConfiguration):IFetchParams<T> =>{

    const [data,setData]=useState<Data<T>>(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState<ErrorType>(null)
    
    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true)
            try{
                const response = await fetch(url,config)
                if(!response){
                    throw new Error("Error en la peticion")
                }
                const jsonData = await response.json();
                setData(jsonData);

            }catch(err){
                setError(err as Error)
            }finally{
                setLoading(false)
            }
        }

        fetchData();

    },[url])

    return {data,loading,error}

}*/