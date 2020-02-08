import React from "react";
//import ReactDOM from 'react-dom';
import "./reg.css";

class Register2 extends React.Component {
  state = {
    phone: "",
    appt: "",
    street: "",
    city: "",
    province: "",
    postcode: "",
    emergencyphone: "",
    emergencyname: ""
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(
      this.state.phone,
      this.state.appt,
      this.state.street,
      this.state.city,
      this.state.prvince,
      this.state.postcode,
      this.state.emergencyphone,
      this.state.emergencyname
    );
  };

  render() {
    return (
      <div className="ui segment " style={{ backgroundColor: "#ECEBE7" }}>
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container">
            <div className="row">
              <div className="col-med">
                <h1>Registration Page</h1>

                <h2>Step 2</h2>
              </div>
            </div>
            <div className="row">
              <label><h2>Address:</h2></label>
              <label>Apartment/House</label>
              <input
                className="field b-5"
                type="text"
                placeholder="Enter your apartment or house"
                value={this.state.appt}
                onChange={e => this.setState({ appt: e.target.value })}
              />
              <br />
 
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-between">
            <button
              className="btn ml-3 mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
              }}
            >
              Back to Home Page
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
              Next Step
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register2;
