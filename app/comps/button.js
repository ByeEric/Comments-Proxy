import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import styles from '../styles';

// a generic / standard Button used to standardize buttons

// takes a text |string| #
// takes a func |function| #
// takes a width |string| <-< should depricate
// takes a height |string| <-< should depricate
// takes a special |object|
// takes a specialDiv |object|

// special props are objects containing inline css 
// used to do special styling on generic comps
let Button = (props) => {
  return (
    <div style={[
      styles.uiButtonDiv.base,
      styles.uiButtonDiv.primary,
      props.specialDiv
    ]}>
      <button 
      className="ui-button"
      style={[
        styles.uiButton.base,
        styles.uiButton.primary,
        props.special
      ]}
      onClick={props.func}
      >{props.text}</button>
    </div>
  )
}

Button.propTypes = {
  //the text of the button
  text: PropTypes.string.isRequired,
  // what the button does when clicked
  func: PropTypes.func.isRequired,
  // special css
  special: PropTypes.object,
  // special div css
  specialDiv: PropTypes.object
}

// radium allows a style array
Button = Radium(Button);
export default Button;