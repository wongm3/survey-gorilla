import { connect } from 'react-redux';
import Team from 'components/Team';

const mapStateToProps = ({ team : { name }}) => ({
    name
});

const mapDispatchToProps = () => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);