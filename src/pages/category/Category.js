import React from 'react'
import AddCategoryForm from '../../components/add-category-form/AddCategoryForm';
import DefaultLayout from '../../components/layout/DefaultLayout';

import { ListGroup } from "react-bootstrap";
import ListCategory from '../../components/list-category/ListCategory';


const Category = () => {
    
    return (
    <DefaultLayout> 
        <div className="category">
            
        <AddCategoryForm/>
        <hr />
        <div className="listitem">
        <ListCategory />
        </div>
        
        </div>
    </DefaultLayout>
    
            
       
    )
}

export default Category
