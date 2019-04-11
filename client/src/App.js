import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ArtistList from './components/ArtistList'
import Artist from './components/Artist'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1>Tunr</h1>
            <div>
              <div><Link to='/'>All Artists</Link></div>
            </div>
          </div>
          <Switch>
            <Route exact path='/' component={ArtistList} />
            <Route exact path='/artists/:id' component={Artist} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
