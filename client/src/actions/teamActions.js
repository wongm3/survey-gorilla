import { push } from 'connected-react-router';
export const UPDATE_TEAM = 'UPDATE_TEAM';
export const SET_SURVEYS = 'SET_SURVEYS';

export const updateTeam = (team) => ({
    type: UPDATE_TEAM,
    team
});

export const setSurveys = (surveys) => ({
    type: SET_SURVEYS,
    surveys
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
        console.log('test');
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
)