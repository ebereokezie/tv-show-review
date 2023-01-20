import React, {useState} from 'react'

function ReviewForm({tvshow, onUpdateTVShow}) {

    const [newComment, setNewComment] = useState("")
    const [newRating, setNewRating] = useState("")
   

    function submitNewReview(e){
        e.preventDefault()

        fetch(`/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "television_show_id": tvshow.id,
                "comment": newComment,
                "rating": newRating
            }),
        })
        .then ((data) => data.json())
        .then ((data) => onUpdateTVShow(oldReviews => ([...oldReviews, data])))
        setNewComment("")
        setNewRating("")



        }

    return(
        <div className = "reviewForm">
            <form onSubmit = {submitNewReview}>
                <div className = "reviewTitle">Write a Review</div>
                <div className = "reviewField">
                    <input type ="text" name ="review" placeholder ="Comment" value ={newComment} onChange ={e => setNewComment(e.target.value)}/>
                </div>
                <div className = "reviewField">
                    <input type ="number" name ="rating" placeholder ="Rating" value ={newRating} onChange ={e => setNewRating(e.target.value)}/>
                </div>
                <button type = "submit"> Submit Review </button>
            </form>
        </div>
    )

}

export default ReviewForm