
import "./App.css"
import { ReactNode } from 'react'
import { NavBar } from "./components"

interface Props{
  children:ReactNode
}

function App({children}:Props) {

  return (
    <>
      <NavBar/>
      {children}
      <h1>footer</h1>
    </>

  )
}

export default App
