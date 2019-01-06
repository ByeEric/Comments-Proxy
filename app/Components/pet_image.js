import React from 'react';
import Radium from 'radium';

import styles from '../styles';

let PetImage = (props) => {
  return (
    <div style={[styles.petImageDiv.base]}>
      <img 
        src={props.image_url} 
        alt={props.species}
        width={'80%'}
        style={[styles.petImage.base]}>
      </img>
    </div>
  )
}

PetImage = Radium(PetImage);
export default PetImage;