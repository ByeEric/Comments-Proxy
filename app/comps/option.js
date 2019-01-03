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
      this.setState({o1State:true,o1Background:'#0074D9',o1Color:'white'})
    } 
    else if (this.props.default === 'two') {
      this.setState({o2State:true,o2Background:'#0074D9',o2Color:'white'})
    } 
  }

  changeColor (target) {
    // Target One
    if(target === 'one') {
      if(!this.state.o1State) {
        this.setState({o1Background:'#0074D9',o1Color:'white',o1State:!this.state.o1State}) 
      } else {this.setState({o1Background:'white',o1Color:'black',o1State:!this.state.o1State})}
      if(this.state.o2State === true) {
        this.setState({o2Background:'white',o2Color:'black',o2State:!this.state.o2State})
      }
    } 
    // Target Two
    else if (target === 'two') {
      if(!this.state.o2State) {
        this.setState({o2Background:'#0074D9',o2Color:'white',o2State:!this.state.o2State}) 
      } else {this.setState({o2Background:'white',o2Color:'black',o2State:!this.state.o2State})}
      if(this.state.o1State === true) {
        this.setState({o1Background:'white',o1Color:'black',o1State:!this.state.o1State})
      }
    }
  }

  render () {
    return (
      <div>
      <button 
        key={'one'} 
        onClick={_=>{
          this.changeColor('one');
        }}
        style={[
          styles.toggle.base, 
          styles.toggle.primary,
          {
            backgroundColor:this.state.o1Background,
            color:this.state.o1Color,
            width:'100px',
            margin:'6px 4px 6px 0px',
          }
        ]}>
        {this.props.o1}
      </button>
      <button 
        key={'two'} 
        onClick={_=>{
          this.changeColor('two')
        }}
        style={[
          styles.toggle.base, 
          styles.toggle.primary,
          {
            backgroundColor:this.state.o2Background,
            color:this.state.o2Color,
            width:'100px',
            margin:'6px 0px 6px 4px',
          }
        ]}>
        {this.props.o2}
      </button>
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