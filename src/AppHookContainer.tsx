import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import App from './App.tsx'
export default function AppHookContainer(){
        return(
            <>
       
                <BrowserRouter>
                    <App>
                        <AppRouter/>
                    </App>
                </BrowserRouter>

            </>
        )
    }