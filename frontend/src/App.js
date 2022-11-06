import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {user} = useContext(AuthContext)

  const {darkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode === true ? "light" : "dark"}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Home/> : <Navigate to='/login' />} />
          <Route path="/signup" element={!user ? <Signup/> : <Navigate to='/'/>} />
          <Route path="/login" element={!user ? <Login/> : <Navigate to='/'/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
