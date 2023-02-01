import React from 'react'

function ReviewForm({submitNewReview, reviews, handleChange  }) {

    return(
        <div className = "reviewForm">
            <form onSubmit = {submitNewReview}>
                <div className = "reviewTitle">Write a Review</div>
                <div className = "reviewField">
                    <input type ="text" name ="comment" placeholder ="Comment" value ={reviews.comment} onChange ={handleChange}/>
                </div>
                <div className = "reviewField">
                    <input type ="number" name ="rating" placeholder ="Rating 1-5" value ={reviews.rating} onChange ={handleChange}/>
                </div>
                <button type = "submit"> Submit Review </button>
            </form>
        </div>
    )

}

export default ReviewForm