import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class BookAppointment extends React.Component {
  render() {
    return (
      <div
        className="ui segment contBookAppointmentOptions"
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container bookAppointmentOptionsContainer">
            <h1>Book Appointment</h1>

            <div className="d-flex justify-content-between">
              <Link
                to="/ViewAppointments"
                type="button"
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1D3461",
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
              >
                Cancel
              </Link>
              <Link
                to={{
                    pathname: "/BookBoarding",
                    state: { cancelLink: "/ViewAppointments" }
                  }}
                type="button"
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1D3461",
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
              >
                Book Boarding
              </Link>
              <Link
                to={{
                    pathname: "/BookTraining",
                    state: { cancelLink: "/ViewAppointments" }
                  }}
                type="button"
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1D3461",
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
              >
                Book Training
              </Link>
              <Link
                to={{
                    pathname: "/BookDaycare",
                    state: { cancelLink: "/ViewAppointments" }
                  }}
                type="button"
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1D3461",
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                }}
              >
                Book Daycare
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BookAppointment;
