import { connect } from 'react-redux';
import Home from 'components/Home';
import { updateTeam, registerTeam } from 'actions/teamActions';

const mapStateToProps = ({ team : { name }}) => ({
    name
});

const mapDispatchToProps = (dispatch) => ({
    registerTeam: name => dispatch(registerTeam(name)),
    updateTeam: team => dispatch(updateTeam(team))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);