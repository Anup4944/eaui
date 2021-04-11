import React from 'react'
import {Navbar} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" varient="dark">
        {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <i class="far fa-bell text-primary"></i>
          </Navbar.Text>

          <Navbar.Text>
          <i class="fas fa-user text-primary"></i> Logout 
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Header
