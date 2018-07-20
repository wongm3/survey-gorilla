import React from 'react';

class Home extends React.Component {

    render () {
        return (
            <div className="Home">
                <h1>Create Team</h1>
                <label>
                    Team Name: 
                    <input type='text'/>
                </label>
                <input type='button' value='Create'/>
            </div>
        )
    }
}

export default Home;