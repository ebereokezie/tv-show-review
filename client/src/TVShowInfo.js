import React from 'react';


function TVShowInfo({tvshow}) {
 
    return (
    <div className = "outer-wrapper">
           <div className= "tvinfoPicture"><img src = {tvshow.picture_url} /></div>
           <h1 className= "tvinfoTitle">{tvshow.title}</h1>
           <h2 className= "tvinfoSeason">Season: {tvshow.season}</h2>
           <h2 className= "tvinfoEpisode">Episode: {tvshow.episode}</h2>
           <div className= "tvinfoDescription">Synopsis: {tvshow.description}</div>
           <div className = "tvinfoAverageRating">Average Rating: {tvshow.average_rating}</div>

        
    </div>
    );
  }

  export default TVShowInfo

