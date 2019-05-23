import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Clock from "./Clock";
import MainPage from "./mainPage";

export default class CoverPage extends Component {
    state = {
        datetime: new Date(),
        fact: " Loading ....",
        error: "",
        toMain: false,

    };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                datetime: new Date()
            })
            if (this.state.toMain) {
                clearInterval(this.timer)
            }
        }, 1000)

        const dayData = this.state.datetime;

        const day = dayData.getDate();
        const month = (1 + dayData.getMonth());
        console.log(day, month);

        fetch("http://numbersapi.com/" + month + "/" + day + "?json")
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
                    fact: data.text
                });
            })
            .catch(err => {
                this.setState({
                    error: err.message
                });
                console.log("Error" + err.message);
            })

    }


    componentWillUnmount() {
        clearInterval(this.timer);
    }

    handleMoreCuriosities = (e) => {
        this.setState({
            toMain: true
        })
    };


    render() {
        if (this.state.toMain) {
            return <MainPage/>
        }
        return (
            <div className="coverPage">
                <h1>Hello! Today is <Clock datetime={this.state.datetime}/></h1>
                <h2>Fact of the Day:</h2>
                <p className="coverFact">
                    { this.state.fact}
                </p>
                <button onClick={this.handleMoreCuriosities}>For more curiosities click!</button>

            </div>
        )
    }
}

