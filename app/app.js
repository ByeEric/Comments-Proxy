// NPM Modules
import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Radium, { StyleRoot } from 'radium';

// React components from files
import styles from './styles';
import Disclaimer from './comps/disc';
import Options from './comps/options';
import Buy from './comps/buy';
import Title from './comps/title';

// Pet-info
import Search from './search/index';
import Description from './description/pet_info';
import Review from './reviews/Review';

// const baseURL = (document.URL === 'http://localhost:3003/' ? document.URL : 'http://ec2-18-191-41-4.us-east-2.compute.amazonaws.com/');

// Root component
class App extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      pet_id: "1112", // current pet to 'get' from server / DB
      pet: { // hold current pet to render
        "pet_id":"9999",
        "class":"Loading...",
        "family":"Loading...",
        "genus":"Loading...",
        "species":"Loading...",
        "price":"Loading..."
      },
      buy: true, // toggle showing purchase options
      reviews: [],
    };

    // bind functions to 'this' context
    this.getPet = this.getPet.bind(this);
    this.showBuy = this.showBuy.bind(this);
    this.changePetId = this.changePetId.bind(this);
    this.getPetReviews = this.getPetReviews.bind(this);
  }

  getPet () { // server get request for pet object
    Axios.get(`http://ec2-3-17-59-254.us-east-2.compute.amazonaws.com:4002/buy/${this.state.pet_id}`)
    .then(res => {
      this.setState({
        pet:res.data
      })
    })
  }

  showBuy () { // toggle purchase options
    this.setState({buy:!this.state.buy});
  }

  componentDidMount () { // get current pet data on mount
    console.log('hi :)');
    this.div.addEventListener("changePetId", this.changePetId);
    this.getPet();
    this.getPetReviews()
  }

  changePetId (pet_id) {
    this.setState({pet_id}, () => {
      this.getPet(this.state.pet_id);
      this.getPetReviews();
    });
  }

  getPetReviews() {
    Axios.get(`http://ec2-18-191-41-4.us-east-2.compute.amazonaws.com/reviews/${this.state.pet_id}`)
    .then(res => {
      this.setState({
        reviews: res.data
      })
    });
  }

  render () {
    // Show product info
    return (
      <StyleRoot>
        <div className={'petIdSubscriber'} ref={el => (this.div = el)}>
          <img src='./petsylogo.png' alt='...' width="260px" style={[styles.logo.base]}></img>
          <Search pet_id={this.state.pet_id} changePetId={this.changePetId}/>
            <Description pet_id={this.state.pet_id} /> 
            <div style={[styles.purchase.base]}>
              <div hidden={!this.state.buy} style={[styles.div.base,{width:'100%'}]}>
                <Title pet={this.state.pet}/>
                <Buy price={this.state.pet.price} func={this.showBuy}/>
                <Disclaimer />
              </div>                                                            {/* 
                always being rendered to clear hover states and keep user options.
                show purchase options:                                          */}
              <div hidden={this.state.buy} style={[styles.div.base,{width:'100%'}]}> 
                <Options pet={this.state.pet} showBuy={this.showBuy}/>
              </div>
            </div>
          <div className={'review-area'}>
            <div className={'big-box'}>
              {this.state.reviews.map(review => <Review review={review} key={Math.random()} />)}
            </div>
          </div>
        </div>
      </StyleRoot>
    )
  }
}

App = Radium(App);

// ReactDOM Render function
ReactDOM.render(<App />, document.getElementById('root'));
