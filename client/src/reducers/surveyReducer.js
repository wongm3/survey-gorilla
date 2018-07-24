import { SET_SURVEYS, SET_CURRENT_SURVEY } from '../actions/teamActions';

const initialState = {
    surveys: [],
    currentSurvey: {}
}

const surveyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SURVEYS:
            return {
                ...state,
                surveys: action.surveys
            }
        case SET_CURRENT_SURVEY:
            return {
                ...state,
                currentSurvey: action.survey
            }
        default:
            return state
    }
}

export default surveyReducer;