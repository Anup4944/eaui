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

function App() {
  return (
   <div className="App">
     <Router>
       <Switch>
    <Router path= "/login">
      <Login/>
      </Router>

    <Router path="/dashboard">
      <Dashboard/>

    </Router>



    </Switch>
    </Router>

   </div>
   


  );
}


export default App;
