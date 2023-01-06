import React, { useState, useEffect }from 'react'

function TVShows() {
    const [tvshows, setTvshows] = useState([])

    useEffect(()=> {
        fetch("/television_shows")
        .then((data) => data.json())
        .then(data => console.log(data))
    }, [])
    return (
    <div>
        This is the TV shows#index view for our app.
    </div>
    );
  }

  export default TVShows
  