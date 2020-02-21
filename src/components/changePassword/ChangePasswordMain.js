import React from "react";

import BasePath from "../../api/BasePath";
import ChangePassword1 from "./ChangePassword1";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";

class ChangePasswordMain extends React.Component {
  state = {
    images: [],
    fieldName: [],
    page: "",
    showPopup: false,
    cn: ""
  };

  onSearchSubmit1 = async (oldPassword) => {
    this.setState({
      fieldName: [
        this.state.oldPassword,
        this.state.password,
        this.state.confirmPassword,
        this.state.sessionId
      ]
    });

    //TODO: get some kind of sessionId that's set during login
    var sessionId = "123";

    var oldPword = this.state.oldPassword;
    var pword = this.state.password;
    var confirmPword = this.state.confirmPassword;

    console.log(this.state.sessionId);

    const response = await BasePath.put("/webresources/changePassword", {
      sessionId,
      oldPword,
      pword,
      confirmPword,
    });

    console.log(response.data);
    console.log(response.status);
    this.setState({ images: response.data });

    if (this.state.images === "Old password is incorrect") {
      this.setState({ cn: "popup4" });
      this.togglePopup();
    } else if (this.state.images === "New passwords do not match") {
      this.setState({ cn: "popup5" });
      this.togglePopup();
    }
  };

  onPrevious = () => {
    console.log("main");
    this.setState({ images: [] });
    console.log(this.state.images);
  };

  onHome = event => {
    event.preventDefault();
    this.props.onClick("home");
    console.log("main event");
  };

  onChangePage = () => {
    this.props.onClick(this.state.page);
    console.log("here");
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChangeOldPassword = event => {
    this.setState({ oldPassword: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleChangeConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  render() {
    var isValid = this.state.images;

    if (isValid === "account registered") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/",
              state: { message: "Password has been changed" }
            }}
          />
        </div>
      );
    } else if (isValid !== "Valid") {
      return (
        <div style={{ marginTop: "10px" }}>
          <ChangePassword1
            onChangeOldPassword={this.handleChangeOldPassword}
            onChangePassword={this.handleChangePassword}
            onChangeConfirmPassword={this.handleChangeConfirmPassword}
            onSubmit={this.onSearchSubmit1}
            onClick={() => {
              this.props.onChangePage("about");
            }}
          />
          <div>
            {this.state.showPopup ? (
              <Popup
                cn={this.state.cn}
                text={this.state.images}
                closePopup={this.togglePopup.bind(this)}
                bgColor="red"
              />
            ) : null}
          </div>
        </div>
      );
    } 
  }
}

export default ChangePasswordMain;
