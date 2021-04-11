import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";


import { Row, Col,Button,Form,Spinner, Alert } from "react-bootstrap";
// import { saveCategories,getCategories } from "../add-category-form/AddCategoryForm.js";

import { AddCategory, addNewCategory } from "../../pages/category/CategoryAction.js";

const initialState = {
    name : "",
   
    parentCat : 0 ,
}

export const AddCategoryForm = () => {
  const dispatch = useDispatch()
  const{isLoading, status, message} = useSelector (state => state.category)

const [category, setCategory] = useState(initialState)

const handleOnChange = e =>{
    const {name,value} = e.target;

    setCategory({
        ...category,

        
        [name] : value,
    })
}

const handleOnSubmit = e =>{
    e.preventDefault();
    dispatch(addNewCategory(category));


}



    return (
        <div className="add category form">

          {
            isLoading && (<Spinner variant = "primary" animation="border" />)
      
          }

          {
            message && <Alert variant = {status === 'success' ? 'success' : 'danger' }>
              {message}
            </Alert>
          }


        <Form onSubmit = {handleOnSubmit}>
             <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label> Add New Category</Form.Label>
      <Form.Control name="name" type="text" defaultValue={category.parentCat} onChange={handleOnChange} placeholder="Enter new Category" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Parent Category</Form.Label>
      <Form.Control as="select" name="parentCat"  onChange={handleOnChange} defaultValue={category.parentCat}>
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
    </Form.Row>

  <Button variant="primary" type="submit">
    ADD
  </Button>
</Form>
</div>
    )
}

export default AddCategoryForm
