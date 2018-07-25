import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Home from 'components/HomeContainer';
import Results from 'components/ResultsContainer';
import Team from 'components/TeamContainer';
import Thanks from 'components/Thanks';
import Survey from 'components/SurveyContainer';

const routes = ({history}) => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/survey/:teamId/:surveyId" component={Survey} />
            <Route path="/results/:teamId/:surveyId" component={Results} />
            <Route path="/thanks/:teamId/:surveyId" component={Thanks} />
            <Route path="/team/:teamId" component={Team} />
        </Switch>
    </ConnectedRouter>
);

export default routes;