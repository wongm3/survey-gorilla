import React from 'react';

class Results extends React.Component {

    render() {
        return (
            <div className="Results">
                <div className="banner">

                    <h1>Results</h1>
                </div>
                <div className="content">
                    <table className="full-height">
                        <thead>
                            <tr>
                                <th className="text-align-left">Question</th>
                                <th><span><span className="desktop">Average </span>Score</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.questions.map((question, index) => (
                                    <tr key={question.questionId}>
                                        <td>{question.text}</td>
                                        <td className="centered">{question.average || 'N/A'}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Results;