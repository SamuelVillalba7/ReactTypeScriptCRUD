
import { FormProductContainer, TableProdutsContainer } from "../../components";
import { FormProvider } from "../../context/FormContext";
import { RefreshProvider} from "../../context/RefreshTableContext";


export default function Home (){
    
    return(
        <> 
            <RefreshProvider>
                <FormProvider>
                    <TableProdutsContainer/>
                    <FormProductContainer/>                
                </FormProvider>       
            </RefreshProvider>
        </>
    )
}