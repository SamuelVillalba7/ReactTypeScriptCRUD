import { IFetchConfiguration } from "../intefaces";


export const useGetConfiguration= (method:"GET" | "POST" | "PUT" | "DELETE" , body? :string):IFetchConfiguration =>{
   
    const config:IFetchConfiguration ={
        method : method,
        headers :{
            "Content-Type": "application/json"
        }
    } 
    if(body !== undefined){
        config.body= body;
    }
    return config;
  
    
}