import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './Login';
import TVShow from './TVShow';
import TVShows from './TVShows';
import NavBar from './NavBar';
import AddNewShow from './AddNewShow';
import "../src/App.css"

function App() {

  const [tvshows, setTvshows] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    
    fetch("/me").then((data) => {
      if (data.ok) {
        data.json().then((user) => setUser(user));
      }
    });
  }, []);
  
console.log(user)

useEffect(()=> {
  fetch("/television_shows")
  .then((data) => data.json())
  .then(data => setTvshows(data))
}, [])

function onAddTVShow(newShow){
  setTvshows((tvshows) => [...tvshows, newShow]);
}


if (!user) return <Login onLogin={setUser} />;

  return (
  <div className="App">
  <NavBar user = {user} setUser = {setUser}/>
   <Switch>
      <Route exact path="/">
        <TVShows tvshows={tvshows} setTvshows = {setTvshows} />
      </Route>
      <Route exact path="/television_shows/:slug">
        <TVShow tvshows = {tvshows} user = {user} setTvshows = {setTvshows}/>
      </Route>
      <Route exact path="/newshow">
        <AddNewShow tvshows = {tvshows} onAddTVShow = {onAddTVShow} />
      </Route>
   </Switch>
   </div>
  );
}

export default App;
