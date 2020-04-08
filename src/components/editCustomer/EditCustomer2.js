import React from "react";
import "../../css/reg.css";
import Select from "react-select";

class EditCustomer2 extends React.Component {
  state = {
    appt: "",
    building: "",
    street: "",
    city: "",
    province: "",
    postcode: "",
    phone: "",
    emergencyphone: "",
    emergencyname: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(
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

  previousStep_onClick = (event) => {
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
            <h2>Step 2</h2>
            {/* <h2>Address</h2> */}
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
                      <Select
                        closeMenuOnSelect={true}
                        value={this.props.province}
                        onChange={this.props.onChangeProvince}
                        options={this.props.provinces}
                        getOptionLabel={(option) => option.value}
                        getOptionValue={(option) => option.value}
                        getOptionKey={(option) => option.key}
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
                  <label>Emergency Contact Phone:</label>
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
                  <label>Emergency Contact Name:</label>
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
            <div className="d-flex justify-content-between">
              <button
                type="button"
                onClick={this.previousStep_onClick}
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1D3461",
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
              >
                Previous Step
              </button>
              <button
                className="btn mr-3 mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1D3461",
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
              >
                Update Information
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditCustomer2;
