import Login  from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import DefaultLayout from "./components/layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Category from "./pages/category/Category";
import { Button } from "react-bootstrap";
import PasswordReset from "./pages/password-reset/PasswordReset";
import Products from "./pages/products/Products.js";
import ProductsListsTable from "./components/product-table/ProductsListsTable";
import AddProducts from "./pages/products/AddProducts";

function App() {
  return (
   <div className="App">
     <Router>
       <Switch>

    <Route exact path= "/dashboard">
      <Dashboard />
      </Route>

      <Route exact path= "/category">
      <Category />
      </Route>

      <Route exact path= "/products">
      <Products />
      </Route>

      <Route exact path= "/products/new">
      <AddProducts />
      </Route>

    <Route exact path="/reset-password">
      <PasswordReset />
    </Route>

    <Route path="/">
      <Login />
    </Route>

 


    </Switch>
    </Router>

   </div>
   


  );
}


export default App;
