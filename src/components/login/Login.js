import React from "react";
import {
  Link
} from "react-router-dom";
import "../../css/login.css";
import BasePath from "../../api/BasePath";
import Modal from 'react-bootstrap/Modal';

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  };

  loginUser = () => {
    this.BasePath.post('/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then( result => {
      console.log(result);
    });
  };

  render() {
    return (
      //   <Modal
      //   size="lg"
      //   aria-labelledby="contained-modal-title-vcenter"
      //   centered
      // >
      //   <Modal.Header closeButton>
      //     <Modal.Title id="contained-modal-title-vcenter">
      //       Login/Register
      //     </Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body>
      <div >
      <h1 > Login </h1>
      Enter Username: < input type = "text" onChange = {(event, newValue) => this.setState({username: newValue})}/>
      Enter Password: < input type = "password" onChange = {(event, newValue) => this.setState({password: newValue})}/>  
      </div>
      //  </Modal.Body>
      //   <Modal.Footer>
      //     <button onClick={this.loginUser}>Login</button>
      //   </Modal.Footer>
      // </Modal>
    );
  }
}

export default Login;