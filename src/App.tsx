
import { Route, Routes } from "react-router-dom"
import ForgetPass from "./pages/auth/ForgetPass"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from "./pages/Home/Home"
import MainPage from "./pages/MainPage/MainPage"
import ContactUs from "./pages/ContactUs/ContactUs"
import AboutUs from "./pages/AboutUs/AbouteUS"
import Faq from "./pages/FAQ/FAQ"
import BlogPage from "./pages/Blog/Blog"



function App() {


  return (
    <>

    <Routes>
     <Route path="/" element={<MainPage/>}/>
     <Route path="/blog" element={<BlogPage/>}/>
     <Route path="/contactus" element={<ContactUs/>}/>
     <Route path="/aboutus" element={<AboutUs/>}/>      
     <Route path="/faq" element={<Faq/>}/>      
     <Route path="/dashboard" element={<Home/>}/>
     <Route path="/auth/Register" element={<Register/>}/>                 
     <Route path="/auth/login" element={<Login/>}/>                    
     <Route path="/auth/forget" element={<ForgetPass/>}/>                    
                          
    </Routes>
      
   
    
    
    </>
  )
}

export default App
