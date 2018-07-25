import React from 'react';
import { connect } from 'react-redux';
import Survey from 'components/Survey';
import { getSurveyAndQuestions, answerQuestion, submitSurvey } from 'actions/teamActions';

class SurveyContainer extends React.Component {

    componentDidMount() {
        this.props.getSurveyAndQuestions(this.props.id);
    }

    render() {
        return <Survey {...this.props} />
    }

}

const mapStateToProps = (state, ownProps) => ({
    id: state.surveys.currentSurvey.id || ownProps.match.params.surveyId,
    name: state.surveys.currentSurvey.name,
    questions: state.questions,
    teamId: ownProps.match.params.teamId
});

const mapDispatchToProps = (dispatch) => ({
    getSurveyAndQuestions: (surveyId) => dispatch(getSurveyAndQuestions(surveyId)),
    answerQuestion: (questionId, answer) => dispatch(answerQuestion(questionId, answer)),
    submitSurvey: (surveyId, answers, teamId) => dispatch(submitSurvey(surveyId, answers, teamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);