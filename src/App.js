import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/LayoutContents';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" name="Login" component={Login} />
                <Route path="/signup" name="signup" component={SignUp} />
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
