import React from "react";
import "../../css/changePassword.css";
import { Link } from "react-router-dom";

class ChangePassword1 extends React.Component {
  state = {
    oldPassword: "",
    password: "",
    confirmPassword: ""
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(
      this.state.oldPassword,
      this.state.password,
      this.state.confirmPassword,
    );
  };

  previousStep_onClick = event => {
    event.preventDefault();
    this.props.onClick();
    console.log("here");
  };

  render() {
    return (
      <div className="ui segment contChangePassword" style={{ backgroundColor: "#ECEBE7" }}>
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container">
            <h1>Change Password</h1>

            <div className="row">
              <div className="col-sm">
              <label>Old Password:</label>
                <input
                  type="password"
                  name="oldPassword"
                  pattern="^[a-zA-Z1-9_*-]{1,20}$"
                  title="Cannot be longer then 20 Characters. Letters, numbers, only special characters '_' '*' '-' allowed"
                  placeholder="Enter old password"
                  value={this.props.oldPassword}
                  onChange={this.props.onChangeOldPassword}
                  required
                />
                <br />
                <br />

                <label>New Password:</label>
                <input
                  type="password"
                  name="password"
                  pattern="^[a-zA-Z1-9_*-]{1,20}$"
                  title="Cannot be longer then 20 Characters. Letters, numbers, only special characters '_' '*' '-' allowed"
                  placeholder="Enter new password"
                  value={this.props.password}
                  onChange={this.props.onChangePassword}
                  required
                />
                <br />
                <br />

                <label>Confirm New Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  pattern="^[a-zA-Z1-9_*-]{1,20}$"
                  title="Cannot be longer then 20 Characters. Letters, numbers, only special characters _ * - allowed"
                  placeholder="Confirm new password"
                  value={this.props.confirmPassword}
                  onChange={this.props.onChangeConfirmPassword} //how to confirm it?
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

export default ChangePassword1;
