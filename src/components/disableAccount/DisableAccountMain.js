import React from "react";
import DisableAccount1 from "./DisableAccount1";
import BasePath from "../../api/BasePath";
import Popup from "../PopUp";
import { Redirect } from "react-router-dom";

class DisableAccountMain extends React.Component {
  state = { response: "", password: "", showPopup: false, cn: "" };

  onSubmit = async () => {
    //add back in when done testing
    //var token = localStorage.getItem("token");
    var password = this.state.password;

    const response = await BasePath.put("/webresources/disableAccount", {
      //token,
      password
    });

    this.setState({ response: response.data });

    if (this.state.response === "Password is incorrect") {
      this.setState({ cn: "popup4" });
      this.togglePopup();
    } else if (this.state.response === "Disabled") {
      this.logOut();
    }
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
    //this.setState({ initialStates: false, username: "" });
  };

  render() {
    if (this.state.response === "Disabled") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/",
              state: { message: "Account has been disabled" }
            }}
          />
        </div>
      );
    } else {
      return (
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
      );
    }
  }
}

export default DisableAccountMain;
