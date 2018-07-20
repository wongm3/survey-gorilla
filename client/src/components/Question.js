import React from 'react';

class Home extends React.Component {

    render () {
        return (
            <div className="Question">
                <p>
                    {this.props.text}
                </p>
                {
                    [1, 2, 3, 4, 5].map((value, index) => {
                        return (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name={`question-${this.props.id}`}
                                    value={value}
                                />
                                <span>{value}</span>
                            </label>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home;