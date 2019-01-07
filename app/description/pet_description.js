import React from 'react';
import Radium from 'radium';

import styles from '../styles';

let PetDescription = (props) => {
  return (
    <div className={'describe'}>
      <p style={[styles.description.base]}>{props.description}</p>
    </div>
  )
}

PetDescription = Radium(PetDescription);
export default PetDescription;