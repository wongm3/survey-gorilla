import { SET_QUESTIONS, ANSWER_QUESTION, SET_RESULTS } from 'actions/teamActions';

const setResults = (state, results) => {
    const newState = [];

    state.forEach(question => {
        results.some((result, index) => {
            let found = false;

            if (question.questionId === result.question_uuid) {
                newState.push({
                    ...question,
                    average: result.avgScore,
                    participation: result.countOfAnswers
                });

                results.splice(index, 1);

                found = true;
            }

            return found;
        })
    });

    return newState;
}

const questionReducer = (state = [], action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return action.questions
        case ANSWER_QUESTION:
            return state.map(question => question.questionId === action.questionId ? { ...question, answer: action.answer } : question)
        case SET_RESULTS:
            return setResults(state, action.results)
        default:
            return state
    }
}

export default questionReducer;