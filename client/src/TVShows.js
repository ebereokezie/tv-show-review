import React, { useState, useEffect }from 'react'

function TVShows() {
    const [tvshows, setTvshows] = useState([])

    useEffect(()=> {
        fetch("/television_shows")
        .then((data) => data.json())
        .then(data => setTvshows(data))
    }, [])

    const tvShowList = tvshows.map( tvShow => {
        return (<li key = {tvShow.id}> {tvShow.title} </li>)
    })
    return (
    <div className = "TVShowsHome">
           <h1 className= "Header">FreshApples</h1>
           <h2 className = "subheader">A new take on Television Show reviews</h2>
        <div className = "grid">
            {tvShowList}
        </div>
    </div>
    );
  }

  export default TVShows
   