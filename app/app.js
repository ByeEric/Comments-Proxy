// NPM Modules
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Radium from 'radium';

// React components from files
import styles from './styles';
import Disclaimer from './comps/disc';
import Option from './comps/option';
import Options from './comps/options';
import Button from './comps/button';
import Link from './comps/link';
import Buy from './comps/buy';
import Title from './comps/title';

// Root component
class App extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      pet_id: "10166",
      pet: {
        "pet_id":"9999",
        "class":"Loading...",
        "family":"Loading...",
        "genus":"Loading...",
        "species":"Loading...",
        "price":".Loading.."
      },
      buy: true
    };

    // bind(this);
    this.getPet = this.getPet.bind(this);
    this.showBuy = this.showBuy.bind(this);
    // *** *** *** *** *** *** *** *** ***
  }

  getPet () { // server get request for pet object
    Axios.get('http://ec2-3-17-59-254.us-east-2.compute.amazonaws.com:4002/buy', {
      headers: {
        "pet_id":this.state.pet_id
      }
    }).then(res => {
      console.table(res.data);
      this.setState({
        pet:res.data
      })
    })
  }

  showBuy () { // toggle purchase options
    this.setState({buy:!this.state.buy});
  }

  componentDidMount () { // get current pet data on mount
    this.getPet();
  }

  render () {
    // Show product info
    return (
      <div>
        <div hidden={!this.state.buy} style={[styles.div.base,{width:'100%'}]}>
          <Title pet={this.state.pet}/>
          <Buy price={this.state.pet.price} func={this.showBuy}/>
          <Disclaimer />
        </div>
      

        {/* show purchase options: */}
        <div hidden={this.state.buy} style={[styles.div.base,{width:'100%'}]}> 
          <Options pet={this.state.pet} showBuy={this.showBuy}/>
        </div>
      </div>
    )
  }
}

App = Radium(App);

// ReactDOM Render function
ReactDOM.render(<App />, document.getElementById('root'));
