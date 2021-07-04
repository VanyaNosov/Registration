import React from 'react';
import SignIn from './components/auth/sign-in/index.jsx'
import SignUp from './components/auth/sign-up/index.jsx'
import style from './reset.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className={style.App}>
        <Switch>
          <Route path='/signIn' component={SignIn} />
          <Route path='/signUp' component={SignUp} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;