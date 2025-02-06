
import { IButton} from "../../intefaces";

import "./Button.css"

export default function Button ({label,method,classname}:IButton){
    
    return (
        <>
            <button className={`btn ${classname}`} onClick={method}>
                {label}
            </button>
        </>
    )
}