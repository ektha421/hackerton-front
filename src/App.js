import React, {useEffect} from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './_helpers';
import { alertActions } from './_actions';
import Routes from './routes';
import LayoutHeader from './layouts/LayoutHeader';
import LayoutFooter from './layouts/LayoutFooter';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.scss';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();
    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);
    return (
        <Router history={history}>
            <LayoutHeader />
            <Switch>
                <Route path="/login" name="Login" component={Login} />
                <Route path="/signup" name="signup" component={SignUp} />
                <div id="content">
                <Redirect from="*" to="/" />

                    {Routes.map((route, idx) => {
                        return (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                // history ={history}
                                render={props => <route.component {...props} />}
                            />
                        );
                    })}
                </div>
            </Switch>
            <LayoutFooter />
        </Router>
    );
}

export default App;
