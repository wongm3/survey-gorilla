import React from 'react';
import Question from './Question';
import Clipboard from 'react-clipboard.js';
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
                    <h1>{this.props.name} <span className="desktop">Survey</span></h1>
                    <label>
                        <Clipboard data-clipboard-text={`${window.location.origin}/survey/${this.props.id}`}>
                            Copy <span className="desktop">Survey</span> Link
                        </Clipboard>
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
                        <div className="centered">
                            <input type='button' value='Submit Survey' onClick={this.submitSurvey}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Survey;