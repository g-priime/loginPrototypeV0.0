import React from "react";
import { Link } from "react-router-dom";
import "../../css/login.css";
import BasePath from "../../api/BasePath";
import Modal from 'react-bootstrap/Modal';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showErr: false,
      username: "",
      password: ""
    };
  }

  loginUser = () => {
    BasePath.post('/webresources/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(result => {
        console.log(result.data);
        if (result.data != "") {
          localStorage.setItem('token', result.data);
          this.props.onHide();
          //after this would change tab to account with drop down in header
        } else {
          this.props.changeErr("Invalid username and/or password");
          this.setState({ showErr: true });
        }
      })
      .catch(err => {
        console.log(err)
      });
  };

  closeLogin = () => {
    this.props.onHide();
  }

  validateAndLogin = () => {
    if (this.state.username == "" || this.state.password == "") {
      this.props.changeErr("Username and/or Password cannot be empty");
      this.setState({ showErr: true });
    } else {
      this.loginUser();
    }
  }

  render() {
    return (
      <Modal size="m" centered show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton className="header">
          <Modal.Title id="title">
            Login
           </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="m-4">
            <div className="m-4 pt-3">
              Enter Username: < input type="text" onChange={(event) => this.setState({ username: event.target.value })} required />
              <br /><br />
              Enter Password: < input type="password" onChange={(event) => this.setState({ password: event.target.value })} required />
              <br /><br />
                {this.state.showErr ? (
                  <div className="error">{this.props.errMsg}</div>
                ) : null}
              <br />
              <Link
                to="/ChangePass"
                onClick={this.closeLogin}
              >
                {/* get username and send to the change password link*/}
                Forgot your Password?
              </Link>
            </div>
            <button
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
              }} onClick={this.validateAndLogin}>Login</button><br />
            <div>OR</div>
            <br />
            <Link
              to="/Register"
              type="button"
              onClick={this.closeLogin}
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
              }}
            >
              Register New Account
              </Link>
          </div>

        </Modal.Body>
      </Modal>

    );
  }
}

export default Login;