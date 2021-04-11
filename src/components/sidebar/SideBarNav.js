import React from 'react';
import "./SideBarNav.style.css";

const SideBarNav = () => {
    return (
        <div className="sidebar-nav">
            <ul>
            <li>DashBoard</li>
            <li><a href="/Category">Category</a></li>
            <li>Products</li>
            <li>Orders</li>
            <li>Users</li>
            <li>Accounts</li>
            
            </ul>
            
        </div>
    )
}

export default SideBarNav
