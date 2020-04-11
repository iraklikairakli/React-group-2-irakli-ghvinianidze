import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import main from "../main.png"
export default class componentName extends Component {
  render() {
    return (
         <Link to="/">
         <img src={main} />
       </Link>
    );
  }
}
