import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoToTop from "./components/mini-components/reusable-components/GoToTop";
import HomePage from "./pages/HomePage";
import Logout from "./components/mini-components/Logout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
        <GoToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
