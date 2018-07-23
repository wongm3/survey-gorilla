import React from 'react';

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.questions = [{ "response_average": 1, "question_text": "We know exactly why we are here, and we are really excited about it." }, { "response_average": 2, "question_text": "We deliver great stuff! We’re proud of it and our stakeholders are really happy." }, { "response_average": 3, "question_text": "We love going to work, and have great fun working together." }, { "response_average": 4, "question_text": "We’re learning lots of interesting stuff all the time!" }, { "response_average": 5, "question_text": "Releasing is simple, safe, painless & mostly automated." }, { "response_average": 6, "question_text": "Our way of working fits us perfectly." }, { "response_average": 7, "question_text": "We’re proud of the quality of our code! It is clean, easy to read, and has great test coverage." }, { "response_average": 8, "question_text": "We get stuff done really quickly.No waiting, no delays." }, { "response_average": 9, "question_text": "We always get great support & help when we ask for it!" }, { "response_average": 10, "question_text": "We are in control of our destiny! We decide what to build and how to build it." }]

    }
    render() {
        return (
            <div className="Results">
                <h1>Results Page</h1>
            
                    <div>Results:
                    <ol>
                        {
                            this.questions.map((question, index) => (
                                <li>
                                    {question.question_text} 
                                    <br/>
                                    {question.response_average % 5}
                                </li>
                            ))
                        }

                    </ol>
                </div>
            </div>
        )
    }
}

export default Results;