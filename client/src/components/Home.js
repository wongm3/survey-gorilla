import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

class Home extends React.Component {

    handleNameChange = (event) => {
        this.props.updateTeam({ name: event.target.value});
    }

    createTeam = () => {
        this.props.registerTeam(this.props.teamName);
    }

    render () {
        return (
            <div className="Home">
                <div className="banner">
                    <h1>Create Team</h1>
                </div>
                <div className="content centered">
                    <label>
                        Team Name: 
                        <Field
                            name="teamName"
                            component="input"
                            type="text"
                            onChange={this.handleNameChange}
                        />
                    </label>
                    <input type='button' value='Create' onClick={this.createTeam} />
                </div>
            </div>
        )
    }
}

Home.propTypes = {
    registerTeam: PropTypes.func.isRequired,
    teamName: PropTypes.string,
    updateTeam: PropTypes.func.isRequired
}

export default Home;