import React from "react";
import {
  Link
} from "react-router-dom";
import "../../css/login.css";
import BasePath from "../../api/BasePath";
import Modal from 'react-bootstrap/Modal';

class Login extends React.Component {

  constructor(props) {
    super(props);
  };

  state = {
    username: "",
    password: ""
  };

  loginUser = () => {
    BasePath.post('/webresources/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(result => {
        if (result.data != "invalid login") {
          localStorage.setItem('token', result.data);
          console.log(localStorage.getItem('token'));
        } else {
          console.log('invalid');
        }
      })
      .catch(err => {
        console.log(err)
      });
  };

  render() {
    return (

      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login/Register
           </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div >
            <h1 > Login </h1>
            Enter Username: < input type="text" onChange={(event) => this.setState({ username: event.target.value })} />
            Enter Password: < input type="password" onChange={(event) => this.setState({ password: event.target.value })} />
            <button onClick={this.loginUser}>Login</button>
          </div>
        </Modal.Body>
      </Modal>

    );
  }
}

export default Login;