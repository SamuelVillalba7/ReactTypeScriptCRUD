import { useForm } from "../../context/FormContext"
import { IProduct } from "../../intefaces"
import Form from "../Form/Form"
import FormButtons from "../FormButtons/FormButtons"

export default function FormProductContainer(){
    const {product,setProduct}=useForm()
    return(
        <>
            <Form<IProduct>
                itemForm={product} 
                setItemForm={setProduct}
            >
                <FormButtons
                    item={product} 
                    setItem={setProduct}
                />
            </Form>
        </>
    )
}