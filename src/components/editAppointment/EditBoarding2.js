import React from "react";
import "../../css/bookAppointment.css";
import { Link } from "react-router-dom";
import Moment from "moment";

class EditBoarding2 extends React.Component {
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
          <div className="container bookAppointmentContainer">
            <h1>Appointment Details</h1>

            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>Dogs:</td>
                  <td>
                    {this.props.selectedDogs.map(doggy => (
                      <div key={doggy.key.toString()}>{doggy.value}</div>
                    ))}
                  </td>
                </tr>

                <tr>
                  <td>Start Time:</td>
                  <td>{Moment(this.props.startTime).format("MMMM Do YYYY, h:mm a")}</td>
                </tr>

                <tr>
                  <td>End Time:</td>
                  <td>{Moment(this.props.endTime).format("MMMM Do YYYY, h:mm a")}</td>
                </tr>

                <tr>
                  <td>Grooming Added:</td>
                  <td>{this.props.grooming}</td>
                </tr>

                <tr>
                  <td>Additional Comments:</td>
                  <td>{this.props.comments}</td>
                </tr>

                <tr>
                  <td>Cost:</td>
                  <td>${this.props.cost}</td>
                </tr>
              </tbody>
            </table>

            <div className="bookAppointmentFooter">
              <div className="row">
                <div className="col-sm">
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
          </div>
        </form>
      </div>
    );
  }
}

export default EditBoarding2;
