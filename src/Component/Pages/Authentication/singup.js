import React, { Component } from "react";
import InputGroup from "../../InputGroup";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="signup-component">
        this is signup
        <InputGroup />
      </div>
    );
  }
}
