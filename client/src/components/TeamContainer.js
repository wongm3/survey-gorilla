import { connect } from 'react-redux';
import Team from 'components/Team';
import { startSurvey } from 'actions/teamActions';
import { reduxForm, formValueSelector } from 'redux-form';

const selector = formValueSelector('generateSurvey');

const mapStateToProps = (state) => ({
    id: state.team.id,
    name: state.team.name,
    surveyName: selector(state, 'surveyName')
});

const mapDispatchToProps = (dispatch) => ({
    startSurvey: (teamId, name) => dispatch(startSurvey(teamId, name))
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'generateSurvey' })(Team));