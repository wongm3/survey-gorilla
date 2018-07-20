import React from 'react';

class Team extends React.Component {

    render () {
        return (
            <div className="Team">
                <h1>Team Page</h1>
                <label>
                    Create New Survey: 
                    <input type='text'/>
                </label>
                <input type='button' value='Generate'/>
                <div>View Previous Surveys:</div>
                    <ul>
                        <li>Sprint 1</li>
                        <li>Sprint 2</li>
                    </ul>
                <div>Metrics</div>
            </div>
        )
    }
}

export default Team;