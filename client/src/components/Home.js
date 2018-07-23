import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <div className="banner">
                    <h1>Create Team</h1>
                </div>
                <div className="content">
                    <label>
                        Team Name:
                    <input type='text' />
                    </label>
                    <input type='button' value='Create' />
                </div>
            </div>
        )
    }
}

export default Home;