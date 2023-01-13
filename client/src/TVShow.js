import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TVShowInfo from './TVShowInfo';
import ReviewForm from './ReviewForm';
function TVShow({tvshows, setTvshows}) {


const {slug} = useParams();

console.log(slug)

const [tvshow, setTvshow] = useState({})

useEffect(()=> {
    fetch( `/television_shows/${slug}`)
    .then((data) => data.json())
    .then(data => setTvshow(data))
}, [])

function handleUpdatedTVShow(updatedTVShowObj){
    const updatedTVShow = tvshows.map((televisionShow) => {
        if(televisionShow.id === updatedTVShowObj.id){
            return updatedTVShow
        } else {
            return televisionShow
        }
    });
    setTvshows(updatedTVShow)
}

console.log(tvshow.reviews)
    return(
        <div className ="outer-column">
            <div className='inner-column'>
                <TVShowInfo tvshow ={tvshow} />
                <div className = 'review-list'></div>
            </div>
            <div className='inner-column'>
                <div className = "review-form">
                    <ReviewForm tvshow = {tvshow} onUpdateTVShow = {handleUpdatedTVShow}  />
                </div>
            </div>
        </div>
    )
    
}
  export default TVShow;