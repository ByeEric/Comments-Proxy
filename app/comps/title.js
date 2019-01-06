// NPM Modules
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Radium, { StyleRoot } from 'radium';
// React components from files
import Button from './button';
import Link from './link';
import styles from '../styles';

// Displays item details much like a title
class Title extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      class: {opacity:0},
      family: {display:'none'},
      genus: {display:'none'},
    }
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show (text) {
    if(text === 'class') this.setState({
      class:{ 
        opacity:1,
        transitionDuration:'0.3s',
      }
    });
    else if(text === 'family') this.setState({
      family:{
        opacity:1,
        transitionDuration:'0.3s',
      }
    });
    else if(text === 'genus') this.setState({
      genus:{
        opacity:1,
        transitionDuration:'0.3s',
      }
    });
  }

  hide (text) {
    if(text === 'class') this.setState({
      class:{
        opacity:0,
        transitionDuration:'0.3s',
      }
    });
    else if(text === 'family') this.setState({
      family:{
        opacity:0,
        transitionDuration:'0.3s',
      }
    });
    else if(text === 'genus') this.setState({
      genus:{
        opacity:0,
        transitionDuration:'0.3s',
      }
    });
  }

  render () {
    return (
      <div style={[styles.titleDiv.base]}>
        <div style={[styles.infoDiv.base]} >
          <div 
            style={{display:'inline-block'}} 
            onMouseLeave={_=>this.hide('class')} 
            onMouseEnter={_=>this.show('class')}>
              <Link 
                text={this.props.pet.class} 
                special={{fontSize:'16px'}} 
                specialDiv={{margin:'0%',display:'inline-block'}} 
                link={`https://en.wikipedia.org/wiki/${this.props.pet.class}`}/>
          </div>
          <h1 style={[styles.info.base, this.state.class]}>{'class'}</h1>
        </div>
        <div>
          <div 
            style={{display:'inline-block'}} 
            onMouseLeave={_=>this.hide('family')} 
            onMouseEnter={_=>this.show('family')}>
              <Link 
                text={this.props.pet.family} 
                special={{fontSize:'16px'}} 
                specialDiv={{margin:'0%',display:'inline-block'}} 
                link={`https://en.wikipedia.org/wiki/${this.props.pet.family}`}/>
          </div>
          <h1 style={[styles.info.base, this.state.family]}>{'family'}</h1>
        </div>
        <div>
          <div 
            style={{display:'inline-block'}} 
            onMouseLeave={_=>this.hide('genus')} 
            onMouseEnter={_=>this.show('genus')}>
              <Link 
                text={this.props.pet.genus} 
                special={{fontSize:'16px'}} 
                specialDiv={{margin:'0%',display:'inline-block'}} 
                link={`https://en.wikipedia.org/wiki/${this.props.pet.genus}`}/>
          </div>
          <h1 style={[styles.info.base, this.state.genus]}>{'genus'}</h1>
        </div>
          <Link 
            text={this.props.pet.species} 
            special={{fontSize:'27px'}} 
            specialDiv={{margin:'0%',display:'inline-block'}} 
            link={`https://en.wikipedia.org/wiki/${this.props.pet.species}`}/>
      </div>
    )
  }
}

Title = Radium(Title);
export default Title;
