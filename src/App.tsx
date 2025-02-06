
import { NavBar } from './components'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Admin, Home } from './pages'
import "./App.css"
function App() {

  return (

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
