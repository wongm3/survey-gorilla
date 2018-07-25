import React from 'react';
import { connect } from 'react-redux';
import Team from 'components/Team';
import { startSurvey, getTeamSurveysAndTrends } from 'actions/teamActions';
import { reduxForm, formValueSelector } from 'redux-form';

class TeamContainer extends React.Component {
    
    componentDidMount() {
        this.props.getTeamSurveysAndTrends(this.props.id);
    }

    render() {
        return <Team {...this.props} />
    }
}

const selector = formValueSelector('generateSurvey');

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.teamId,
    name: state.team.name,
    surveys: state.surveys.surveys,
    surveyName: selector(state, 'surveyName'),
    trends: state.trends
});

const mapDispatchToProps = (dispatch) => ({
    getTeamSurveysAndTrends: (teamId) => dispatch(getTeamSurveysAndTrends(teamId)),
    startSurvey: (teamId, name) => dispatch(startSurvey(teamId, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'generateSurvey' })(TeamContainer));