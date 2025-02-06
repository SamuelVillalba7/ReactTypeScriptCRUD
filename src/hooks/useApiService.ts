import { IFetchConfiguration, IFetchParams } from "../intefaces"
import { IServiceConfig } from "../intefaces/IServiceConfiguration"
import { useFetch } from "./useFetch"
import { useGetConfiguration } from "./useGetConfiguration"



export const useApiService=<T>({url,method,body}:IServiceConfig):IFetchParams<T>=>{
    
    const config:IFetchConfiguration =  useGetConfiguration(method)
    if(body !== undefined){
        config.body=body
    }

    return useFetch<T>(url ,config)
}