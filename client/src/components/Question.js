import React from 'react';

class Question extends React.Component {

    answerQuestion = (event) => {
        this.props.answerQuestion(this.props.id, event.target.value);
    }

    render() {
        return (
            <div className="Question">
                <p>
                    {this.props.text}
                </p>
                <div>
                    {
                        [1, 2, 3, 4, 5].map((value, index) => {
                            return (
                                <label className="answer" key={index}>
                                    <input
                                        type="radio"
                                        name={`question-${this.props.id}`}
                                        value={value}
                                        onClick={this.answerQuestion}
                                    />
                                    <span>{value}</span>
                                </label>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Question;