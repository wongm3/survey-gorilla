import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { LineChart } from 'react-chartkick';

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

    render() {
        return (
            <div className="Team">
                <div className="banner">

                    <h1>{this.props.name}</h1>
                </div>
                <div className="content">
                    <div className="centered">
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
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Survey</th>
                                <th>Number of Responses</th>
                                <th>Averages</th>
                            </tr>
                        </thead>
                        <tbody className="centered">
                            {
                                this.props.surveys.map(survey => (
                                    <tr key={survey.id}>
                                        <td>
                                            <Link to={`/survey/${survey.id}`}>{survey.name}</Link> - <Link to={`/results/${this.props.id}/${survey.id}`}>Results</Link>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <LineChart data={this.props.trends} height="750px" />
                </div>
            </div>
        )
    }
}

export default Team;