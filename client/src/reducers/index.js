import { combineReducers } from 'redux';
import teamReducer from 'reducers/teamReducer';
import surveyReducer from 'reducers/surveyReducer';
import questionReducer from 'reducers/questionReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    team: teamReducer,
    surveys: surveyReducer,
    questions: questionReducer,
    form: formReducer
});

export default rootReducer;