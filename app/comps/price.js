import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import Link from './link';
import Title from './title';
import Axios from 'axios';
import styles from '../styles';
import Radium from 'radium';

class Price extends PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div style={[styles.priceDiv.base]}>
        <h1
          style={[
            styles.price.base
          ]}
        >{'$'+this.props.price}</h1>
      </div>
    )
  }
}

Price = Radium(Price);
export default Price;