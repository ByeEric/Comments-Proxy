import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import styles from '../styles';

// a generic / standard Button used to standardize buttons
// takes a text |string| #
// takes a func |function| #
// takes a width |string|
// takes a height |string|
class Button extends PureComponent {
  constructor (props) {
    super(props);
    this.height;
    this.width; // if props.width or props.height was passed in override set value
    props.width ? this.width = props.width : this.size = '75px';
    props.height ? this.height = props.height : this.size = '30px';
  }
  
  render () {
    return (
      <div style={[
        styles.uiButtonDiv.base,
        styles.uiButtonDiv.primary
      ]}>
        <button 
        className="ui-button"
        style={[
          styles.uiButton.base,
          styles.uiButton.primary,
          {
            width:this.width,
            height:this.height
          }
        ]}
        onClick={this.props.func}
        >{this.props.text}</button>
      </div>
    )
  }
}

Button.propTypes = {
  //the text of the button
  text: PropTypes.string.isRequired,
  // what the button does when clicked
  func: PropTypes.func.isRequired,
  // width / height
  width: PropTypes.string,
  height: PropTypes.string
}

// radium allows a style array
Button = Radium(Button);
export default Button;