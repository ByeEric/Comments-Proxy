import React from 'react';
import moment from 'moment';
const baseURL = (document.URL === 'http://localhost:3003/' ? document.URL : 'http://ec2-18-191-41-4.us-east-2.compute.amazonaws.com/');


function Review(props) {
  const { username, review, stars, review_created, user_id } = props.review;

  return (
    <div className="review-box">
      <div className="review-profile-pic"><img className="img-profile-pic" src={`${baseURL}profilepics/${(user_id - 1).toString().padStart(2, '0')}.jpg`} /></div>
      <div className="review-text-area">
        <div className="review-user">{username}</div>
        <div className="review-date">{moment(review_created).fromNow()}</div>
        <div className="review-stars">{'★'.repeat(stars) + '☆'.repeat(5 - stars)}</div>
        <div className="review-text">{review}</div>
      </div>
    </div>
  )
}

export default Review;