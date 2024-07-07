import React from "react";
import Navigation from "./Navigation";
import { Routes,Route } from 'react-router-dom';

const Header = () =>{

    return(
        <div>
            <Navigation />
            <Routes>
                <Route  path='/' exact element={<h1>Home</h1>} />
                <Route  path='/new-burger' exact element={<h1>Add New Burger Page</h1>}  />
            </Routes>
        </div>
    )

}
export default Header;
