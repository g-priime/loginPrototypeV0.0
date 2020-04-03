import React from "react";
import { Link, Redirect } from "react-router-dom";
import BasePath from "../../api/BasePath";

//This class is not being used anymore
class DeleteAppointment extends React.Component {
  constructor() {
    super(...arguments);

    this.appointment = [];
    this.initialState = false;
  }

  state = {
    deleted: false,
    response: ""
  };

  deleteAppointment = async () => {
    console.log(this.appointment.idNumber);
    let token = localStorage.getItem("token");
    let idNumber = this.appointment.idNumber;

    const response = await BasePath.put("/webresources/deleteAppointment", {
      token,
      idNumber
    });
    console.log(response);
    this.setState({ response: response.data });
  };

  getAppointmentInfo = () => {
    console.log(this.initialState);
    if (
      this.initialState === false &&
      this.props.location.state !== undefined
    ) {
      this.appointment = this.props.location.state.appointment;
      console.log(this.appointment);
      this.initialState = true;
    }
  };

  render() {
    if (!this.initialState) {
      this.getAppointmentInfo();
    }

    let response = this.state.response;
    if (response === "Deleted") {
      return (
        <div>
          <Redirect
            to={{
              pathname: "ViewAppointments",
              state: { message: "Appointment deleted" }
            }}
          />
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "10px" }}>
          <div
            className="ui segment contChangePassword"
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <form
              //onSubmit={this.deleteAppointment}
              className="ui form"
              style={{ backgroundColor: "#ECEBE7 " }}
            >
              <div className="container bookAppointmentContainer">
                <h1>Delete Appointment</h1>

                <h2>
                  Are you sure you want to delete your {this.appointment.type}{" "}
                  appointment?
                </h2>

                <div className="d-flex justify-content-between">
                  <Link
                    to="ViewAppointments"
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
                    Cancel
                  </Link>
                  <button
                    onClick={this.deleteAppointment}
                    //type="submit"
                    className="btn mb-3"
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "#1D3461",
                      color: "#ECEBE7",
                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default DeleteAppointment;
