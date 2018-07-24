import React from 'react';
import { Field } from 'redux-form';

class Team extends React.Component {

    handleKeyDown = (event) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
            event.preventDefault();
            this.startSurvey();
        }
    }

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
                        onKeyDown={this.handleKeyDown}
                    />
                </label>
                <input type='button' value='Generate' onClick={this.startSurvey} />
                <div>View Previous Surveys:</div>
                    <ul>
                        {
                            this.props.surveys.map(survey => <li key={survey.id}>{survey.name}</li>)
                        }
                    </ul>
                <div>Metrics</div>
            </div>
        )
    }
}

export default Team;