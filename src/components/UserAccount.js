import React from "react";
import "../css/reg.css";
import "../css/userAccount.css";

class UserAccount extends React.Component {
  state = {
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
        <div className="col-sm">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          >
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
            <br /><br />
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
        <div className="col-sm">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default UserAccount;
