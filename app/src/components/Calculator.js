import React, { Component } from 'react'
import calculatorImg from './calculator.png'

class Calculator extends Component {

    constructor(){
        super();

        this.state = {
            header: "My Calculator",
            displayNum: "0",
            operator: "",
            tempNum: "",
            resetDisplay: false
        }
    }

    updateHeader(e){
        var value = e.target.value;
        
        this.setState({
            header: value
        })
    }

    updateDisplay(number){
        var newDisplay = this.state.displayNum === "0" ? number : this.state.displayNum + number;
        var newDisplay2 = this.state.displayNum.length < 13 ? newDisplay : this.state.displayNum;
        this.setState( {
            displayNum: newDisplay2
        })
    }
    
    
    
    updateOperator(){
        //moved displayNum to tempNum
        //saves operator
        //blanks out displaynum
    }

    calculate(){
        //Does if statements and math
        //updates displayNum
    }
    
    
    
    render() {
        return (
            <div id="calculator-container">
                <input id="header-input" 
                        onChange={ (e)=> this.updateHeader(e.target.value)} />
                <h1 id="header"> { this.state.header } </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                    <div className="output">
                        <span className="total">{this.state.displayNum}</span>
                    </div>

                    <div className="btn clear"></div>

                    <div className="btn zero" onClick={ (e)=> this.updateDisplay("0") }></div>
                    <div className="btn one" onClick={ (e)=> this.updateDisplay("1") }></div>
                    <div className="btn two" onClick={ (e)=> this.updateDisplay("2") }></div>
                    <div className="btn three" onClick={ (e)=> this.updateDisplay("3") }></div>
                    <div className="btn four" onClick={ (e)=> this.updateDisplay("4") }></div>
                    <div className="btn five" onClick={ (e)=> this.updateDisplay("5") }></div>
                    <div className="btn six" onClick={ (e)=> this.updateDisplay("6") }></div>
                    <div className="btn seven" onClick={ (e)=> this.updateDisplay("7") }></div>
                    <div className="btn eight" onClick={ (e)=> this.updateDisplay("8") }></div>
                    <div className="btn nine" onClick={ (e)=> this.updateDisplay("9") }></div>

                    <div className="btn equal"></div>
                    <div className="btn multiply"></div>
                    <div className="btn divide"></div>
                    <div className="btn subtract"></div>
                    <div className="btn add"></div>
                </div>
            </div>
        )
    }
}

export default Calculator