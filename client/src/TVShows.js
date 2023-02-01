import React from 'react'
import TVShowCard from './TVShowCard'
function TVShows({tvshows}) {
    
    

    const tvShowList = tvshows.map( tvShow => {
        return (<TVShowCard key = {tvShow.id} tvShow ={tvShow} />)
    })

    return (
    <div className ="TVShowsHome">
           <h1 className= "Header">FreshApples</h1>
           <h2 className = "subheader">A new take on Television Show reviews</h2>
        <div className = "grid">
            {tvShowList}
        </div>
    </div>
    );
  }

  export default TVShows
   