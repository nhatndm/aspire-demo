import React, { Component } from "react";
import InputGroup from "Component/InputGroup";
import Button from "Component/Button";
import { isEmail } from "validator";

export default class Login extends Component {
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
    const { email, password } = this.state;
    const { handleSubmit } = this.props;
    if (isEmail(email) && password.trim() !== "") {
      return handleSubmit(this.state);
    }

    return alert("Check your information please");
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login-component">
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

        <Button title="Sign In" onClick={this.handleClick} />
      </div>
    );
  }
}
