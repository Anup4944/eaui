import React from 'react'
import { Form,Row,Col,Card,Button } from "react-bootstrap";
import  "./loginform.style.css";



export const LoginForm = () => {
    return (
        <div className="login-form">
            <Card calssName="p-4">
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter your email" />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
  
   
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</Card>
            
           
</div>
    )
}

