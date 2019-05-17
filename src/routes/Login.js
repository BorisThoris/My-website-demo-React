import React from "react";
import { Button } from "antd";
import notify from "../services/notify.js";
import auth from "../services/authService.js";
import { Redirect } from "react-router-dom";
import reactDOM from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    isAdmin: false
  };

  onChange = e => {
    {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  onSubmit = () => {
    let username = this.state.username;
    let password = this.state.password;
    let isAdmin = this.state.isAdmin;

    auth
      .login(username, password)
      .then(userData => {
        auth.saveSession(userData);
        notify.showInfo("Logged in successfully!");
        this.props.history.push("Home");
      })
      .catch(() => notify.showError("Login Error"));
  };
  render() {
    return (
      <div id="manage">
        <center>
          <form id="loginForm">
            <label>
              Username:
              <input
                type="text"
                name="username"
                onChange={e => this.onChange(e)}
                value={this.state.usernamel}
              />
            </label>
            <br />

            <label>
              Password:
              <input
                type="password"
                name="password"
                onChange={e => this.onChange(e)}
                value={this.state.password}
              />
            </label>
            <br />

            {/*button*/}
            <Button
              id="btnLogin"
              onClick={() => this.onSubmit()}
              type="primary"
            >
              Login
            </Button>
          </form>
        </center>
        <br />
      </div>
    );
  }
}

export default withRouter(Login);
