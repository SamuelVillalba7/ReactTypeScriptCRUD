import { Route, Routes } from 'react-router-dom'
import { CategoryAdmin,ProductAdmin, UserAdmin } from "./pages"

export default function AppRouter(){
    return(
        <>
            <Routes>
                <Route path='/' element={<ProductAdmin/>}/>
                <Route path='/category-admin' element={<CategoryAdmin/>}/>
                <Route path='/user-admin' element={<UserAdmin/>}/>
            </Routes>
        </>
    )
}

