import React from "react";
import { Link } from "react-router-dom";

class CreateUser extends React.Component {
  state = {
    images: [],
    fieldName: [],
    page: "",
    showPopup: false,
    cn: "",
    username: "",
    fname: "",
    lname: "",
    email: "",

    appt: "",
    building: "",
    street: "",
    city: "",
    province: "",
    postcode: "",
    phone: "",
    emergencyphone: "",
    emergencyname: ""
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(
      this.state.username,
      this.state.password,
      this.state.confirmPassword,
      this.state.fname,
      this.state.lname,
      this.state.email,
      this.state.appt,
      this.state.building,
      this.state.street,
      this.state.city,
      this.state.province,
      this.state.postcode,
      this.state.phone,
      this.state.emergencyphone,
      this.state.emergencyname
    );
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "#212529" }}>Create new user</h1>
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <label>Username:</label>
                <input
                  required
                  title="Cannot be shorter than 5 and longer then 20 characters, can only contain numbers and letters"
                  pattern="^[a-zA-Z1-9]{5,20}$"
                  className="field b-5"
                  type="text"
                  placeholder="Enter username"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
                <br />
                <br />

                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  pattern="^[a-zA-Z1-9_*-]{8,20}$"
                  title="Cannot be shorter than 8 and longer then 20 Characters. Letters, numbers, only special characters '_' '*' '-' allowed"
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
                  pattern="^[a-zA-Z1-9_*-]{8,20}$"
                  title="Cannot be shorter than 8 and longer then 20 Characters. Letters, numbers, only special characters _ * - allowed"
                  placeholder="Confirm password"
                  value={this.props.confirmPassword}
                  onChange={this.props.onChangeConfirmPassword} 
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
                  title="Cannot be longer then 20 characters, ' and - allowed"
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
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="row">
                  <div className="col-sm">
                    <label>Apartment/House #:</label>
                    <input
                      className="field b-5"
                      type="text"
                      placeholder="Apartment/suit/unit/house #"
                      value={this.props.appt}
                      onChange={this.props.onChangeAppt}
                      required
                    />
                  </div>
                  <div className="col-sm">
                    <label>Buiding #:</label>
                    <input
                      className="field b-5"
                      type="text"
                      placeholder="Building #"
                      value={this.props.building}
                      onChange={this.props.onChangeBuilding}
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-sm">
                    <label>Street/Avenue:</label>
                    <input
                      className="field b-5"
                      type="text"
                      min="1"
                      max="20"
                      placeholder="Enter your street/avenue"
                      value={this.props.street}
                      onChange={this.props.onChangeStreet}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm">
                <div className="col-sm">
                  <div className="row">
                    <div className="col-sm">
                      <label>Postal Code:</label>
                      <input
                        className="field b-5"
                        type="text"
                        placeholder="Format: A1A1A1"
                        pattern="^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$"
                        value={this.props.postcode}
                        onChange={this.props.onChangePostcode}
                        required
                      />
                    </div>

                    <div className="col-sm">
                      <label>Province:</label>
                      <input
                        className="field b-5"
                        type="text"
                        placeholder="Enter your province"
                        value={this.props.province}
                        onChange={this.props.onChangeProvince}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm">
                      <label>City:</label>
                      <input
                        className="field b-5"
                        type="text"
                        max="20"
                        placeholder="Enter your city"
                        value={this.props.city}
                        onChange={this.props.onChangeCity}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div>
              <button
                className="btn mr-3 mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1D3461",
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}
              >
                Create User
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;
