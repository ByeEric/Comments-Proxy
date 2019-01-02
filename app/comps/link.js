import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropsTypes from 'prop-types';
import styles from '../styles';

// a generic / standard Button used to standardize buttons
// takes a text |string| #
// takes a func |function| #
// takes a size |string|
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
        styles.uiLinkDiv.primary
      ]}>
      <em>
        <a
        className='ui-link'
        href={this.props.link ? this.props.link : null}
        target={'_blank'}
        style={[
          styles.uiLink.base,
          styles.uiLink.primary,
          {fontSize:this.size}
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
  text: PropsTypes.string.isRequired,
  // what the anchor does
  func: PropsTypes.func,
  // where it goes
  link: PropsTypes.string,
  // what size the link is
  size: PropsTypes.string
}

// radium allows for a style array
Link = Radium(Link);
export default Link;