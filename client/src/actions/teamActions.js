import { push } from 'connected-react-router';
export const UPDATE_TEAM = 'UPDATE_TEAM';
export const SET_SURVEYS = 'SET_SURVEYS';
export const SET_CURRENT_SURVEY = 'SET_CURRENT_SURVEY';
export const SET_QUESTIONS = 'SET_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const SET_RESULTS = 'SET_RESULTS';

export const updateTeam = (team) => ({
    type: UPDATE_TEAM,
    team
});

export const setSurveys = (surveys) => ({
    type: SET_SURVEYS,
    surveys
});

export const setCurrentSurvey = (survey) => ({
    type: SET_CURRENT_SURVEY,
    survey
})

export const setQuestions = (questions) => ({
    type: SET_QUESTIONS,
    questions
});

export const answerQuestion = (questionId, answer) => ({
   type: ANSWER_QUESTION,
   questionId,
   answer 
});

export const setResults = results => ({
    type: SET_RESULTS,
    results
});

export const registerTeam = (name) => (
    async dispatch => {
        const body = {
            name
        };

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const content = await response.json();

        dispatch(updateTeam({
            id: content.teamId
        }));

        dispatch(push(`/team/${content.teamId}`));
    }
);

export const startSurvey = (teamId, name) => (
    async dispatch => {
        const body = {
            name
        };

        await fetch(`/api/team/${teamId}/start-survey`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        dispatch(getTeamSurveys(teamId));
    }
);

export const getTeam = teamId => (
    async dispatch => {
        const response = await fetch(`/api/team/${teamId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const content = await response.json();

        dispatch(updateTeam(content));
    }
);

export const getTeamSurveys = teamId => (
    async dispatch => {
        const response = await fetch(`/api/team/${teamId}/surveys`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const content = await response.json();

        dispatch(setSurveys(content));
    }
);

export const getTeamAndSurveys = teamId => (
    async dispatch => {
        dispatch(getTeam(teamId));
        dispatch(getTeamSurveys(teamId));
    }
);

export const getSurvey = surveyId => (
    async dispatch => {
        const response = await fetch(`/api/survey/${surveyId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const content = await response.json();

        dispatch(setCurrentSurvey(content));
    }
);

export const getQuestions = () => (
    async dispatch => {
        const response = await fetch('/api/questions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const content = await response.json();

        dispatch(setQuestions(content));
    }
);

export const getSurveyAndQuestions = surveyId => (
    async dispatch => {
        dispatch(getSurvey(surveyId));
        dispatch(getQuestions());
    }
);

export const submitSurvey = (surveyId, answers) => (
    async dispatch => {
        const body = {
            answers
        };

        await fetch(`/api/survey/${surveyId}/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        console.log('Survey Submitted');
    }
);

export const getResults = (teamId, surveyId) => (
    async dispatch => {
        const response = await fetch(`/api/survey/${teamId}/${surveyId}/result`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const content = await response.json();

        dispatch(setResults(content));
    }
)

export const getQuestionsAndResults = (teamId, surveyId) => (
    async dispatch => {
        await dispatch(getQuestions());
        dispatch(getResults(teamId, surveyId));
    }
);