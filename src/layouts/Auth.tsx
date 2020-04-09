import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from "../views/Sign-In";

const Auth = () => {
    return (
        <Switch>
           <Redirect from="/" to="/login" exact />
           <Route path="/login" component={SignIn} exact />
        </Switch>
    )
};

export default Auth;
