import React, {useEffect, useState} from 'react'

function ReviewForm({submitNewReview, reviews, handleChange, errors  }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!errors){
            setVisible(false)
            return
        }

        setVisible(true)
        const timer = setTimeout(() => {
            setVisible(false)
        }, 5000);
        return () => clearTimeout(timer);
    }, [errors])
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
                <div>
                    {visible ? (errors.map((err) => (
                        <ul key={err}>{err}</ul>
                     ))) : (<> </>)}
                </div>
            </form>
        </div>
    )

}

export default ReviewForm