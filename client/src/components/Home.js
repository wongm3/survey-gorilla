import React from 'react';

class Home extends React.Component {

    handleNameChange = (event) => {
        this.props.updateTeam({ name: event.target.value});
    }

    createTeam = () => {
        this.props.registerTeam(this.props.name);
    }

    render () {
        return (
            <div className="Home">
                <h1>Create Team</h1>
                <label>
                    Team Name: 
                    <input type='text' onChange={this.handleNameChange} />
                </label>
                <input type='button' value='Create' onClick={this.createTeam} />
            </div>
        )
    }
}

export default Home;