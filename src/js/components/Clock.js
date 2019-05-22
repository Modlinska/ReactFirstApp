import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class Clock extends Component {


    render() {
        return (
            <section>
                <ClockDate date={this.props.datetime}/>
                <ClockTime date={this.props.datetime}/>
            </section>
        )
    }


}

function ClockDate(props) {
    const {date} = props;
    return <h2>{date.toLocaleDateString()}</h2>;
}

function ClockTime(props) {
    const {date} = props;
    return <h3>{date.toLocaleTimeString()}</h3>;
}
