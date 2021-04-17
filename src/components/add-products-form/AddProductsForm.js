import React from 'react'
import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const product = {
    // name,qty,description,price,salePrice,images:[],thumbnail
}

const initialState = {
    name:" ",
    quantaty:0,
    isAvailable: "off",
    salePrice: 0.00,
    price: 0.00,
    description: "",
    image: [],
    categories: []
    



 }
const AddProductsForm = () => {


const [newProduct, setNewProduct] = useState(initialState);

const handleOnChange = e => {
    const { name , value } = e.target;

    setNewProduct({
        ...newProduct,
        [name]:value,

    })

}

const handleOnSubmit = e =>{
    e.preventDefault();
    
}



    return (
        <div>
    <Form>
  <Form.Group >
    <Form.Label>Name</Form.Label>
    <Form.Control name="name" type="text" placeholder="Enter product name"  value={newProduct.name} onChange={handleOnChange} required />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group >
    <Form.Check name="isAvailable"
        id="isAvailable" 
        type="switch"
        label="Available"></Form.Check>

  </Form.Group>

  <Form.Group >
    <Form.Label>Price</Form.Label>
    <Form.Control name="price" type="number" placeholder="45.00" value={newProduct.price}  onChange={handleOnChange} required/>
  </Form.Group>

  <Form.Group >
    <Form.Label>Sale Price</Form.Label>
    <Form.Control name="salePrice" type="number" placeholder="45.00"  value={newProduct.salePrice} onChange={handleOnChange} required/>
  </Form.Group>

  <Form.Group >
    <Form.Label>Sale End Date</Form.Label>
    <Form.Control name="saleEndDate" type="date" placeholder="45.00" value={newProduct.saleEndDate} onChange={handleOnChange} required />
  </Form.Group>

  <Form.Group >
    <Form.Label>Quantaty</Form.Label>
    <Form.Control name="quantaty" type="number" placeholder="00.00" value={newProduct.quantaty}  onChange={handleOnChange} required />
  </Form.Group>

  <Form.Group >
    <Form.Label>Description</Form.Label>
    <Form.Control name="description" type="textarea" placeholder="Write Full description" value={newProduct.description} onChange={handleOnChange} required/>
  </Form.Group>
  
  <Form.Group >
  <Form.Label>Images</Form.Label>
    <Form.Control name="images" type="file"  onChange={handleOnChange} value={newProduct.images} multiple  />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Categories</Form.Label>
    <Form.Control as="select" value={newProduct.categories} onChange={handleOnChange} multiple >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
        </div>
    )
}

export default AddProductsForm;
