import React from 'react';
import "./SideBarNav.style.css";
import { Link } from "react-router-dom";


const SideBarNav = () => {
    return (
        <div className="sidebar-nav">
            <ul>
            <li>
            <Link to = "/dashboard"> <i className="fas fa-tachometer-alt"></i>
            DashBoard  </Link> </li>
            <li><Link to = "/category"> <i className="fas fa-window-restore"></i>Category  </Link> </li>
            <li><Link to = "/products"> <i className="fas fa-shopping-cart"></i> Product  </Link> </li>
            <li><Link to = "/orders"><i className="fas fa-sort"></i>Orders   </Link> </li>
            <li><Link to = "/users"><i className="fas fa-users"></i>Users   </Link> </li>
            <li><Link to = "/accounts"> <i className="far fa-user-circle"></i> Accounts   </Link> </li>
            
            </ul>
            
        </div>
    )
}

export default SideBarNav
