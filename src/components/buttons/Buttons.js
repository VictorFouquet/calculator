import React, { Component } from "react";
import "./buttons.css";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="buttons">
        <div className="button-raw">
          <button
            id="all-clear"
            className="button-double button-clear"
            onClick={this.props.handleAllClear}
          >
            AC
          </button>
          <button
            id="clear"
            className="button button-clear"
            onClick={this.props.handleClear}
          >
            C
          </button>
          <button
            id="divide"
            className="button-operand"
            value="/"
            onClick={this.props.handleOperator}
          >
            ÷
          </button>
        </div>
        <div className="button-raw">
          <button
            id="one"
            className="button"
            value="1"
            onClick={this.props.handleNumber}
          >
            1
          </button>
          <button
            id="two"
            className="button"
            value="2"
            onClick={this.props.handleNumber}
          >
            2
          </button>
          <button
            id="three"
            className="button"
            value="3"
            onClick={this.props.handleNumber}
          >
            3
          </button>
          <button
            id="multiply"
            className="button-operand"
            value="*"
            onClick={this.props.handleOperator}
          >
            *
          </button>
        </div>
        <div className="button-raw">
          <button
            id="four"
            className="button"
            value="4"
            onClick={this.props.handleNumber}
          >
            4
          </button>
          <button
            id="five"
            className="button"
            value="5"
            onClick={this.props.handleNumber}
          >
            5
          </button>
          <button
            id="six"
            className="button"
            value="6"
            onClick={this.props.handleNumber}
          >
            6
          </button>
          <button
            id="add"
            className="button-operand"
            value="+"
            onClick={this.props.handleOperator}
          >
            +
          </button>
        </div>
        <div className="button-raw">
          <button
            id="seven"
            className="button"
            value="7"
            onClick={this.props.handleNumber}
          >
            7
          </button>
          <button
            id="eight"
            className="button"
            value="8"
            onClick={this.props.handleNumber}
          >
            8
          </button>
          <button
            id="nine"
            className="button"
            value="9"
            onClick={this.props.handleNumber}
          >
            9
          </button>
          <button
            id="subtract"
            className="button-operand"
            value="-"
            onClick={this.props.handleOperator}
          >
            -
          </button>
        </div>
        <div className="button-raw">
          <button
            id="decimal"
            className="button-operand"
            value="."
            onClick={this.props.handleDecimal}
          >
            .
          </button>
          <button
            id="zero"
            className="button"
            value="0"
            onClick={this.props.handleNumber}
          >
            0
          </button>
          <button
            id="equals"
            className="button-operand button-double"
            onClick={this.props.handleEquals}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;