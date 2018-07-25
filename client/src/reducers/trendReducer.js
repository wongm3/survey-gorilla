import { SET_TRENDS } from 'actions/teamActions';

const trendReducer = (state = [], action) => {
    switch (action.type) {
        case SET_TRENDS:
            return action.trends
        default:
            return state
    }
}

export default trendReducer;