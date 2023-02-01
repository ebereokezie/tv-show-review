import React from 'react'

function Review ({review}){
    console.log(review)
    return(
        <div className = "reviewCard">
            <div className = "username">{review.user.username}</div>
            <div className = "comments">Comment: {review.comment}</div>
            <div className = "rating-container">
                <div className = "ratings">Rating: {review.rating}/5</div>
                
            </div>
            
        </div>
    )
}

export default Review