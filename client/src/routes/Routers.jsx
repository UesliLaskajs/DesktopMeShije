import Home from "../pages/Home"
import AboutUs from "../pages/Aboutus"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Profile from "../pages/Profile"
import Menu from "../pages/Menu"
import { Routes, Route } from "react-router-dom"


const Routers = () => {
    return (

        
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/menu" element={<Menu/>}/>
        </Routes>
    )
}

export default Routers;