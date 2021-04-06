import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from "./partials/Footer";
import Header from './partials/Header';
import { Row, Col } from "react-bootstrap";
import "./DefaultLayout.css";

const DefaultLayout = ({children}) => {
    return (
        <div fluid>
            <Row>
                <Col>
                <div className="left-bar">
                I am from the left menu.
                </div></Col>
                <Col>
                <div className="main">
                <Header />
                {children}
            <Footer />
                </div>
                </Col>
            </Row>
       
            

            </div>

        
    );
};

export default DefaultLayout;
