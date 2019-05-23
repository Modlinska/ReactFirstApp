import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuizQuestions from "./QuizQuestions"

export default class QuizStart extends Component {
     state={

         toQuiz:false
     };


     handleOnClick =(e)=>{
       this.setState({
           toQuiz:true
       })
     };


    render() {
        if(this.state.toQuiz){
            return <QuizQuestions />
        }
        return (
            <section className="quiz">
                <div className="quizHeader">
                    <h1>13 September is The Day of the Programmer</h1>
                    <h2>Is it yours holiday? Let's check it! </h2>
                    <button onClick={this.handleOnClick} >Ready? GO!</button>
                </div>
                <div className="image"></div>
            </section>

        )
    }

}