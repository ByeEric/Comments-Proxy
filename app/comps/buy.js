// NPM Modules
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Radium from 'radium';

// React Components from files
import Button from './button';
import Link from './link';
import Title from './title';
import styles from '../styles';
import Price from './price';

class Buy extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div style={[styles.titleDiv.base]}>
        <Price price={this.props.price}/>
        <Button text={'purchase'} func={this.props.func}/>
      </div>
    )
  }
}

// React PropTypes
Buy.propTypes = {
  // Price string from pet object
  price: PropTypes.string.isRequired,
  // Function that runs when Button comp is pressed
  func: PropTypes.func.isRequired
}

Buy = Radium(Buy);
export default Buy;