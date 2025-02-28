
import "./Form.css"
import { EntityType} from "../../intefaces"
import { ReactNode } from "react";
import Dropdown from "../Dropdown/Dropdown";



interface Props<T>{
    itemForm:EntityType ,
    setItemForm: React.Dispatch<React.SetStateAction<T>>,
    children?:ReactNode 
}
export default function Form<T>({itemForm,setItemForm,children}:Props<T>){
    
    const handleChange = (key: string, value: unknown) => {
        setItemForm((prev) => ({
          ...prev,
          [key]: value,
        }));
      };
   

    return(
        <div className="container-form">
           
            <form className="form-section form">
            <h1>{itemForm.type}</h1>
                {Object.entries(itemForm).map(([key,value])=>(
                   key !== "type" && (
                    <div className="form-group" key={key}>
                        <label className="form-label" >
                                {key}
                            {
                            
                            key==="idCategory"?(
                                <Dropdown handleChange={handleChange} text={key}  />
                            ):key==="id"? (
                                <input className="form-control" placeholder={`ingrese ${key}`} type="text" value={  value  } disabled  />
                            ):typeof value === "string" || typeof value === "number"? (
                                    <input className="form-control" placeholder={`ingrese ${key}`} type="text" value={  value  }  onChange={(e) => handleChange(key, e.target.value)}  />
                            ): typeof value === "boolean"?(
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={value}
                                    onChange={(e) => handleChange(key,e.target.checked)}
                                />
                            ):null}
                        </label>
                    </div>
                    )
                ))}
                
            </form>
            {children}
            
        </div>
    )
}