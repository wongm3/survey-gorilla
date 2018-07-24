import { SET_SURVEYS } from '../actions/teamActions';

const surveyReducer = (state = [], action) => {
    switch (action.type) {
        case SET_SURVEYS:
            return action.surveys
        default:
            return state
    }
}

export default surveyReducer;