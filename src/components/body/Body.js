import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import {Routes, Route, Redirect } from "react-router-dom";


const Body = () =>{

    return(
        <div>
             <Routes>
                <Route path="/" exact component={<Home/>} />
                <Route path="/menu" exact element={<Menu/>} />
                <Route path="/about" exact component={<About/>} />
                <Route path="/contact" exact component={<Contact/>} />

            </Routes>

        </div>
    )

}
export default Body;
