import React from "react";
import DisableAccount1 from "./DisableAccount1";
import BasePath from "../../api/BasePath";

class DisableAccountMain extends React.Component {
  state = { password: "" };

  onSubmit = async () => {
    var token = localStorage.getItem("token");
    var password = this.state.password;

    const response = await BasePath.put("/webresources/changepassword", {
      token,
      password
    });

    this.setState({ response: response.data });

    if (this.state.images === "Password is incorrect") {
      this.setState({ cn: "popup4" });
      this.togglePopup();
    }
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <DisableAccount1
          password={this.state.password}
          onChangePassword={this.handleChangePassword}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default DisableAccountMain;
