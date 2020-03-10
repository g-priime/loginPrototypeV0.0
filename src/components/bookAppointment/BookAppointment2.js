import React from "react";
import "../../css/bookAppointment.css";
import { Link } from "react-router-dom";

class BookAppointment2 extends React.Component {
  state = {
    dog: "",
    startTime: "",
    endTime: "",

    dogs: [],
    comments: "",
    selectedDogs: []
  };

  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.dog);

    this.props.onSubmit(
      this.state.selectedDogs,
      this.state.startTime,
      this.state.endTime,
      this.state.grooming,
      this.state.comments
    );
  };

  render() {
    return (
      <div
        className="ui segment contChangePassword"
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

                {this.props.selectedDogs.map(doggy => (
                    doggy.value
                  ))}
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
                {this.props.cost}
              </div>
              <br />
              <br />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="row">
              <div className="col-sm">
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
                    onClick={this.props.proceedToPayment}
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
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <div className="d-flex justify-content-between">
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
                    Book Now Pay Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BookAppointment2;
