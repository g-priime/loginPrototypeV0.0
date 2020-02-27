import React from "react";
import { Collapse } from "react-collapse";
import "../css/reg.css";
import "../css/userAccount.css";

class UserAccount extends React.Component {
  state = {
    username: "",
    password: "",
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
    emergencyname: "",

    dogname: "",
    breed: "",
    dob: "",
    gender: "",
    weight: "",
    neuteredspayed: "",
    medication: "",
    allergies: "",
    physlimit: "",
    veterinarian: "",
    strangers: "",
    largerdogs: "",
    smalldogs: "",
    puppies: "",
    da2pp: "",
    rabies: "",
    bordetella: ""
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(
      this.state.username,
      this.state.password,
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
      this.state.emergencyname,

      this.state.dogname,
      this.state.breed,
      this.state.dob,
      this.state.gender,
      this.state.weight,
      this.state.neuteredspayed,
      this.state.medication,
      this.state.allergies,
      this.state.physlimit,
      this.state.veterinarian,

      this.state.strangers,
      this.state.largerdogs,
      this.state.smalldogs,
      this.state.puppies,
      this.state.da2pp,
      this.state.rabies,
      this.state.bordetella
    );
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <div>
              <h1>Customer Name goes here</h1>
            </div>
            <br />
            <div className="left">
              <div className="row">
                <div className="col-sm">
                  <b>Username: </b>
                </div>
                <div className="col-sm">usernamegoeshere</div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Email: </b>
                </div>
                <div className="col-sm">emailgoeshere</div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Address: </b>
                </div>
                <div className="col-sm">addressgoeshere</div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Phone: </b>
                </div>
                <div className="col-sm">phonegoeshere</div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-sm">
                  <b>Emergency name: </b>
                </div>
                <div className="col-sm">emergencynamegoesh</div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Emergency phone #: </b>
                </div>
                <div className="col-sm">12345678912</div>
              </div>
            </div>
            <br />
            <br />
            <button
              className="btn "
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
              }}
            >
              Edit customer information
            </button>
            <br />
            <br />
            <button
              className="btn "
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
              }}
            >
              Change password
            </button>
          </div>
        </div>
        <div className="col-sm-8">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <div className="row">
              <div className="col-sm">
                <h1>Your dogs: </h1>
              </div>
              <div className="col-sm">
                <button
                  className="btn "
                  style={{
                    fontWeight: "bold",
                    backgroundColor: "#1D3461",
                    color: "#ECEBE7",
                    boxShadow:
                      "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                  }}
                >
                  Add new dog
                </button>
              </div>
            </div>
            <br />
            <br />
            <div>



            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserAccount;
