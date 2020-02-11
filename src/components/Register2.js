import React from "react";
import "./reg.css";
import { Link } from 'react-router-dom';

class Register2 extends React.Component {
  state = {
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

  previousStep_onClick = event => {
    event.preventDefault();
    
    this.props.onClick(

    );
    console.log("here");
  }

  render() {
    return (
      <div className="ui segment " style={{ backgroundColor: "#ECEBE7" }}>
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container">
            <h1>Registration Page</h1>
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
                      value={this.state.appt}
                      onChange={e => this.setState({ appt: e.target.value })}
                      required
                    />
                  </div>
                  <div className="col-sm">
                    <label>Buiding #:</label>
                    <input
                      className="field b-5"
                      type="text"
                      placeholder="Building #"
                      value={this.state.building}
                      onChange={e =>
                        this.setState({ building: e.target.value })
                      }
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
                      placeholder="Enter your street/avenue"
                      value={this.state.street}
                      onChange={e => this.setState({ street: e.target.value })}
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
                        placeholder="Enter your postal code"
                        value={this.state.postcode}
                        onChange={e =>
                          this.setState({ postcode: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div className="col-sm">
                      <label>Province:</label>
                      <input
                        className="field b-5"
                        type="text"
                        placeholder="Enter your province"
                        value={this.state.province}
                        onChange={e =>
                          this.setState({ province: e.target.value })
                        }
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
                        placeholder="Enter your city"
                        value={this.state.city}
                        onChange={e => this.setState({ city: e.target.value })}
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
              <div className="row">
                <div className="col-sm">
                  <label>Personal Phone:</label>
                  <input
                    className="field b-5"
                    type="text"
                    placeholder="Enter your phone number"
                    value={this.state.phone}
                    onChange={e => this.setState({ phone: e.target.value })}
                    required
                  />
                </div>
                <br />

                <div className="col-sm">
                  <label>Emergency Contact Phone:</label>
                  <input
                    className="field b-5"
                    type="text"
                    placeholder="Enter your emergency contact phone number"
                    value={this.state.emergencyphone}
                    onChange={e =>
                      this.setState({ emergencyphone: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="col-sm">
                  <label>Emergency Contact Name:</label>
                  <input
                    className="field b-5"
                    type="text"
                    placeholder="Enter your emergency contact Name"
                    value={this.state.emergencyname}
                    onChange={e =>
                      this.setState({ emergencyname: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between">
            <button
              type="button"
              onClick={this.previousStep_onClick}
              className="btn ml-3 mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
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
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
              }}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register2;
