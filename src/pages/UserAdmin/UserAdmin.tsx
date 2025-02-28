import { FormUserContainer, TableUserContainer } from "../../components";
import { FormProvider } from "../../context/FormContext";
import { RefreshProvider } from "../../context/RefreshTableContext";

export default function UserAdmin(){
    return(
        <>
            <FormProvider>
                <RefreshProvider>
                    <TableUserContainer/>
                    <FormUserContainer/>
                </RefreshProvider>
            </FormProvider>
        </>
    )
} 