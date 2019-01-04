// NPM Modules
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Radium from 'radium';
// React components from files
import Button from './button';
import Link from './link';
import styles from '../styles';

// Displays item details much like a title
class Title extends PureComponent {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div style={[styles.titleDiv.base]}>
        <Link text={this.props.pet.class} special={{fontSize:'16px'}} link={`https://en.wikipedia.org/wiki/${this.props.pet.class}`}/>
        <Link text={this.props.pet.family} special={{fontSize:'16px'}} link={`https://en.wikipedia.org/wiki/${this.props.pet.family}`}/>
        <Link text={this.props.pet.genus} special={{fontSize:'16px'}} link={`https://en.wikipedia.org/wiki/${this.props.pet.genus}`}/>
        <Link text={this.props.pet.species} special={{fontSize:'27px'}} link={`https://en.wikipedia.org/wiki/${this.props.pet.species}`}/>
      </div>
    )
  }
}

Title = Radium(Title);
export default Title;
