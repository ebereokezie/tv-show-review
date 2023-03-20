import React, {useState, useEffect} from "react"


function EditReview({review, handleUpdateReview}){
    const [newReview, setNewReview] = useState(review)
    const [errors, setErrors] = useState([]);
    const [visible, setVisible] = useState(false)


    function handleFormSubmit(e) {
      e.preventDefault();
      const comment = newReview.comment
      const rating = newReview.rating
  
      fetch(`/reviews/${review.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           comment, rating
        }),
      })
        .then((data) => {
          if (data.ok) {
            data.json().then(
            (data) => handleUpdateReview(data));
    } else {
      data.json().then((err) => setErrors(err.errors))
    }
  })

  }
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
          <div>
                    {visible ? (errors.map((err) => (
                        <ul key={err}>{err}</ul>
                     ))) : (<> </>)}
          </div>
        </form>
    )
}

export default EditReview;