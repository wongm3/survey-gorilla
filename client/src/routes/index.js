import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Home from '../components/Home';
import Team from '../components/Team';
import Survey from '../components/Survey';

const routes = ({history}) => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/survey/:surveyId" component={Survey} />
            <Route path="/results/:surveyId" render={() => <div>Survey Results</div>} />
            <Route path="/team/:teamId" component={Team} />
        </Switch>
    </ConnectedRouter>
);

export default routes;