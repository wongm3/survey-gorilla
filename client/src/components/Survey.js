import React from 'react';
import Question from './Question';
import { answerQuestion } from '../actions/teamActions';

class Survey extends React.Component {
    submitSurvey = () => {
        console.log(this.props.id, this.props.questions);
        this.props.submitSurvey(this.props.id, this.props.questions);
    }
    render() {
        return (
            <div className="Survey">
                <div className="banner">
                    <h1>{this.props.name} Survey</h1>
                    <label>
                        Distribute Survey:
                         {/* TODO Include Share Button */}
                        <input type='text' value={`${window.location.origin}/survey/${this.props.id}`} readOnly/>
                    </label>
                </div>
                <div className="content">
                    <div>
                        <ol>
                            {
                                this.props.questions.map((question) => (
                                    <li key={question.questionId}>
                                        <Question text={question.text} id={question.questionId} answerQuestion={this.props.answerQuestion} />
                                    </li>
                                ))
                            }

                        </ol>
                        <input type='button' value='Submit Survey' onClick={this.submitSurvey} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Survey;