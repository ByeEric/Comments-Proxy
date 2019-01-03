import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import styles from '../styles';

// a generic / standard Button used to standardize buttons

// takes a text |string| #
// takes a func |function| #
// takes a size |string|
// takes a special |object|
// takes a specialDiv |object|

// special props are objects containing inline css 
// used to do special styling on generic comps

// a generic / standard Link used to standardize Links
class Link extends PureComponent {
  constructor (props) {
    super(props);
    this.size; // if porps.size was passed in, override the set size
    props.size ? this.size = props.size : this.size = '14px';
  }

  render () {
    return (
      <div style={[
        styles.uiLinkDiv.base,
        styles.uiLinkDiv.primary,
        this.props.specialDiv
      ]}>
        <em>
          <a
          className='ui-link'
          href={this.props.link ? this.props.link : null}
          target={'_blank'}
          style={[
            styles.uiLink.base,
            styles.uiLink.primary,
            {fontSize:this.size},
            this.props.special
          ]}
          >{this.props.text}
          </a>
        </em>
      </div>
    )
  }
}

Link.propTypes = {
  // what the anchor says
  text: PropTypes.string.isRequired,
  // what the anchor does
  func: PropTypes.func,
  // where it goes
  link: PropTypes.string,
  // what size the link is
  size: PropTypes.string,
  // special css 
  special: PropTypes.object,
  // special div css
  specialDiv: PropTypes.object
}

// radium allows for a style array
Link = Radium(Link);
export default Link;