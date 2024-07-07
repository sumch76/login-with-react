import { Routes,Route, Outlet } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/admin" element={<>  Admin page<Outlet/></>}/>
      <Route path="users" element={<> Users page </>}/> */}
    </Routes>
    </>
  )
}

export default App
