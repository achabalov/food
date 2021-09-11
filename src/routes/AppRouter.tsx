import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { routes } from './routes';

const AppRouter: React.FC = () => {
    
    return (
        <Switch>
            {routes.map(route => 
                <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
                )}
            <Redirect to='/' />
        </Switch>
    )
}

export default AppRouter;