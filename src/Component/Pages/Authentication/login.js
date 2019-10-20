import React, { Component } from "react";
import InputGroup from "../../InputGroup";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="login-component">
        <InputGroup />
      </div>
    );
  }
}
