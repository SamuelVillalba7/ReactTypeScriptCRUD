import { FormCategoryContainer, TableCategoryContainer } from "../../components";
import { FormProvider } from "../../context/FormContext";
import { RefreshProvider } from "../../context/RefreshTableContext";

export default function AdminCategory(){
    return(
        <>
            <FormProvider>
                <RefreshProvider>
                    <TableCategoryContainer/>
                    <FormCategoryContainer/>
                </RefreshProvider>
            </FormProvider>


        </>
    )
}