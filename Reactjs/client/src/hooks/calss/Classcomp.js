import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Classcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "www.javatpoint.com",
    };
    this.handlefunction = this.handlefunction.bind(this);
  }

  handlefunction() {
    return this.setState({ name: "Rakesh" });
  }

  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={this.handlefunction}>Click me </button>
      </div>
    );
  }
}
