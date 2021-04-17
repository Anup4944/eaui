import React, {useState} from 'react'
import { Form,Row,Col,Card,Button } from "react-bootstrap";
import  "./loginform.style.css";
import { useHistory } from "react-router-dom";


const initialState = {
  email: "",
  password: "",
}



export const LoginForm = () => {
const history = useHistory()

 const [login, setLogin] = useState(initialState) // to get the data from userbox

 const handleOnChange = e => { 
  const {name, value} = e.target;  // destructuring name and value, receiving name and value.
  

  setLogin({ // override the value
    ...login,
    [name]:value,

  })
 }
 
 const handleOnSubmit = e=>{ 
   e.preventDefault(); /// prevent automactic loading 
   console.log(login)
   history.push("/dashboard")
   


 }
  




    return (
        <div className="login-form">
  <Card calssName="p-4">
  <Form onSubmit={handleOnSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" type="email"  value= {login.email} onChange={handleOnChange} placeholder="Enter your email" required/>
    </Form.Group>
  
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" type="password"  value= {login.password} onChange={handleOnChange} placeholder="Enter your password" required/>
    </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<a href = "/reset-password" className="text-right">
  Forgot Password?
</a>

</Card>
            
           
</div>
    )
}

