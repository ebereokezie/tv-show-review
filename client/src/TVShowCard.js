import React from 'react'

function TVShowCard({tvShow}) {
 
    return (
    <div className = "Card">
           <div className= "TVShowPicture"><img src = {tvShow.picture_url} /></div>
           <div className= "TVShowTitle">{tvShow.title}</div>
           <div className= "TVShowSeason">Season: {tvShow.season}</div>
           <div className= "TVShowEpisode">Episode: {tvShow.episode}</div>
           <div className= "TVShowDescription">Synopsis: {tvShow.description}</div>
           <div className = "TVShowAverageRating">Average Rating: {tvShow.average_rating}</div>
           <div className = "TVShowLinkToPage"> <a href = {`/tvshows/${tvShow.slug}`}>View {tvShow.title} reviews! </a>  </div>

        
    </div>
    );
  }

  export default TVShowCard