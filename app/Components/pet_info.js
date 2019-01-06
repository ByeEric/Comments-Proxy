import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Radium from 'radium';

import PetImage from './pet_image';
import PetDescription from './pet_description';
import styles from '../styles';


class PetInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pet_id: 13124,
      genus: null,
      species: null,
      description: null,
      image_url: null
    }
  }

  componentDidMount() {
    console.log('mounted')
    axios.get(`http://ec2-52-90-48-243.compute-1.amazonaws.com:3000/api/info/${this.props.pet_id}`)
      .then((response) => {
      console.log('response to initial GET: ', response.data);
      this.setState({
        genus: response.data.genus,
        species: response.data.species,
        description: response.data.description,
        image_url: response.data.image_url
      })
    })
  }

  render() {
    return (
      <div style={[styles.description.primary, {display:'inline-block'}]}>
        <PetImage image_url={this.state.image_url} />
        <PetDescription description={this.state.description} pet={this.state.species}/>
      </div>
    )
  }
}

PetInfo = Radium(PetInfo);
export default PetInfo;
