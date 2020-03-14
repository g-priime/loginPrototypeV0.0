import React from "react";
import "../../css/bookAppointment.css";
import { Link } from "react-router-dom";
import Moment from "moment";

class BookTraining4 extends React.Component {
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
        className="ui segment contBookTraining"
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container bookAppointmentContainer">
            <h1>Appointment Details</h1>

            <br />
            <br />
            <div className="row">
              <div className="col-sm">
                <table className="table table-borderless table-dark">
                  <tbody>
                    <tr>
                      <td>Dog:</td>
                      <td>Fido</td>
                    </tr>

                    <tr>
                      <td>Start Time:</td>
                      <td>March 13, 2020 11:00am</td>
                    </tr>

                    <tr>
                      <td>End Time:</td>
                      <td>March 13, 2020 1:00pm</td>
                    </tr>

                    <tr>
                      <td>Additional Comments:</td>
                      <td>none</td>
                    </tr>

                    <tr>
                      <td>Cost:</td>
                      <td>${this.props.cost}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-sm">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Barking:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Chewing Destruction:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Counter Surfing:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Digging:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Jumping:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Pulling on Leash:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Building Confidence:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Chewing:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Handling:</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-sm">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>House Training:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Mouthing:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Socialization:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Children and Dogs:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Distraction Strategies:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Exercise:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Focus Strategies:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Loose Leash Walking:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Mat Work:</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-sm">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>New Baby:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>New Cat:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>New Dog:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>New Home:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>New Significant Other:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Stealing Items Chase Game:</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Additional Household Members:</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bookAppointmentFooter">
              <div className="row">
                <div className="col-sm">
                  <button
                    type="button"
                    onClick={this.props.onClick}
                    className="btn mb-3"
                    style={{
                      marginRight: "5%",
                      fontWeight: "bold",
                      backgroundColor: "#1D3461",
                      color: "#ECEBE7",
                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                    }}
                  >
                    Modify Information
                  </button>
                  <Link
                    to="/Services"
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
                </div>

                <div className="col-sm"></div>

                <div className="col-sm">
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
                  <button
                    className="btn mb-3"
                    style={{
                      marginLeft: "5%",
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

export default BookTraining4;
