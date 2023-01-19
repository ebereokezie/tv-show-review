import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './Login';
import TVShow from './TVShow';
import TVShows from './TVShows';
import "../src/App.css"

function App() {

  const [tvshows, setTvshows] = useState([])
  const [user, setUser] = useState('');

  useEffect(() => {
    
    fetch("/me").then((data) => {
      if (data.ok) {
        data.json().then((user) => setUser(user));
      }
    });
  }, []);
  
console.log(tvshows)

if (!user) return <Login onLogin={setUser} />;

  return (
   <Switch>
      <Route exact path="/">
        <TVShows tvshows={tvshows} setTvshows = {setTvshows} />
      </Route>
      <Route exact path="/television_shows/:slug">
        <TVShow tvshows = {tvshows}/>
      </Route>
   </Switch>
  );
}

export default App;
