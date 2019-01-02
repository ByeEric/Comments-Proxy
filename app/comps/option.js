// NPM Modules
import React, { PureComponent } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

// React Components
import styles from '../styles';
import Button from './button';

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
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor (target) {
    if(target === 'one') {
      if(!this.state.o1State) {
        this.setState({o1Background:'#0074D9',o1Color:'white',o1State:!this.state.o1State}) 
      } else {this.setState({o1Background:'white',o1Color:'black',o1State:!this.state.o1State})}
      if(this.state.o2State === true) {
        this.setState({o2Background:'white',o2Color:'black',o2State:!this.state.o2State})
      }
    } else if (target === 'two') {
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
            color:this.state.o1Color
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
            color:this.state.o2Color
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
  o2: PropTypes.string.isRequired
}

Option = Radium(Option);
export default Option;