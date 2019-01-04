// NPM Modules
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Radium from 'radium';
// React components from files
import styles from '../styles';
import Button from './button';
import Link from './link';
import Title from './title';

// shows price of pet in US Dollars
let Price = (props) => {
  return (
    <div style={[styles.priceDiv.base]}>
      <h1
        style={[
          styles.price.base
        ]}
      >{'$'+props.price}</h1>
    </div>
  )
}

Price = Radium(Price);
export default Price;
