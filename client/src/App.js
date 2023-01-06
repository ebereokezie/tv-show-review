import React from 'react'
import {Route, Switch} from 'react-router-dom'
import TVShow from './TVShow';
import TVShows from './TVShows';

function App() {
  return (
   <Switch>
      <Route exact path="/">
        <TVShows />
      </Route>
      <Route exact path="/television_shows/:slug">
        <TVShow />
      </Route>
   </Switch>
  );
}

export default App;
