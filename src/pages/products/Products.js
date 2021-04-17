import React from 'react'
import { Button } from 'react-bootstrap';
import DefaultLayout from '../../components/layout/DefaultLayout';
import ProductsListsTable from '../../components/product-table/ProductsListsTable';
import { useHistory } from "react-router-dom";

const Product = () => {

}


const Products = () => {
    const history = useHistory();
    return (
   
        
     <DefaultLayout> 
     <div className="products" >Welcome to the Products page.</div>
     <h1> Products</h1>
     <Button varient= "success" onClick= {() => history.push("/products/new")}>Add New Products</Button>




     <div className="products-list" >
     <ProductsListsTable/>
     </div>
    
     </DefaultLayout>
     
            
       
    )
}

export default Products