import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TVShowInfo from './TVShowInfo';
function TVShow({tvshows}) {


const {slug} = useParams();

console.log(slug)

const [tvshow, setTvshow] = useState({})

useEffect(()=> {
    fetch( `/television_shows/${slug}`)
    .then((data) => data.json())
    .then(data => setTvshow(data))
}, [])


console.log(tvshow.reviews)
    return(
        <div className ="outer-column">
            <div className='inner-column'>
                <TVShowInfo tvshow ={tvshow} />
                <div className = 'review-list'></div>
            </div>
            <div className='inner-column'>
                <div className = "review-form"></div>
            </div>
        </div>
    )
    
}
  export default TVShow;