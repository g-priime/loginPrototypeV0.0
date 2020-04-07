import React from "react";
import DisableAccount1 from "./DisableAccount1";
import BasePath from "../../api/BasePath";
import Popup from "../PopUp";
import { Redirect } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

class DisableAccountMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: "",
      password: "",
      showPopup: false,
      cn: "",
      username: "",
      initialState: false,
      token: ""
    };
  }

  getUsername = async () => {
    var token = localStorage.getItem("token");
    if (token != null) {
      const response = await BasePath.get(
        `/webresources/RetrieveUser/${token}`,
        {
          token
        }
      );
      if (!this.state.initialState || this.state.token !== token) {
        this.setState({ username: response.data.username, initialState: true, token: token });
      }
    }
  };

  onSubmit = async () => {
    //add back in when done testing
    var token = localStorage.getItem("token");
    var username = this.state.username;
    var password = this.state.password;

    const response = await BasePath.put("/webresources/deleteAccount", {
      token,
      username,
      password
    });

    this.setState({ response: response.data });

    if (this.state.response === "Password is incorrect") {
      this.setState({ cn: "popup4" });
      this.togglePopup();
      this.setState({ password: "" });
    } else if (this.state.response === "yes") {
      this.logOut();
      this.props.onHideDisableAccount();
      this.setState({ response: "", password: "" });
    }
  };

  closeDisableAccount = () => {
    this.props.onHideDisableAccount();
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  logOut = () => {
    localStorage.clear();
    this.props.authenticate(false);
    //this.setState({ initialStates: false, username: "" });
  };

  render() {
    this.getUsername();

    if (this.state.response === "yes") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/Register",
              state: { message: "Account has been disabled" }
            }}
          />
        </div>
      );
    } else {
      return (
        <Modal
          size="m"
          centered
          show={this.props.showDisableAccount}
          onHide={this.props.onHideDisableAccount}
        >
          <Modal.Header closeButton className="header">
            <Modal.Title id="title">Disable Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <DisableAccount1
                password={this.state.password}
                onChangePassword={this.handleChangePassword}
                onSubmit={this.onSubmit}
              />
              <div>
                {this.state.showPopup ? (
                  <Popup
                    cn={this.state.cn}
                    text={this.state.response}
                    closePopup={this.togglePopup.bind(this)}
                    bgColor="red"
                  />
                ) : null}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      );
    }
  }
}

export default DisableAccountMain;
