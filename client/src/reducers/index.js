import { combineReducers } from 'redux';
import teamReducer from 'reducers/teamReducer';
import surveyReducer from 'reducers/surveyReducer';
import questionReducer from 'reducers/questionReducer';
import { reducer as formReducer } from 'redux-form';
import trendReducer from 'reducers/trendReducer';

const rootReducer = combineReducers({
    team: teamReducer,
    surveys: surveyReducer,
    questions: questionReducer,
    trends: trendReducer,
    form: formReducer
});

export default rootReducer;