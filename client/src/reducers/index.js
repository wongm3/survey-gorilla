import { combineReducers } from 'redux';
import teamReducer from 'reducers/teamReducer';

const rootReducer = combineReducers({
    team: teamReducer
});

export default rootReducer;