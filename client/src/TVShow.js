import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TVShow({tvshows}) {


const {slug} = useParams();







    return(
        <>
       { tvshows.filter((list) => list.slug === slug)
        .map((list) => (
        <div className="full-card" key={ list.id }>
        <h2>Name: {list.title}</h2>
        <h4>Category: {list.description}</h4>
        </div>
        ))}
        </>
    )
    
}
  export default TVShow;