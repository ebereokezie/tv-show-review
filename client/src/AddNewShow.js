import React from "react";
import NewShow from "./NewShow";

function AddNewShow({onAddTVShow, tvshows }){
    return(
        <div className = "Home-header">
        <header>Submit a New Show</header>
          <p className = "Home-body">Got a New Show you want to be reviewed? Add it here!</p>
          <br></br>
          <img className = "size" src= "https://www.shutterstock.com/image-vector/father-switching-channels-watching-tv-260nw-622299953.jpg" />
          <br></br>
          <NewShow onAddTVShow ={onAddTVShow} tvshows={tvshows} />
        </div>
    )
}

export default AddNewShow