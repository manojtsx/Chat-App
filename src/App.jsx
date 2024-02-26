import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  to="/" element={<Home />}/>
        <Route  to="/login" element={<Login />}/>
        <Route  to="/register" element={<Register />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
