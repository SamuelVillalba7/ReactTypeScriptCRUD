import { useForm } from "../../context/FormContext";
import { ICategory } from "../../intefaces";
import Form from "../Form/Form";
import FormButtons from "../FormButtons/FormButtons";

export default function FormCategoryContainer(){
    const {category,setCategory}= useForm()
    return(
        <>
            <Form<ICategory> 
                itemForm={category} 
                setItemForm={setCategory} 
            >
                 <FormButtons<ICategory> 
                    item={category} 
                    setItem={setCategory}/>
            </Form>
        </>
    )
}