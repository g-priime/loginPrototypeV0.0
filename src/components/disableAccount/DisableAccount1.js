import React from "react";
import { Link } from "react-router-dom";
import "../../css/changePassword.css";

class DisableAccount1 extends React.Component {
  state = { password: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.password);
  };

  render() {
    return (
      <div className="m-4">
        <form onSubmit={this.onFormSubmit} className="m-4 pt-3">
          <label>Please verify password to disable account:</label>
          <input
            type="password"
            name="password"
            pattern="^[a-zA-Z1-9_*-]{1,20}$"
            title="Cannot be longer then 20 Characters. Letters, numbers, only special characters '_' '*' '-' allowed"
            placeholder="Enter password"
            value={this.props.password}
            onChange={this.props.onChangePassword}
            required
          />

          <br />
          <br />

          <br />

          <div>
            <button
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
              }}
            >
              Disable Account
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DisableAccount1;
