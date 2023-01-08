import React from 'react';
import { NavLink } from "react-router-dom";
const Panel = () => {
    return(
        <div id="panel">
            <div className='category'>          
            <NavLink  className="d-link" to="/categories">Categories</NavLink>
            <NavLink  className="d-link" to="/products">Products</NavLink>
            </div>   
        </div>
    )


}
export default Panel
