import React from 'react'
import AddCategoryForm from '../../components/add-category form/AddCategoryForm';
import DefaultLayout from '../../components/layout/DefaultLayout';
import Footer from "../../components/layout/partials/Footer";
import Header from "../../components/layout/partials/Header";
import { ListGroup } from "react-bootstrap";

const Category = () => {
    return (
    <DefaultLayout> 
        <div className="category">
            
        <AddCategoryForm/>
        <hr />
        <div className="listitem">
        <ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
        </div>
        
        
        
        
        
        
        </div>
    </DefaultLayout>
    
            
       
    )
}

export default Category
