import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Services from "./component/Services";
import About from "./component/About";

import Blog from "./component/Blog";
import Contact from "./component/Contact";
import { Star, Sun } from "lucide-react";



const App = () => {
  return (
    <>
  

<Navbar></Navbar>


      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Blog" element={<Blog/>} />
         
 <Route path="/contact" element={<Contact/>} />
        





      </Routes>

   
    </>
  );
};

export default App