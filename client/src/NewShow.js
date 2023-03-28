import React, { useState, useEffect} from "react"


function NewShow({onAddTVShow, tvshows}) {


   
     
      const [newShowTitle, setNewShowTitle] = useState("")
      const [newShowSeason, setNewShowSeason] = useState("")
      const [newShowEpisode, setNewShowEpisode] = useState("")
      const [newShowDescription, setNewShowDescription] = useState("")
      const [newShowPicture, setNewShowPicture] = useState("")
      const [visible, setVisible] = useState(false)
      const [errors, setErrors] = useState([]);

   
   

      
      

    function handleNewShowSubmit(e) {
        e.preventDefault();
          fetch("/television_shows", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "title": newShowTitle,
            "season": newShowSeason,
            "episode": newShowEpisode,
            "description": newShowDescription,
            "picture_url": newShowPicture
          }),
        })
          .then(data =>{
            if (data.ok) { data.json()
          .then(data => onAddTVShow(data))
          
          setNewShowTitle("")
          setNewShowSeason("")
          setNewShowEpisode("")
          setNewShowDescription("")
          setNewShowPicture("")
            }else {
              data.json().then((err) => setErrors(err.errors)
              );
            }})
          ;
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
     


return (
  <div>
    <h2 className= "new-show-header">Submit a show for review!</h2>
    <form className = "submit-new-show" onSubmit ={handleNewShowSubmit}>
        <input type="text" name="title" placeholder = "Show Title" value={newShowTitle} onChange={(e)=> setNewShowTitle(e.target.value) } />
        <input type="number" name="Season" placeholder = "Season" value={newShowSeason} onChange={(e)=> setNewShowSeason(e.target.value)} />
        <input type="number" name="Episode" placeholder = "Episode" value={newShowEpisode} onChange={(e)=> setNewShowEpisode(e.target.value)} />
        <input type="text" name="Description" placeholder = "Short episode description" value={newShowDescription} onChange={(e)=> setNewShowDescription(e.target.value) } />
        <input type="text" name="Picture" placeholder = "Picture" value={newShowPicture} onChange={(e)=> setNewShowPicture(e.target.value) } />
        <div>
                    {visible ? (errors.map((err) => (
                        <ul key={err}>{err}</ul>
                     ))) : (<> </>)}
                </div>
        <button type="submit">Submit a Show</button>
    </form>
 </div>
);

}


export default NewShow