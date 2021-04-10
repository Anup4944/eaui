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
import { Button } from "react-bootstrap";
import PasswordReset from "./pages/password-reset/PasswordReset";

function App() {
  return (
   <div className="App">
     <Router>
       <Switch>

    <Router path= "/dashboard">
      <Dashboard />
      </Router>

    <Router path="/reset-password">
      <PasswordReset />
    </Router>

    <Router path="/">
      <Login />
    </Router>

 


    </Switch>
    </Router>

   </div>
   


  );
}


export default App;
