import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import DefaultLayout from './layouts/LayoutContents';
import Login from './components/login/Login';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" name="Login" component={Login} />
                <Route
                    path="/"
                    name="Home"
                    render={props => <DefaultLayout {...props} />}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
