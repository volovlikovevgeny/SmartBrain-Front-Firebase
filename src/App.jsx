import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/navigation.component';
import Signin from './components/sign-in/sign-in.component';
import Register from './components/register/register.component';

import { Route, Switch } from 'react-router-dom';

import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


class App extends React.Component {



  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  render() {
    return (
      <div className="App"  >
        <Particles className='particles'
          params={particlesOptions} />
        <Switch>
          <Route exact path='/' component={Signin}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/home' component={Navigation} ></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
