import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Contact from './Component/Contact/Contact';
import Navbar from './Component/Navbar/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';


function App() {
  return (

    <> 
     <Navbar />
    <Switch >
      <Route exact path="/" component={Home}></Route>
      <Route  exact path="/about" component={About}></Route>
      <Route exact path="/services" component={Services}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Redirect to="/"></Redirect>
    
    </Switch>
    
    </>


    
      
   
  );
}

export default App;
