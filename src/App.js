import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Routes from './routes';
import LayoutHeader from './layouts/LayoutHeader';
import LayoutFooter from './layouts/LayoutFooter';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <LayoutHeader />
            <Switch>
                <Route path="/login" name="Login" component={Login} />
                <Route path="/signup" name="signup" component={SignUp} />
                <div id="content">
                    {Routes.map((route, idx) => {
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => <route.component {...props} />}
                            />
                        );
                    })}
                </div>
            </Switch>
            <LayoutFooter />
        </BrowserRouter>
    );
}

export default App;
