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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./pages/Chat";
import ProfilePage from "./pages/user/ProfilePage";
import ProfileErrorPage from "./pages/user/ProfileErrorPage";
import ProfileEditPage from "./pages/user/ProfileEditPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/profile" element={<ProfileErrorPage />}>
            <Route path="edit/:id" element={<ProfileEditPage />} />
            <Route path=":id" element={<ProfilePage />} />
          </Route>
        </Routes>
        <Footer />
        <GoToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
