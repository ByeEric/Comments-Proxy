// NPM Modules
import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

// React Components
import styles from '../styles';
import Button from './button';

// displays a pair of options
class Option extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      o1State: false,
      o1Background:'white',
      o1Color:'black',
      o2State: false,
      o2Background:'white',
      o2Color:'black',
    }
    this.changeColor = this.changeColor.bind(this);
  }

  componentDidMount () { // sets default 'start' options
    if(this.props.default === 'one') {
      this.setState({o1State:true,o1Background:'#4cc1df',o1Color:'white'})
    } 
    else if (this.props.default === 'two') {
      this.setState({o2State:true,o2Background:'#4cc1df',o2Color:'white'})
    } 
  }

  changeColor (target) {
    // Target One
    if(target === 'one') {
      if(!this.state.o1State) {
        this.setState({o1Background:'#4cc1df',o1Color:'white',o1State:!this.state.o1State}) 
      } else {this.setState({o1Background:'white',o1Color:'black',o1State:!this.state.o1State})}
      if(this.state.o2State === true) {
        this.setState({o2Background:'white',o2Color:'black',o2State:!this.state.o2State})
      }
    } 
    // Target Two
    else if (target === 'two') {
      if(!this.state.o2State) {
        this.setState({o2Background:'#4cc1df',o2Color:'white',o2State:!this.state.o2State}) 
      } else {this.setState({o2Background:'white',o2Color:'black',o2State:!this.state.o2State})}
      if(this.state.o1State === true) {
        this.setState({o1Background:'white',o1Color:'black',o1State:!this.state.o1State})
      }
    }
  }

  render () {
    return (
      <div>
        <Button 
          text={this.props.o1}
          func={_=>{this.changeColor('one');}}
          special={{
            backgroundColor:this.state.o1Background,
            color:this.state.o1Color,
            width:'90px',
            height:'28px',
            margin:'5px 1px 5px 0px',
          }}
        />
        <Button 
          text={this.props.o2}
          func={_=>{this.changeColor('two')}}
          special={{
            backgroundColor:this.state.o2Background,
            color:this.state.o2Color,
            width:'90px',
            height:'28px',
            margin:'5px 0px 5px 1px',
          }}
        />
      </div>
    )
  }
}

Option.propTypes = {
  // name of 
  o1: PropTypes.string.isRequired,
  o2: PropTypes.string.isRequired,
  // which option is default
  default: PropTypes.string
}

Option = Radium(Option);
export default Option;