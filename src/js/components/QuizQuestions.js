import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuizSummary from "./QuizSummary"


export default class QuizQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            question: "",
            answear1: "",
            answear2: "",
            answear3: "",
            answear1score: 0,
            answear2score: 0,
            answear3score: 0,
            background1: "",
            background2: "",
            background3: "",
            numberOfquestion: 0,
            quizFinished: false
        }
    }

    componentDidMount() {
        this.setState({
            isAnsweared: false
        });
        this.questionsAdd();
    }

    questionsAdd = () => {

        fetch("http://localhost:3000/questions")
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Database conection error");
                }
            })
            .then(data => {
                console.log(data);
                console.log(this.state.background1);
                console.log(this.state.background2);
                console.log(this.state.background3);
                this.setState({
                    question: data[this.state.numberOfquestion].question,
                    answear1: data[this.state.numberOfquestion].answear1.answear,
                    answear2: data[this.state.numberOfquestion].answear2.answear,
                    answear3: data[this.state.numberOfquestion].answear3.answear,
                    answear1score: data[this.state.numberOfquestion].answear1.score,
                    answear2score: data[this.state.numberOfquestion].answear2.score,
                    answear3score: data[this.state.numberOfquestion].answear3.score,
                    background1: "",
                    background2: "",
                    background3: "",

                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
                console.log("Error" + err.message);
            })

    };


    handleToNextQuestion = () => {
        this.setState({
            numberOfquestion: this.state.numberOfquestion + 1,
            isAnsweared: false
        });
        this.questionsAdd();
    };
    handleGetScore = (e) => {

        if (this.state.isAnsweared === false) {
            this.setState({
                isAnsweared: true
            });
            if (e.target.dataset.id === "1") {
                this.answear1IsChoosed();

            } else if (e.target.dataset.id === "2") {
                this.answear2IsChoosed();

            } else {
                this.answear3IsChoosed();

            }
        }
        this.showGoodanswear();
    };
    answear1IsChoosed = () => {
        this.setState({
            score: this.state.score + this.state.answear1score,
        });
        let color = "";
        if (this.state.answear1score === 1) {
            color = "green";
        } else {
            color = "red";
        }
        this.setState({
            background1: color
        });

    };

    answear2IsChoosed = () => {
        this.setState({
            score: this.state.score + this.state.answear2score,
        });
        let color = "";
        if (this.state.answear2score === 1) {
            color = "green";
        } else {
            color = "red";
        }
        this.setState({
            background2: color
        });

    };
    answear3IsChoosed = () => {
        this.setState({
            score: this.state.score + this.state.answear3score,
        });
        let color = "";
        if (this.state.answear3score === 1) {
            color = "green";
        } else {
            color = "red";
        }
        this.setState({
            background3: color
        });

    };
    showGoodanswear = () => {


        if (this.state.answear1score === 1) {
            this.setState({
                background1: "green"
            })
        }
        if (this.state.answear2score === 1) {
            this.setState({
                background2: "green"
            })
        }
        if (this.state.answear3score === 1) {
            this.setState({
                background3: "green"
            })
        }

    };

    handleGoToSummary = (e) => {
        this.setState({
            quizFinished: true
        })

    };

    render() {
        if(this.state.question===""){
            return null
        }
        if (this.state.quizFinished) {
            return <QuizSummary score={this.state.score}/>
        }
        return (
            <section className="quizQuestions">
            <div className="questions">
                <h3> {this.state.question}</h3>
                <p onClick={this.handleGetScore} data-id="1"
                   style={{backgroundColor: this.state.background1}}> {this.state.answear1}</p>
                <p onClick={this.handleGetScore} data-id="2"
                   style={{backgroundColor: this.state.background2}}> {this.state.answear2}</p>
                <p onClick={this.handleGetScore} data-id="3"
                   style={{backgroundColor: this.state.background3}}> {this.state.answear3}</p>
                {this.state.numberOfquestion < 4 &&
                <button onClick={this.handleToNextQuestion}>Next question</button>}
                {this.state.numberOfquestion >= 4 && <button onClick={this.handleGoToSummary}>Finish</button>}
            </div>
            </section>

        )
    }

}