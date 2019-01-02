import React, { PureComponent } from 'react';
import Radium from 'radium';
import styles from '../styles';
import Option from './option';

class Options extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      options: true
    }
    this.showOptions = this.showOptions.bind(this);
  }

  showOptions () { // hide / show options
    this.setState({options:!this.state.options});
  }

  render () {
    return (
      <div style={[styles.optionsDiv.base]}>
        <button 
          style={[styles.options.base]}
          onClick={this.showOptions}
        >
          options
        </button>
        <div hidden={this.state.options}>
          <Option />
        </div>
      </div>
    )
  }
}

Options = Radium(Options);
export default Options;