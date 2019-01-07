import React from 'react';
import axios from 'axios';
import Radium from 'radium';
import Review from './Review';
const baseURL = (document.URL === 'http://localhost:3003/' ? document.URL : 'http://ec2-18-191-41-4.us-east-2.compute.amazonaws.com/');

class Reviews extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pet_id: '45114',
      reviews: []
    }

    // this.changePetId = this.changePetId.bind(this);
  }

  componentDidMount() {
    axios.get(baseURL + 'reviews/' + this.props.pet_id)
    .then(res => {
      this.setState({
        reviews: res.data
      })
    });
    // this.div.addEventListener("changePetId", this.changePetId);
  }

  componentDidUpdate () {
    console.log('update &@##');
    axios.get(baseURL + 'reviews/' + this.props.pet_id)
    .then(res => {
      this.setState({
        reviews: res.data
      })
    });
  }

  // componentDidUpdate () {
  //   console.log('update')
  //   this.getPetReviews();
  // }

  // componentWillUnmount() {
  //   this.div.removeEventListener("changePetId", this.changePetId);
  // }

  // changePetId(e) {
  //   const pet_id = e.detail.pet_id;
  //   this.setState({ pet_id }, () => this.getPetReviews());
  // }

  getPetReviews(pet_id) {
    axios.get(baseURL + 'reviews/' + pet_id)
    .then(res => {
      this.setState({
        reviews: res.data
      })
    });
  }

  render() {
    return (
      <div className="review-area petIdSubscriber" ref={elem => this.div = elem} >
        {this.state.reviews.map(review => <Review review={review} key={Math.random()} />)}
      </div>
    )
  }
}

Reviews = Radium(Reviews);
export default Reviews;