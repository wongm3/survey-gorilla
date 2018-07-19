import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import Routes from './routes';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <Routes history={history} />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
