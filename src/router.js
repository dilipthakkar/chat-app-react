import React from 'react';
import {
    Route,
    BrowserRouter,
    Switch,
    Redirect,
    
} from "react-router-dom";
import Chat from './component/chat';
import Login from './component/login';
import PrivateRoute from './privateroute/privateroute';



function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <PrivateRoute path="/chat" component={Chat}/>
        </Switch>
      </BrowserRouter>
    );
}

export default Router;