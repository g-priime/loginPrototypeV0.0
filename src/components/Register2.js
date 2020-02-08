import React from "react";
//import ReactDOM from 'react-dom';
import "./reg.css";

//const Hint = () => <img src="./hint.svg" alt="" />; // don't know if we need that

import { ReactSVG } from 'react-svg'

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
            
              <div className="col-med">
                <h1>Registration Page</h1>

                <h2>Step 2</h2>
                
              </div>

             
              <h2>Address:</h2>
            

            <div className="row">
              
               
              
              <label>Apartment/House:</label>
              <input
                className="field b-5"
                type="text"
                placeholder="Enter your apartment/house"
                value={this.state.appt}
                onChange={e => this.setState({ appt: e.target.value })}
              />
              <br />
              <label>Street/Avenue:</label>
              <input
                className="field b-5"
                type="text"
                placeholder="Enter your street/avenue"
                value={this.state.street}
                onChange={e => this.setState({ street: e.target.value })}
              />
              <br />
              <label>City:</label>
              <input
                className="field b-5"
                type="text"
                placeholder="Enter your city"
                value={this.state.city}
                onChange={e => this.setState({ city: e.target.value })}
              />
              <br />
              <label>Postal Code:</label>
              <input
                className="field b-5"
                type="text"
                placeholder="Enter your postal code"
                value={this.state.postcode}
                onChange={e => this.setState({ postcode: e.target.value })}
              />
              <br />
              <label>Province:</label> 
              <input
                className="field b-5"
                type="text"
                placeholder="Enter your province"
                value={this.state.province}
                onChange={e => this.setState({ province: e.target.value })}
              />
              <br />
              <label>Phone number information</label>
              <br />
              <label>Personal Phone:</label> 
              <input
                className="field b-5"
                type="text"
                placeholder="Enter your phone number"
                value={this.state.phone}
                onChange={e => this.setState({ phone: e.target.value })}
              />
              <br />
              <label>Emergency Contact</label>
              <br />
              <label>Emergency Phone number:</label> 
              <input
                className="field b-5"
                type="text"
                placeholder="Enter your emergency contact phone number"
                value={this.state.emergencyphone}
                onChange={e => this.setState({ emergencyphone: e.target.value })}
              />
              <br />
              <label>Emergency Name:</label> 
              <input
                className="field b-5"
                type="text"
                placeholder="Enter your emergency contact Name"
                value={this.state.emergencyname}
                onChange={e => this.setState({ emergencyname: e.target.value })}
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
              Previours Step
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
