import { useForm } from "../../context/FormContext";
import Form from "../Form/Form";
import FormButtons from "../FormButtons/FormButtons";

export default function FormUserContiner(){
    
    const {user,setUser}= useForm()

    return(
        <>
            <Form itemForm={user} setItemForm={setUser}>
                <FormButtons
                    item={user}
                    setItem={setUser}
                />
            </Form>
        </>
    )
}