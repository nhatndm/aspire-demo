import React, { Component } from "react";
import InputGroup from "../../InputGroup";
import Button from "../../Button";

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChangeValue = key => e => {
    this.setState({ [key]: e.target.value });
  };

  handleClick = () => {
    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="signup-component">
        <InputGroup
          label="Email"
          value={email}
          handleChange={this.handleChangeValue("email")}
        />
        <InputGroup
          isPassword
          label="Password"
          value={password}
          handleChange={this.handleChangeValue("password")}
        />

        <Button title="Sign Up" onClick={this.handleClick} />
      </div>
    );
  }
}
