import React from 'react';
import { connect } from 'react-redux';
import Team from 'components/Team';
import { startSurvey, getTeamAndSurveys } from 'actions/teamActions';
import { reduxForm, formValueSelector } from 'redux-form';

class TeamContainer extends React.Component {
    
    componentDidMount() {
        this.props.getTeamAndSurveys(this.props.id);
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
    surveyName: selector(state, 'surveyName')
});

const mapDispatchToProps = (dispatch) => ({
    getTeamAndSurveys: (teamId) => dispatch(getTeamAndSurveys(teamId)),
    startSurvey: (teamId, name) => dispatch(startSurvey(teamId, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'generateSurvey' })(TeamContainer));