import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Productlist from './components/ProductList'



class App extends Component {
  render() {
    return (
      <React.Fragment>  
        <Navbar/>
        <Switch>
          <Route exact path = "/" component={Productlist} />
          <Route path = "/details" component={Details} />
          <Route path = "/cart" component={Cart} / >
        </Switch>
      </React.Fragment>
  

    );
  }
}



export default App;

