
import { useRefresh } from "../../context/RefreshTableContext";
import { IButton} from "../../intefaces";

import "./Button.css"

export default function Button ({label,method,classname,refresh}:IButton){
    
    const {handleRefresh}=useRefresh()

    const handleClick =()=>{
       
       method()
       
        if(refresh === true){
            setTimeout(() => {
                handleRefresh()
              }, 200);
           
        }
    }
    


    return (
        <>
            <button className={`btn ${classname}`} onClick={handleClick}>
                {label}
            </button>
        </>
    )
}