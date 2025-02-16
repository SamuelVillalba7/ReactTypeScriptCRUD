import { createContext, useContext, useState } from "react"


interface ContextRefeshProps{
    refresh:number;
    handleRefresh:()=>void;
}

export const RefreshTableContext = createContext<ContextRefeshProps | null>(null)

export const RefreshProvider= ({children}:{children:React.ReactNode}) =>{

    const [refresh,setRefresh] =useState(0)
   
   
    const handleRefresh = () => {
        setRefresh((prev) => (prev === 0 ? 1 : 0));
    };

    return(
        <RefreshTableContext.Provider value={{refresh,handleRefresh}}>
            {children}
        </RefreshTableContext.Provider>
    )
}


export const useRefresh=()=>{
    const context = useContext(RefreshTableContext);
    if (!context) {
        throw new Error("useRefresh debe usarse dentro de un RefreshProvider");
    }
    return context ;
}