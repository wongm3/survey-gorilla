import { UPDATE_TEAM } from '../actions/teamActions';

const teamReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_TEAM:
            return {
                ...state,
                ...action.team
            }
        default:
            return state
    }
}

export default teamReducer;