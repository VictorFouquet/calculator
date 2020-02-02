import React, { Component } from "react";
import "./display.css";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="viz">
        <h5>{this.props.previous ? this.props.previous : "0"}</h5>
        <h1>{this.props.current}</h1>
      </div>
    );
  }
}

export default Display;
