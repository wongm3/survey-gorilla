import React from 'react';
import Question from './Question';

class Survey extends React.Component {

    constructor(props) {
        super(props);
        this.questions = [{ "question_id": 1, "question_text": "We know exactly why we are here, and we are really excited about it." }, { "question_id": 2, "question_text": "We deliver great stuff! We’re proud of it and our stakeholders are really happy." }, { "question_id": 3, "question_text": "We love going to work, and have great fun working together." }, { "question_id": 4, "question_text": "We’re learning lots of interesting stuff all the time!" }, { "question_id": 5, "question_text": "Releasing is simple, safe, painless & mostly automated." }, { "question_id": 6, "question_text": "Our way of working fits us perfectly." }, { "question_id": 7, "question_text": "We’re proud of the quality of our code! It is clean, easy to read, and has great test coverage." }, { "question_id": 8, "question_text": "We get stuff done really quickly.No waiting, no delays." }, { "question_id": 9, "question_text": "We always get great support & help when we ask for it!" }, { "question_id": 10, "question_text": "We are in control of our destiny! We decide what to build and how to build it." }]

    }
    render() {
        return (
            <div className="Survey">
                <div className="banner">
                    <h1>Survey</h1>
                    <label>
                        Distribute Survey:
                         {/* TODO Include Share Button */}
                        <input type='text' />
                    </label>
                </div>
                <div className="content">
                    <div>
                        <ol>
                            {
                                this.questions.map((question, index) => (
                                    <li>
                                        <Question text={question.question_text} id={question.question_id} />
                                    </li>
                                ))
                            }

                        </ol>
                        <input type='button' value='Submit Survey' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Survey;