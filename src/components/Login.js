import "../styles.css";
import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   name: "",
      //   password: ""
      isLoginOpen: true,
      isRegisteropen: false
    };
  }

  showRegisterBox() {
    this.setState({ isRegisteropen: true, isLoginOpen: false });
  }

  showLoginBox() {
    this.setState({ isRegisteropen: false, isLoginOpen: true });
  }

  render() {
    return (
      <div className="login">
        <div className="box-controller">
          <div
            className={
              "controller" +
              (this.state.isLoginOpen ? " selected-controller" : "")
            }
            onClick={this.showLoginBox.bind(this)}
          >
            Login
          </div>
          <div
            className={
              "controller" +
              (this.state.isRegisteropen ? " selected-controller" : "")
            }
            onClick={this.showRegisterBox.bind(this)}
          >
            Register
          </div>
        </div>
        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox />}
          {this.state.isRegisteropen && <RegisterBox />}
        </div>
      </div>
    );
  }
}

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   name: "",
      //   password: ""
    };
  }
  submitlogin(e) {}
  render() {
    return (
      <div className="inner-container">
        <div className="header-login">Login</div>
        <div className="box-login">
          <div className="input-grp">
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
            />
          </div>

          <div className="input-grp">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
            />
          </div>
          <br />
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
          {/* <input type="check"/><div>Remember Me</div> */}
          <div>Forget Password?</div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitlogin.bind(this)}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   name: "",
      //   password: ""
    };
  }
  submitRegister(e) {}
  render() {
    return (
      <div className="inner-container">
        <div className="header-login">Register</div>
        <div className="box-login">
          <div className="input-grp">
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
            />
          </div>

          <div className="input-grp">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
            />
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this.submitRegister.bind(this)}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
