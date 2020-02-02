import React, { Component } from "react";
import "./calculator.css";
import Buttons from '../buttons/Buttons';
import Display from '../display/Display';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVal: "0",
      chain: "",
      calculated: false,
      currentResult: ""
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleAllClear = this.handleAllClear.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }

  handleNumber(e) {
    if (this.state.calculated) {
      this.setState({
        currentVal: e.target.value,
        chain: e.target.value,
        calculated: false,
        currentResult: ""
      });
    } else if (this.state.currentVal === "0" && !this.state.chain) {
      this.setState({
        currentVal: e.target.value,
        chain: e.target.value
      });
    } else if (this.state.currentVal === "0" && this.state.chain) {
      this.setState({
        currentVal: e.target.value,
        chain: this.state.chain + e.target.value
      });
    } else {
      this.setState({
        currentVal: this.state.currentVal + e.target.value,
        chain: this.state.chain + e.target.value
      });
    }
  }

  handleClear() {
    if (this.state.currentVal != "0") {
      let provVal = this.state.currentVal
        .split("")
        .slice(0, this.state.currentVal.length - 1)
        .join("");
      if (!provVal) {
        provVal = "0";
      }
      let provChain = this.state.chain.split("");
      this.setState({
        currentVal: provVal,
        chain: provChain.slice(0, provChain.length - 1).join("")
      });
    }
  }

  handleAllClear() {
    this.setState({
      currentVal: "0",
      chain: "",
      calculated: false,
      currentResult: ""
    });
  }

  handleOperator(e) {
    if (this.state.currentResult != "") {
      this.setState({
        currentResult: this.state.currentResult.toString() + e.target.value
      });
    }
    if (this.state.calculated) {
      this.setState({
        chain: this.state.currentVal.toString() + e.target.value,
        currentVal: "0",
        calculated: false
      });
    } else {
      this.setState({
        currentVal: "0",
        chain: this.state.chain + e.target.value
      });
    }
  }

  handleEquals() {
    let cleanChain = [];
    let equalsZero;
    console.log(this.state.chain, /[*\/]/.test(this.state.chain[0]));
    if (this.state.currentResult == "" && /[*\/]/.test(this.state.chain[0])) {
      equalsZero = true;
    }
    let operation =
      this.state.currentResult !== ""
        ? this.state.currentResult + this.state.currentVal
        : this.state.chain;
    for (let i = 0; i < operation.length; i++) {
      while (
        !/[0-9.e]/.test(operation[i]) &&
        i + 1 < operation.length &&
        !/[0-9.e]/.test(operation[i + 1])
      ) {
        i++;
      }
      if (
        operation[i] == "-" &&
        i - 1 >= 0 &&
        !/[0-9.]/.test(operation[i - 1])
      ) {
        cleanChain.push(operation[i - 1], operation[i]);
      } else {
        cleanChain.push(operation[i]);
      }
    }
    let result;
    if (equalsZero) {
      result = "0";
    } else {
      result = eval(cleanChain.join(""));
    }
    if (result.toString().length > 11) {
      if (result > 99999999999) {
        result = result
          .toExponential(
            11 - (4 + (result.toString().length - 1).toString().length - 1)
          )
          .toString();
      } else {
        result = result
          .toString()
          .split("")
          .slice(0, 11)
          .join("");
      }
    }
    this.setState({
      currentResult: result,
      calculated: true,
      currentVal: result
    });
  }

  handleDecimal(e) {
    if (!/\./.test(this.state.currentVal)) {
      this.setState({
        currentVal: this.state.currentVal + e.target.value,
        chain: this.state.chain + e.target.value
      });
    }
  }

  render() {
    return (
      <div id="calculator" className="calc">
        <div className="calc-texture">
          <Display
            current={this.state.currentVal}
            previous={this.state.chain}
          />
          <Buttons
            handleNumber={this.handleNumber}
            handleAllClear={this.handleAllClear}
            handleOperator={this.handleOperator}
            handleEquals={this.handleEquals}
            handleDecimal={this.handleDecimal}
            handleClear={this.handleClear}
          />
        </div>
      </div>
    );
  }
}

export default Calculator;