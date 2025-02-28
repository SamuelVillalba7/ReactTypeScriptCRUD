
import "./Form.css"
import { EntityType} from "../../intefaces"
import { ReactNode } from "react";
import DropdownCategory from "../DropdownCategory/DropdownCategory";
import FormInput from "../FormInput/FormInput";



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
                                {key ==="idCategory" ? (
                                    <DropdownCategory handleChange={handleChange}/>
                                ):(  
                                    <FormInput 
                                        key={key} 
                                        fieldKey={key} 
                                        value={value} 
                                        handleChange={handleChange}
                                    />   
                                )}
                        </label>
                    </div>
                    )
                ))}
                
            </form>
            {children}
            
        </div>
    )
}