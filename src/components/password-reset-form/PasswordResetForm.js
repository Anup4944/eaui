import React, {useState} from 'react'
import { Form,Row,Col,Card,Button } from "react-bootstrap";
import  "./passwordResetForm.style.css";




export const PasswordResetForm = () => {

 const [email, setEmail] = useState() // to get the data from userbox

 const handleOnChange = e => { 
  const {name, value} = e.target;  // destructuring name and value, receiving name and value.
  

  setEmail(value)
 }


 const handleOnSubmit = e=>{ 
   e.preventDefault(); /// prevent automactic loading 

 }
  




    return (
        <div className="login-form">
  <Card calssName="p-4">
  <Form onSubmit={handleOnSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" type="email"  value= {email} onChange={handleOnChange} placeholder="Enter your email" required/>
    </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<a href = "/" className="text-right">
  Back to Login
</a>

</Card>
            
           
</div>
    )
}

