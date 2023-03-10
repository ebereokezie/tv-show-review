import React from 'react';
import { NavLink } from "react-router-dom"

function TVShowCard({tvShow}) {
 
    return (
    <div className = "Card">
           <div className= "TVShowPicture"><img src = {tvShow.picture_url} /></div>
           <div className= "TVShowTitle">{tvShow.title}</div>
           <div className= "TVShowSeason">Season: {tvShow.season}</div>
           <div className= "TVShowEpisode">Episode: {tvShow.episode}</div>
           <div className= "TVShowDescription">Synopsis: {tvShow.description}</div>
           <div className = "TVShowAverageRating">Average Rating: {tvShow.average_rating}</div>
           <NavLink to = {`/television_shows/${tvShow.slug}`}>View {tvShow.title} reviews!</NavLink>

        
    </div>
    );
  }

  export default TVShowCard