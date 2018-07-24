import { combineReducers } from 'redux';
import teamReducer from 'reducers/teamReducer';
import surveyReducer from 'reducers/surveyReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    team: teamReducer,
    surveys: surveyReducer,
    form: formReducer
});

export default rootReducer;