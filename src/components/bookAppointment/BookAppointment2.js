import React from "react";
import "../../css/changePassword.css";
import { Link } from "react-router-dom";

class BookAppointment2 extends React.Component {
  state = {
    dog: "",
    startTime: "",
    endTime: "",

    dogs: [],
    comments: ""
  };

  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.dog);

    this.props.onSubmit(
      this.state.dog,
      this.state.startTime,
      this.state.endTime,
      this.state.grooming,
      this.state.comments
    );
  };

  render() {
    return (
      <div
        className="ui segment contChangestartTime"
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container">
            <h1>Appointment Details</h1>

            <div className="row">
              <div className="col-sm">
                <label>Dog:</label>
                {this.props.dog}
                <br />
                <br />

                <label>Start Time:</label>
                {this.props.startTime}
                <br />
                <br />

                <label>End Time:</label>
                {this.props.endTime}
                <br />
                <br />

                <label>Grooming Added:</label>
                {this.props.grooming}
                <br />
                <br />

                <label>Additional Comments:</label>
                {this.props.comments}
                <br />
                <br />

                <label>Cost:</label>
                $1,000,000,000.00
              </div>
              <br />
              <br />
            </div>
            <br />

            <div className="d-flex justify-content-between">
              <Link
                to="/"
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
                Cancel Appointment
              </Link>
              <button
                type="button"
                onClick={this.props.onClick}
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1D3461",
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}
              >
                Modify Information
              </button>
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
                Proceed To Payment
              </button>
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
                Book Now Pay Later
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BookAppointment2;
