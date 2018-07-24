import { combineReducers } from 'redux';
import teamReducer from 'reducers/teamReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    team: teamReducer,
    form: formReducer
});

export default rootReducer;