import React from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Main from './Main';
import LogIn from './React-Automation-Studio/LogIn';
import Mypage from './components/mypage/Mypage';

export default props=>(
  <BrowserRouter >
    <Switch>
      <Route exact path="/" component={ Main } />
      {process.env.REACT_APP_EnableLogin==='true'&&
        <Route exact path="/LogIn" component={ LogIn } />
      }
      <Route path='/MyPage' component={Mypage} />
    </Switch>

  </BrowserRouter>
)
