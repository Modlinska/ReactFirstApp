import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MainPage from "./mainPage"

export default class QuizSummary extends Component {
    state = {
        toMain: false
    };

    componentDidMount() {
        let timeout = setTimeout(() => {
            this.setState({
                toMain: true
            })
        }, 10000)
    }

    componentWillUnmount() {
        clearTimeout(timeout);
    }

    handleToMainPage = () => {
        this.setState({
            toMain: true
        })
    };

    render() {
        if (this.state.toMain) {
            return <MainPage/>
        }
        if (this.props.score > 3) {
            return (<section className="summary">
                    <div className="quizSummary">
                        <h1> Congratulations! You got {this.props.score} score!</h1>
                        <button onClick={this.handleToMainPage}>Go back</button>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="summary">
                    <div className="quizSummary">
                        <h1> Sorry! You got {this.props.score} score </h1>
                        <button onClick={this.handleToMainPage}>Go back</button>
                    </div>
                </section>
            )
        }

    }
};