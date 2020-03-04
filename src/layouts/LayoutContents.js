import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import LayoutHeader from './LayoutHeader';
import LayoutFooter from './LayoutFooter';
import Routes from '../routes';
import Store from '../store/store';

const LayoutContents = () => {
    const [logged, setLogged] = useState(false);

    const onLogin = () => {
        setLogged(true);
    };
    const onLogout = () => {
        setLogged(false);
    };

    return (
        <Store.Provider value={{ logged, onLogout, onLogin }}>
            <LayoutHeader logged={logged} onLogout={onLogout} />
            <div id="content">
                <Switch>
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
                </Switch>
            </div>
            <LayoutFooter />
        </Store.Provider>
    );
};

export default LayoutContents;
