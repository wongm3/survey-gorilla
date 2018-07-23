import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Home from 'components/HomeContainer';
import Results from 'components/Results';
import Team from 'components/TeamContainer';
import Survey from 'components/Survey';

const routes = ({history}) => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/survey/:surveyId" component={Survey} />
            <Route path="/results/:surveyId" component={Results} />
            <Route path="/team/:teamId" component={Team} />
        </Switch>
    </ConnectedRouter>
);

export default routes;