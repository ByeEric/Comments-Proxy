import React, { PureComponent } from 'react';
import styles from '../styles';
import Radium from 'radium';

class Disclaimer extends PureComponent {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div style={[styles.disclaimerDiv.base]} key={'disclaimer-div'}>
        <h1
          key={'disclaimer-main'}
          styles={[styles.disclaimer.base]}
        >
          * animals are only sold if buyers meet strict 
          guidelines for animal rights and housing needs.
        </h1>
      </div>
    )
  }
}

Disclaimer = Radium(Disclaimer);
export default Disclaimer;