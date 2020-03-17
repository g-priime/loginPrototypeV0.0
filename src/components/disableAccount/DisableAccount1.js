import React from "react";
import { Link } from "react-router-dom";
import "../../css/changePassword.css";

class DisableAccount1 extends React.Component {
  state = { password: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.password);
  };

  render() {
    return (
      <div
        className="ui segment contChangePassword"
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container">
            <h1>Disable Account</h1>

            <div className="row">
              <div className="col-sm">
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
              </div>
              <br />
              <br />
            </div>
            <br />

            <div className="d-flex justify-content-between">
              <Link
                to="/Profile"
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
                Back to Profile
              </Link>
              <button
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1D3461",
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DisableAccount1;
