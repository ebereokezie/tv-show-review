import React, {useState} from "react"


function EditReview({review, tvshow, handleUpdateReview}){
    const [newReview, setNewReview] = useState(review)




    function handleFormSubmit(e) {
        e.preventDefault();
        const television_show_id = tvshow.id
        const comment = newReview.comment
        const rating = newReview.rating
    
        fetch(`/reviews`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            television_show_id, comment, rating
          }),
        })
          .then(data => data.json())
          .then((data) => handleUpdateReview(data));
      }

      function handleUpdateChange(e){
        e.preventDefault();
        setNewReview(Object.assign({...newReview, [e.target.name]: e.target.value}))
        console.log('review:', newReview)  
        }
    return (
        <form className="edit-game" onSubmit={handleFormSubmit}>
          <input type ="text" name ="comment" placeholder ="Comment" value={newReview.comment} onChange={handleUpdateChange} />
          <input type ="number" name ="rating" placeholder ="Rating 1-5" value={newReview.rating} onChange={handleUpdateChange} />
          <input type="submit" value="Save" />
        </form>
    )
}

export default EditReview;