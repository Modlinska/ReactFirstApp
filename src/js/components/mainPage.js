import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuizStart from "./QuizStart"

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mathFact: false,
            trivia: false,
            dateFacts: false,
            monDayFac: false,
            yearFact: false,
            userNumberMath: "",
            userNumberTrivia: "",
            userDate: "",
            userYear: "",
            showFact: " ",
            ErrorMesssage: ""
        };
    }

    handleGetMathFact = (e) => {

        this.setState({
            mathFact: true,
            trivia: false,
            dateFacts: false,
            monDayFac: false,
            yearFact: false
        })

    };
    handleGetTrivia = (e) => {

        this.setState({
            mathFact: false,
            trivia: true,
            dateFacts: false,
            monDayFac: false,
            yearFact: false
        })

    };
    handleGetDateFact = (e) => {

        this.setState({
            mathFact: false,
            trivia: false,
            dateFacts: true,

        })

    };
    handleGetmonDayFact = (e) => {

        this.setState({

            monDayFac: true,
            yearFact: false

        })

    };
    handleGetYearFact = (e) => {

        this.setState({
            yearFact: true,
            monDayFac: false
        })

    };


    handleUserMathNumber = (e) => {
        this.setState({
            userNumberMath: e.target.value
        })
    };

    userMathFact = () => {

        fetch("http://numbersapi.com/" + this.state.userNumberMath + "/math" + "?json")
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Database conection error");
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    showFact: data.text
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
                console.log("Error" + err.message);
            })

    };

    randoMathFact = () => {
        const random = Math.floor(Math.random() * (1000 - 1)) + 1;

        this.setState({
            userNumberMath: ""
        });
        fetch("http://numbersapi.com/" + random + "/math" + "?json")
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Database conection error");
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    showFact: data.text
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
                console.log("Error" + err.message);
            })
    };

    handleUserTriviaNumber = (e) => {
        this.setState({
            userNumberTrivia: e.target.value
        })
    };

    userTriviaFact = () => {
        fetch("http://numbersapi.com/" + this.state.userNumberTrivia + "/trivia" + "?json")
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Database conection error");
                }
            })
            .then(data => {
                this.setState({
                    showFact: data.text
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
                console.log("Error" + err.message);
            })

    };

    randomTrivia = () => {
        const random = Math.floor(Math.random() * (1000 - 1)) + 1;

        this.setState({
            userNumberTrivia: ""
        });
        fetch("http://numbersapi.com/" + random + "/trivia" + "?json")
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Database conection error");
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    showFact: data.text
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
                console.log("Error" + err.message);
            })
    };

    handleUserDate = (e) => {
        this.setState({
            userDate: e.target.value
        })
    };

    userDateFact = () => {
        fetch("http://numbersapi.com/" + this.state.userDate + "/date" + "?json")
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Database conection error");
                }
            })
            .then(data => {
                this.setState({
                    showFact: data.text
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
                console.log("Error" + err.message);
            })

    };

    randomDate = () => {
        this.setState({
            userDate: ""
        });
        fetch("http://numbersapi.com/random/date?json")
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Database conection error");
                }
            })
            .then(data => {
                this.setState({
                    showFact: data.text
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
                console.log("Error" + err.message);
            })
    };

    handleUserYear = (e) => {
        this.setState({
            userYear: e.target.value
        })
    };

    userYearFact = () => {
        fetch("http://numbersapi.com/" + this.state.userYear + "/year" + "?json")
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Database conection error");
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    showFact: data.text
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
                console.log("Error" + err.message);
            })

    };

    randomYear = () => {
        this.setState({
            userYear: ""
        });
        fetch("http://numbersapi.com/random/year?json")
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Database conection error");
                }
            })
            .then(data => {
                console.log(data);
                this.setState({
                    showFact: data.text
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
                console.log("Error" + err.message);
            })
    };


    render() {

        if (this.state.userDate === "9/13") {
            return <QuizStart/>
        }
        return (
            <section className="main">
                <h1>Some interesting facts about numbers and dates</h1>

                <div className="mainOptions">
                    <div onClick={this.handleGetMathFact}> Numbers math facts
                        {this.state.mathFact && <div className="detailedOptions">
                            <span>
                            <input
                                placeholder="Put your number here"
                                value={this.state.userNumberMath}
                                onChange={this.handleUserMathNumber}
                            />
                                <button className="okBtn" onClick={this.userMathFact}>OK</button>
                            </span>
                            <p> OR </p>
                            <button className="randomBtn" onClick={this.randoMathFact}>Get Random</button>
                        </div>}

                    </div>
                    <div onClick={this.handleGetTrivia}> Numbers trivia
                        {this.state.trivia &&

                        <div className="detailedOptions">
                            <span>
                            <input
                                placeholder="Put your number here"
                                value={this.state.userNumberTrivia}
                                onChange={this.handleUserTriviaNumber}
                            />
                            <button className="okBtn" onClick={this.userTriviaFact}>OK</button>
                            </span>
                            <p>OR</p>
                            <button className="randomBtn" onClick={this.randomTrivia}>Get Random</button>
                        </div>}
                    </div>
                    <div onClick={this.handleGetDateFact}> Facts about dates
                        {this.state.dateFacts && <div className="dateOptions">
                            <div onClick={this.handleGetmonDayFact}>Dates
                                {this.state.monDayFac &&
                                <div className="detailedOptions">
                                    <span>
                                    <input
                                        placeholder="Your date: mm/dd"
                                        value={this.state.userDate}
                                        onChange={this.handleUserDate}
                                    />
                                    <button className="okBtn" onClick={this.userDateFact}>OK</button>
                                    </span>
                                    <p>OR</p>
                                    <button className="randomBtn" onClick={this.randomDate}>Get Random</button>
                                </div>}
                            </div>
                            <div onClick={this.handleGetYearFact}> Years
                                {this.state.yearFact &&
                                <div className="detailedOptions">
                                    <span>
                                    <input
                                        placeholder="Put your year here"
                                        value={this.state.userYear}
                                        onChange={this.handleUserYear}
                                    />
                                    <button className="okBtn" onClick={this.userYearFact}> OK</button>
                                    </span>
                                    <p>OR</p>
                                    <button className="randomBtn" onClick={this.randomYear}>Get Random</button>
                                </div>}
                            </div>
                        </div>}
                    </div>
                </div>
                {(this.state.showFact === " ") &&
                <div className="numbersImage">
                    <div className="number1Image"></div>
                    <div className="number2Image"></div>
                    <div className="number3Image"></div>
                </div>
                }
                {(this.state.showFact != " ") &&
                <p className="fact">{this.state.showFact}</p>
                }
                {(this.state.ErrorMesssage != "") && <div className="fact">
                    <p>{this.state.ErrorMesssage}</p>
                </div>}
            </section>
        )
    }
}
