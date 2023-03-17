import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TVShowInfo from './TVShowInfo';
import Review from './Review';
import ReviewForm from './ReviewForm';
function TVShow({tvshows, user, setTvshows, setUser}) {

console.log(tvshows)
const {slug} = useParams();

console.log(slug)
const [tvshow, setTvShow] = useState({reviews: []})
const [reviews, setReviews] = useState({})
const [errors, setErrors] = useState([]);


useEffect(()=> {
    fetch( `/television_shows/${slug}`)
    .then((data) => data.json())
    .then(data => setTvShow(data))
}, [])



function handleChange(e){
    e.preventDefault();
    setReviews(Object.assign({...reviews, [e.target.name]: e.target.value})) 
    }

function submitNewReview(e){
        e.preventDefault()
        const television_show_id = tvshow.id
        const comment = reviews.comment
        const rating = reviews.rating
        fetch(`/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({television_show_id, comment, rating
            }),
        })

        .then((data) => {
            if (data.ok) {
              data.json().then((data) => {
                const reviews = [...tvshow.reviews, data]
                const userreviews = [...user.reviews, data]
                setTvShow({...tvshow, reviews})
                setUser({...user, reviews: userreviews})
                setReviews({comment: '', rating: ''})
            });
            } else {
              data.json().then((err) => setErrors(err.errors)
              );
            }      
       
        })}

const review = tvshow.reviews.map((review) => {
    console.log(review)
    return (
        <Review key ={review.id} review = {review} user = {user} onUpdateReview = {onUpdateReview} onDeleteReview = {onDeleteReview} /> 
    )
})
console.log(user.reviews)
function onUpdateReview(updatedReviewObj){
    const tvUpdatedReviews = tvshow.reviews.map((review) => {
      if(review.id === updatedReviewObj.id) {
        return updatedReviewObj
      } else {
        return review
      }
    });

    const userUpdatedReviews = user.reviews.map((review) => {
      if(review.id === updatedReviewObj.id) {
        return updatedReviewObj
      } else {
        return review
      }
    })
    setTvShow({...tvshow, reviews: tvUpdatedReviews})
    setUser({...user, reviews: userUpdatedReviews })
    console.log(tvshow)
  }

  function onDeleteReview(deletedReview) {
    const tvDeletedReviews = tvshow.reviews.filter((review) => review.id !== deletedReview.id)
    const userDeletedReviews = user.reviews.filter((review) => review.id !== deletedReview.id)

    setTvShow({...tvshow, reviews: tvDeletedReviews})
    setUser({...user, reviews: userDeletedReviews })
    
  }

    return(
        <div className ="outer-column">
            <div className='inner-column'>
                <TVShowInfo tvshow ={tvshow} />
                <h1>Check out some reviews:</h1>
                <div className = 'review-list'> {review.length !== 0 ? review : "No Reviews Yet"}</div>
            </div>
            <div className='inner-column'>
                <div className = "review-form">
                    <ReviewForm tvshow = {tvshow} user = {user} setReviews = {setReviews} reviews = {reviews} handleChange = {handleChange} submitNewReview = {submitNewReview} errors = {errors} />
                </div>
            </div>
        </div>
    )
    
}
  export default TVShow;