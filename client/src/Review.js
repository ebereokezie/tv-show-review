import React, {useState} from 'react'
import EditReview from './EditReview';

function Review ({review, user, onUpdateReview}){
    const [editReview, setEditReview] = useState(false)

    function handleUpdateReview(updateReview) {
        setEditReview(false);
        onUpdateReview(updateReview)
      }

     
  const isReviewUser = review.user.username === user.username

  const editUserReview =  editReview ? (<EditReview key = {review.id}  review = {review} handleUpdateReview = {handleUpdateReview} />
            ) : (
            <>
            <div className = "username">{review.user.username}</div>
            <div className = "comments">Comment: {review.comment}</div>
            <div className = "rating-container">
                <div className = "ratings">Rating: {review.rating}/5</div>
                
            </div>
            <button className = "edit-review" onClick ={() => setEditReview((editReview) => !editReview)}>
                Edit your Review
            </button>
            </>
            )

    console.log(user)
    return(
        <div className = "reviewCard">
            
            {isReviewUser ? (editUserReview) : ( 
            <>
            <div className = "username">{review.user.username}</div>
            <div className = "comments">Comment: {review.comment}</div>
            <div className = "rating-container">
                <div className = "ratings">Rating: {review.rating}/5</div>
                
            </div></>)
        }







            {/* {editReview ? (<EditReview key = {review.id}  review = {review} handleUpdateReview = {handleUpdateReview} />
            ) : (
            <>
            <div className = "username">{review.user.username}</div>
            <div className = "comments">Comment: {review.comment}</div>
            <div className = "rating-container">
                <div className = "ratings">Rating: {review.rating}/5</div>
                
            </div>
            <button className = "edit-review" onClick ={() => setEditReview((editReview) => !editReview)}>
                Edit your Review
            </button>
            </>
            )} */}
        </div>
    )
}

export default Review