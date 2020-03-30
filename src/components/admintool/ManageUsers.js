import React from "react";
import PopUpConfirm from "../PopUpConfirm";
import BasePath from "../../api/BasePath";

class ManageUsers extends React.Component {
  state = {
    userList: [],
    user: {}
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "#212529" }}>Manage users</h1>
        <div className="row">
          <div className="col-sm-5">
            <div
              className="ui segment p-3 mb-2 "
              style={{ backgroundColor: "#ECEBE7" }}
            >
              <div>
                <div>
                  <h3>User List</h3>
                </div>
                {this.state.userList.map(user => (
                  <li
                    key={user.username}
                    chosenUsr={user}
                    updateList={this.updateList}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-7">
            <div
              className="ui segment p-3 mb-2 "
              style={{ backgroundColor: "#ECEBE7" }}
            >
              <div>
                <h3>Edit user</h3>
                <form
                  onSubmit={this.onFormSubmit}
                  className="ui form"
                  style={{ backgroundColor: "#ECEBE7 " }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-sm ">
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
                      </div>
                      <div className="col-sm ">
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
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-sm ">
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
                    
                    <div className="d-flex justify-content-between"></div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm">
                        <div className="row">
                          <div className="col-sm">
                            <label>Appt/House #:</label>
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
                              required
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
                    <br />
                    <div>
                      {/* <h2>Phone number information</h2> */}
                      <div className="row pr-3">
                        <div className="col-sm">
                          <label>Personal Phone:</label>
                          <input
                            className="field b-5"
                            type="text"
                            placeholder="Format: 5551235678"
                            pattern="^\d{10}$"
                            value={this.props.phone}
                            onChange={this.props.onChangePhone}
                            required
                          />
                        </div>
                        <br />

                        <div className="col-sm">
                          <label>Emergency Phone:</label>
                          <input
                            className="field b-5"
                            type="text"
                            placeholder="Format: 5551235678"
                            pattern="^\d{10}$"
                            value={this.props.emergencyphone}
                            onChange={this.props.onChangeEmergencyphone}
                            required
                          />
                        </div>
                        <div className="col-sm">
                          <label>Emergency Name:</label>
                          <input
                            className="field b-5"
                            type="text"
                            placeholder="Enter your emergency contact Name"
                            value={this.props.emergencyname}
                            onChange={this.props.onChangeEmergencyname}
                            required
                          />
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
                        Save changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageUsers;
