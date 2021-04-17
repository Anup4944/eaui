import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from "./partials/Footer";
import Header from './partials/Header';
import { Row, Col,Jumbotron } from "react-bootstrap";
import "./DefaultLayout.css";
import SideBarNav from '../sidebar/SideBarNav';

const DefaultLayout = ({children}) => {
    return (
        <div fluid className="default-layout">
            
                <div className="left-bar">
                <div className="admin logo p-2 mb-5">Admin Pannels</div>
                <hr className="divider"  /> 

                <SideBarNav />
                </div>
               
                <div className="main">
                <Header /> 
                <Jumbotron>{children}</Jumbotron>
                
                <Footer />
                </div>
                
       
            

            </div>

        
    );
};

export default DefaultLayout;
