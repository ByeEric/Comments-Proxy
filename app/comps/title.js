import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import Link from './link';
import Axios from 'axios';
import styles from '../styles';
import Radium from 'radium';

class Title extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div style={[styles.titleDiv.base]}>
        <Link text={this.props.pet.class} size={'20px'} link={`https://en.wikipedia.org/wiki/${this.props.pet.class}`}/>
        <Link text={this.props.pet.family} size={'20px'} link={`https://en.wikipedia.org/wiki/${this.props.pet.family}`}/>
        <Link text={this.props.pet.genus} size={'20px'} link={`https://en.wikipedia.org/wiki/${this.props.pet.genus}`}/>
        <Link text={this.props.pet.species} size={'26px'} link={`https://en.wikipedia.org/wiki/${this.props.pet.species}`}/>
      </div>
    )
  }
}

Title = Radium(Title);
export default Title;