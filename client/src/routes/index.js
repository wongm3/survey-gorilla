import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

const routes = ({history}) => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route path="/hello" render={() => <div>Hello</div>} />
        </Switch>
    </ConnectedRouter>
);

export default routes;