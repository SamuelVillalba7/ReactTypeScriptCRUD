import { ReactNode } from "react"

import { IServiceConfig } from "../../intefaces"

interface Props{
    children:ReactNode
    serviceConfig:IServiceConfig
    flag:boolean
}

export default function ButtonFetch({children}:Props){
    
  

    return(
        <div>
            {children}
        </div>
    )
}