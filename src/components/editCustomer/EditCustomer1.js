import React from "react";
import "../../css/reg.css";
import { Link } from "react-router-dom";

class EditCustomer1 extends React.Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    fname: "",
    lname: "",
    email: ""
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(
      this.state.username,
      this.state.password,
      this.state.confirmPassword,
      this.state.fname,
      this.state.lname,
      this.state.email
    );
  };

  previousStep_onClick = event => {
    event.preventDefault();
    this.props.onClick();
    console.log("here");
  };

  render() {
    return (
      <div className="ui segment cont" style={{ backgroundColor: "#ECEBE7" }}>
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container">
            <h1>Edit Information</h1>

            <h2>Step 1</h2>

            <div className="row">
              <div className="col-sm">
                <label>Username:</label>
                <input
                  pattern="^[a-zA-Z1-9]{1,20}$"
                  className="field b-5"
                  type="text"
                  placeholder="Enter username"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                  required
                />
                <br />
                <br />

                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  pattern="^[a-zA-Z1-9_*-]{1,20}$"
                  placeholder="Enter password"
                  value={this.props.password}
                  onChange={this.props.onChangePassword}
                  required
                />
                <br />
                <br />

                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  pattern="^[a-zA-Z1-9_*-]{1,20}$"
                  placeholder="Confirm password"
                  value={this.props.confirmPassword}
                  onChange={this.props.onChangeConfirmPassword} //how to confirm it?
                  required
                />
              </div>
              <br />
              <br />

              <div className="col-sm">
                <label>First Name:</label>
                <input
                  pattern="^[a-zA-Z'-]{1,20}$"
                  type="text"
                  placeholder="Enter First Name"
                  value={this.props.fname}
                  onChange={this.props.onChangeFname}
                  required
                />
                <br />
                <br />

                <label>Last Name:</label>
                <input
                  pattern="^[a-zA-Z'-]{1,20}$"
                  type="text"
                  placeholder="Enter Last Name"
                  value={this.props.lname}
                  onChange={this.props.onChangeLname}
                  required
                />
                <br />
                <br />

                <label>Email:</label>
                <input
                  type="email"
                  maxLength="20"
                  minLength="3"
                  placeholder="Enter Email"
                  value={this.props.email}
                  onChange={this.props.onChangeEmail}
                  required
                />
                <br />
                <br />
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <Link
                to="/"
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
                Back to Home Page
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
                Next Step
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditCustomer1;
