import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Button from './comps/button';
import Link from './comps/link';
import Buy from './comps/buy';
import Title from './comps/title';
import Axios from 'axios';
import styles from './styles';
import Radium from 'radium';
import Disclaimer from './comps/disc';
import Option from './comps/option';

class App extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      pet_id: "2111",
      pet: {
        "pet_id":"2111",
        "class":"Aves",
        "family":"Struthionidae",
        "genus":"Struthio",
        "species":"Ostrich",
        "price":"11,000",
      },
      buy: true
    };

    // bind(this);
    this.getPet = this.getPet.bind(this);
    this.print = this.print.bind(this);
    this.showBuy = this.showBuy.bind(this);
    // *** *** *** *** *** *** *** *** ***

  }

  getPet () { // server get request for pet object
    Axios.get('http://localhost:4000/buy', {
      headers: {
        "pet_id":this.state.pet_id
      }
    })
    .then(res => {
      this.setState({
        pet:res.data
      })
    })
  }

  print (text) { // print function
    console.log(text);
  }

  showBuy () {
    this.setState({buy:!this.state.buy});
  }

  render () {
    if(this.state.buy) {
      return (
        <div style={{width:'100%'}}>
          <Title pet={this.state.pet}/>
          <Buy price={this.state.pet.price} func={this.showBuy}/>
          <Disclaimer />
        </div>
      )
    } else {
      return (
        <div style={{width:'100%'}}>
          <button style={[styles.toggle.base, styles.toggle.primary]} onClick={this.showBuy}>back</button>
          <Link text={this.state.pet.species} size={'26px'} link={`https://en.wikipedia.org/wiki/${this.state.pet.species}`}/>
          <Option o1={'male'} o2={'female'}/>
        </div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('root'));