import React from "react";
import NewShow from "./NewShow";

function AddNewShow({onAddTVShow, tvshows }){
    return(
        <div className = "Home-header">
        <header>Submit a New Show</header>
          <p className = "Home-body">Got a New Show you want to be reviewed? Add it here!</p>
          <br></br>
          <img className = "size" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREo9SQxjafrsfWrBdawGik-gKtbPMyFURzDg&usqp=CAU" />
          <br></br>
          <NewShow onAddTVShow ={onAddTVShow} tvshows={tvshows} />
        </div>
    )
}

export default AddNewShow