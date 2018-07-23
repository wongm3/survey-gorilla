import React from 'react';

class Team extends React.Component {

    render() {
        return (
            <div className="Team">
                <div className="banner">

                    <h1>Team Page</h1>
                </div>
                <div className="content">
                    <div className="centered">
                        <label>
                            Create New Survey:
                    <input type='text' />
                        </label>
                        <input type='button' value='Generate' />
                    </div>
                    <div>View Previous Surveys:</div>
                    <table style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Survey</th>
                                <th>Averages</th>
                                <th>Number of Responses</th>
                            </tr>
                        </thead>
                        <tbody className="centered">
                            <tr>
                                <td>Sprint 1</td>
                                <td>3.4</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>Sprint 2</td>
                                <td>2.9</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Sprint 3</td>
                                <td>3.9</td>
                                <td>4</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Team;