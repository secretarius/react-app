import React, { Component } from "react";
import { Route, NavLink } from 'react-router-dom'

import News from './News/News'
import Profile from './Profile/Profile'

import "./App.scss";
// import Person from "./Person/Person";

class App extends Component {
  render() {

    return(
      <div>
        <nav className='nav'>
        <ul>
          <li>
            <NavLink className='navlink' exact to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className='navlink' to='/news'>News</NavLink>
          </li>
          <li>
            <NavLink className='navlink' to='/profile'>Profile</NavLink>
          </li>
        </ul>
        </nav>

        <hr/>

    <Route path='/' exact render={() => <h1>Home page works!</h1>} />
    <Route path='/news' component={News} />
    <Route path='/profile' component={Profile} />
        {/* <News/>

        <Profile/> */}
      </div>
    );

  }
}

export default App
