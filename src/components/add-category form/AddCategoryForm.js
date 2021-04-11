import React from 'react'
import { Row, Col,Button,Form } from "react-bootstrap";

const AddCategoryForm = () => {
    return (
        <div className="add category form">
        <Form> <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label> Add New Category</Form.Label>
      <Form.Control type="category" type="text" placeholder="Enter new Category" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Parent Category</Form.Label>
      <Form.Control as="select" defaultValue="0">
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
