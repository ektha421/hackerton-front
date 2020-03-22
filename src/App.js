import React, {useEffect} from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { history } from './_helpers';
import { alertActions } from './_actions';
import Routes from './routes';
import LayoutHeader from './components/common/LayoutHeader';
import LayoutFooter from './components/common/LayoutFooter';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import './App.scss';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();
    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, [dispatch]);
    return (
        <Router history={history}>
            <LayoutHeader/>
            <Switch>
                <Route path="/login" name="Login" component={LoginPage} />
                <Route path="/signup" name="signup" component={SignUpPage} />
                <div id="content">
                <Redirect from="*" to="/" />

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
        </Router>
    );
}

export default App;
