import React from 'react';
import { connect } from 'react-redux';
import Results from 'components/Results';
import { getQuestionsAndResults } from 'actions/teamActions';

class ResultsContainer extends React.Component {

    componentDidMount() {
        this.props.getQuestionsAndResults(this.props.teamId, this.props.surveyId);
    }

    render() {
        return <Results {...this.props} />
    }
}

const mapStateToProps = (state, ownProps) => ({
    teamId: ownProps.match.params.teamId,
    surveyId: ownProps.match.params.surveyId,
    questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
    getQuestionsAndResults: (teamId, surveyId) => dispatch(getQuestionsAndResults(teamId, surveyId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);