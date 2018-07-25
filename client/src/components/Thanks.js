import React from 'react';
import { Link } from 'react-router-dom';

class Thanks extends React.Component {

    render() {
        return (
            <div className="Thanks">
                <div className="banner">

                    <h1>Thank you for your submission</h1>
                </div>
                <div className="content">
                    <Link to={`/results/${this.props.match.params.teamId}/${this.props.match.params.surveyId}`}>View the results</Link>
                </div>
            </div>
        )
    }
}

export default Thanks;