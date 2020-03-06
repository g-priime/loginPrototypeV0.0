import React from "react";
import "../../css/addDog.css";
import "../../css/reg.css";
import { Link } from "react-router-dom";
import { ReactComponent as Hint } from "../hint.svg";
import AddDog2 from "./AddDog2";
import BasePath from "../../api/BasePath";

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

class AddDog1 extends React.Component {
  state = {
    selectedFile: null,
    dogname: "",
    breed: "",
    dob: "",
    gender: "",
    weight: "",
    neuteredspayed: "",
    medication: "",
    allergies: "",
    physlimit: "",
    veterinarian: ""
  };

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
    const formData = new FormData();
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
     BasePath.post('my-domain.com/file-upload', formData) //path??????

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
      this.state.veterinaria
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
            <h1>Add Dog</h1>
            <h2>Step 1</h2>

            <div className="row">
              <div className="col-sm">
                <h2>General</h2>
                <label>Name:</label>
                <input
                  pattern="^[a-zA-Z1-9]{1,20}$"
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
                  pattern="^[a-zA-Z1-9]{1,20}$"
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
                  inputlabelprops={{
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
                    // checked={this.props.gender === "Male"}
                    // onChange={this.props.onChangeGender}
                    onChange={this.props.onChangeGender}
                  />
                  <span>Male</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    // checked={this.props.gender === "Female"}
                    // onChange={this.props.onChangeGender}
                    onChange={this.props.onChangeGender}
                  />
                  <span>Female</span>
                </label>
                <br />
                <br />
                <label>Weight (kg):</label>
                <input
                  type="number"
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
                    value="yes"
                    // checked={this.props.neuteredspayed === "yes"}
                    onChange={this.props.onChangeNeuteredspayed}
                  />
                  <span>Yes</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="neuteredspayed"
                    value="no"
                    // checked={this.props.neuteredspayed === "no"}
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
                  value={this.props.veterinarian}
                  onChange={this.props.onChangeVeterinarian}
                />
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <input type="file" onChange={this.fileChangedHandler} />

              <button //button to upload the picture
                onClick={this.uploadHandler}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1D3461",
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}
              >
                Upload picture
              </button>
            </div>
            <br />
            <br />
          </div>
          <div className="d-flex justify-content-between">
            <Link //creates a link, styled like a button
              to="/UserAccount" //telling to go to home, in adddog it should be accinfo
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
            <button //creates a link, styled like a button
              //to="/AddDog2" //telling to go to home, in adddog it should be accinfo
              //type="button"
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

export default AddDog1;
