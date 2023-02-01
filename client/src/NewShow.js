import React, { useState} from "react"


function NewShow({onAddTVShow, tvshows}) {


   
     
      const [newShowTitle, setNewShowTitle] = useState("")
      const [newShowSeason, setNewShowSeason] = useState("")
      const [newShowEpisode, setNewShowEpisode] = useState("")
      const [newShowDescription, setNewShowDescription] = useState("")
      const [newShowPicture, setNewShowPicture] = useState("")
   

      
      

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
          .then(data => data.json())
          .then(data => onAddTVShow(data))
          
          setNewShowTitle("")
          setNewShowSeason("")
          setNewShowEpisode("")
          setNewShowDescription("")
          setNewShowPicture("")
          
          ;
        }

     


return (
  <div>
    <h2 className= "new-show-header">Submit a show for review!</h2>
    <form className = "submit-new-show" onSubmit ={handleNewShowSubmit}>
        <input type="text" name="title" placeholder = "Show Title" value={newShowTitle} onChange={(e)=> setNewShowTitle(e.target.value) } />
        <input type="number" name="Season" placeholder = "Season" value={newShowSeason} onChange={(e)=> setNewShowSeason(e.target.value)} />
        <input type="number" name="Episode" placeholder = "Episode" value={newShowEpisode} onChange={(e)=> setNewShowEpisode(e.target.value)} />
        <input type="text" name="Description" placeholder = "Short episode description" value={newShowDescription} onChange={(e)=> setNewShowDescription(e.target.value) } />
        <input type="text" name="Picture" placeholder = "Picture" value={newShowPicture} onChange={(e)=> setNewShowPicture(e.target.value) } />
        <button type="submit">Submit a Show</button>
    </form>
 </div>
);

}


export default NewShow