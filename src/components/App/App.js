import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../../containers/LandingPage'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        {/* <Route path='/' component={Header} /> */}
      </Switch>
    </div>
  )
}

export default App
