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
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(timeout);
    }


    render() {
        if (this.state.toMain) {
            return <MainPage/>
        }
        if (this.props.score > 3) {
            return (
                <h1> Congratulations! You got {this.props.score} score !!!</h1>
            )
        } else {
            return <h1> Sorry! You got only {this.props.score}</h1>
        }

    }
};