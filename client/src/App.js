import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import TVShow from './TVShow';
import TVShows from './TVShows';
import "../src/App.css"

function App() {

  const [tvshows, setTvshows] = useState([])

    useEffect(()=> {
        fetch("/television_shows")
        .then((data) => data.json())
        .then(data => setTvshows(data))
    }, [])
console.log(tvshows)

  return (
   <Switch>
      <Route exact path="/">
        <TVShows tvshows={tvshows} />
      </Route>
      <Route exact path="/television_shows/:slug">
        <TVShow tvshows = {tvshows}/>
      </Route>
   </Switch>
  );
}

export default App;
