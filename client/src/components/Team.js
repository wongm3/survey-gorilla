import React from 'react';
import { Field } from 'redux-form';

class Team extends React.Component {

    startSurvey = () => {
        this.props.startSurvey(this.props.id, this.props.surveyName);
    }

    render () {
        return (
            <div className="Team">
                <h1>{this.props.name}</h1>
                <label>
                    Create New Survey: 
                    <Field
                        name="surveyName"
                        component="input"
                        type="text"
                    />
                </label>
                <input type='button' value='Generate' onClick={this.startSurvey} />
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