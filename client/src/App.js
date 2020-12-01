import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import Login from './Auth/login/login';
import Signup from './Auth/signup/signup';
const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  )
}
export default App;