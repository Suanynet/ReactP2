import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Registro from "../Pages/Registro";
import Sesion from "../Pages/InicioSesion";
import Home from "../Pages/Home";

const Routing = () => {
    return (
       <Router>
         <Routes>
            <Route path= '/Registro' element={<Registro />} />
            <Route path= '/Sesion' element={<Sesion />} />
            <Route path= '/Home' element={<Home />} />
         </Routes>
       </Router>
    )
} 

export default Routing