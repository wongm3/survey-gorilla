export const updateTeam = (team) => ({
    type: 'UPDATE_TEAM',
    team
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
    }
)