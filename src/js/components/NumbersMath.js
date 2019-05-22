import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class NumbersMath extends Component{
constructor(props){
    super(props);
        this.state={
            userNumberMath:this.props.userNumberMath,
        }
    }

    handleUserMathNumber = () => {

        if (typeof this.props.handleUserMathNumber === "function"){
            this.props.handleUserMathNumber();
        }
    };
    userMathFact = () => {

        if (typeof this.props.userMathFact === "function"){
            this.props.userMathFact();
        }
    };
    randoMathFact = () => {

        if (typeof this.props.randoMathFact === "function"){
            this.props.randoMathFact();
        }
    };



    render(){
        return(
            <div className="detailedOptions">
                <input
                    placeholder="Put your number here"
                    value={this.state.userNumberMath}
                    onChange={this.handleUserMathNumber}
                />
                <button onClick={this.userMathFact}>OK</button>
                <p> OR </p>
                <button onClick={this.randoMathFact}>Get Random</button>
            </div>
        )
    }
}
