import { connect } from 'react-redux';
import Home from 'components/Home';
import { updateTeam, registerTeam } from 'actions/teamActions';
import { reduxForm, formValueSelector } from 'redux-form';

const selector = formValueSelector('registerTeam');

const mapStateToProps = (state) => ({
    teamName: selector(state, 'teamName')
});

const mapDispatchToProps = (dispatch) => ({
    registerTeam: name => dispatch(registerTeam(name)),
    updateTeam: team => dispatch(updateTeam(team))
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'registerTeam' })(Home));