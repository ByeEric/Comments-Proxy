import React, { PureComponent } from 'react';
import Radium from 'radium';
import styles from '../styles';
import Button from './button';

class Option extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      o1: false,
      o2: false
    }
  }

  render () {
    return (
      <div>
      <button key={'one'} style={[styles.toggle.base, styles.toggle.primary]}>{this.props.o1}</button>
      <button key={'two'} style={[styles.toggle.base, styles.toggle.primary]}>{this.props.o2}</button>
      </div>
    )
  }
}

Option = Radium(Option);
export default Option;