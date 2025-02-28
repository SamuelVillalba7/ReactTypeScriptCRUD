import { NavBar } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CategoryAdmin,ProductAdmin, UserAdmin } from './pages'
import "./App.css"

function App() {

  return (

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ProductAdmin/>}/>
        <Route path='/category-admin' element={<CategoryAdmin/>}/>
        <Route path='/user-admin' element={<UserAdmin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
