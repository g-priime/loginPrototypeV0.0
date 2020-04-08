import React from "react";
import "../../css/addDog.css";
import "../../css/reg.css";
import { Link } from "react-router-dom";

import { ReactComponent as Hint } from "../hint.svg";
const hint = () => (
  <div>
    {
      <svg width="25" height="25">
        <circle
          cx="11"
          cy="11"
          r="10"
          stroke="gray"
          stroke-width="1"
          fill="gray"
        />
        <text
          x="6"
          y="19"
          font-size="22px "
          fill="white"
          font-weight="bold"
          font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        >
          ?
        </text>
        Sorry, your browser does not support inline SVG.
      </svg>
    }
    <Hint />
  </div>
);

class EditDog1 extends React.Component {
  state = {
    dogname: "",
    breed: "",
    dob: "",
    gender: "",
    weight: "",
    neuteredspayed: "",
    medication: [],
    allergies: "",
    physlimit: "",
    veterinarian: ""
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
      this.state.veterinarian
    );
  };

  render() {
    return (
      <div
        className="ui segment p-3 mb-2 "
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="container">
            <h1>Edit Dog</h1>
            <h2>Step 1</h2>

            <div className="row">
              <div className="col-sm">
                <h2>General</h2>
                <label>Name:</label>
                <input
                  pattern="^[a-zA-Z]{1,30}$"
                  className="field b-5"
                  type="text"
                  placeholder="Enter dog's name"
                  value={this.props.dogname}
                  onChange={this.props.onChangeDogname} //getting passed from editcustomerMain page
                  required
                />
                <br />
                <br />
                <label>Breed:</label>
                <input
                  pattern="^[a-zA-Z ]{1,30}$"
                  type="text"
                  placeholder="Enter breed"
                  value={this.props.breed}
                  onChange={this.props.onChangeBreed}
                  required
                />
                <br />
                <br />
                <label>Date of birth:</label>
                <input
                  required
                  type="date"
                  value={this.props.dob}
                  onChange={this.props.onChangeDob}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <br />
                <br />
                <label>Gender:</label>

                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={this.props.gender === "Male"}
                    onChange={this.props.onChangeGender}
                  />
                  <span>Male</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={this.props.gender === "Female"}
                    onChange={this.props.onChangeGender}
                  />
                  <span>Female</span>
                </label>
                <br />
                <br />
                <label>Weight (Lb):</label>
                <input
                  type="number"
                  max="60"
                  placeholder="Enter dog's weight"
                  value={this.props.weight}
                  onChange={this.props.onChangeWeight}
                />
                <br />
                <br />
                <label>Is your dog neutered or spayed?:</label>

                <label>
                  <input
                    type="radio"
                    name="neuteredspayed"
                    value={true}
                    checked={this.props.neuteredspayed=== "true"}
                    onChange={this.props.onChangeNeuteredspayed}
                  />
                  <span>Yes</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="neuteredspayed"
                    value={false}
                    checked={this.props.neuteredspayed === "false"}
                    onChange={this.props.onChangeNeuteredspayed}
                  />
                  <span>No</span>
                </label>
                <br />
              </div>

              <div className="col-sm">
                <h2>Care</h2>

                <label>Medication: </label>
                <Hint />
                <input
                  type="text"
                  value={this.props.medication}
                  onChange={this.props.onChangeMedication}
                />
                <br />
                <br />
                <label>Allergies: </label>
                <Hint />
                <input
                  type="text"
                  value={this.props.allergies}
                  onChange={this.props.onChangeAllergies}
                />
                <br />
                <br />
                <label>Physical limitations or health problems: </label>
                <Hint />
                <textarea
                  rows="2"
                  value={this.props.physlimit}
                  onChange={this.props.onChangePhyslimit}
                />
                <br />
                <br />
                <label>Who is your veterinarian: </label>
                <Hint />
                <input
                  type="text"
                  value=""
                  value={this.props.veterinarian}
                  onChange={this.props.onChangeVeterinarian}
                />
              </div>
            </div>
            <br />
            <br />
            {/* <div className="row">
              <Link //creates a link, styled like a button
                to="/" //telling to go to home, in adddog it should be accinfo
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
                Upload Picture
              </Link>
            </div> */}
            <br />
            <br />
          </div>
          <div className="d-flex justify-content-between">
            <Link //creates a link, styled like a button
              to="Profile" //telling to go to home, in adddog it should be accinfo
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
              Back to User Account
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
              Go to Step 2
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditDog1;
