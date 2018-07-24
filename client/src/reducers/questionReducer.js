import { SET_QUESTIONS, ANSWER_QUESTION } from '../actions/teamActions';

const surveyReducer = (state = [], action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return action.questions
        case ANSWER_QUESTION:
            return state.map(question => question.questionId === action.questionId ? { ...question, answer: action.answer } : question)
        default:
            return state
    }
}

export default surveyReducer;