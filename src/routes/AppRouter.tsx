import React from 'react';
import { Route, Switch } from 'react-router';
import { routes } from './routes';

const AppRouter: React.FC = () => {
    
    return (
        <Switch>
            {routes.map(route => 
                <Route key={route.path} path={route.path} component={route.component} />
                )}
        </Switch>
    )
}

export default AppRouter;