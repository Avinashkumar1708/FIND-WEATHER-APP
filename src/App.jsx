import { Route, Routes } from "react-router-dom"
import Nav from "./components/Layouts/Nav"
import Home from "./components/Pages/Home"


function App() {


  return (
    <>
    <Nav/>
     <Routes>
      <Route path="/" element={<Home/>} />
     </Routes>
    </>
  )
}

export default App
