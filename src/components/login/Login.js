import React from "react";
import { Link } from "react-router-dom";
import "../../css/login.css";
import BasePath from "../../api/BasePath";
import Modal from 'react-bootstrap/Modal';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
        if (result.data != "invalid login") {
          localStorage.setItem('token', result.data);
          console.log(localStorage.getItem('token'));
          this.props.onHide();
        } else {
          console.log('invalid name or password');
        }
      })
      .catch(err => {
        console.log(err)
      });
  };

  render() {
    return (
      <Modal size="lg" centered show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton className="header">
          <Modal.Title id="title">
            Login
           </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="m-4">
            <div className="m-4">
            Enter Username: < input type="text" onChange={(event) => this.setState({ username: event.target.value })} />
            <br /><br />
            Enter Password: < input type="password" onChange={(event) => this.setState({ password: event.target.value })} />
            <br /><br />
            </div>
            <button className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
              }} onClick={this.loginUser}>Login</button><br />
            <div>OR</div>
            <br />
            <Link
              to="/Register"
              type="button"
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