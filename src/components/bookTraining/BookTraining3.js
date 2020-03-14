import React from "react";
import "../../css/bookAppointment.css";
import { Link } from "react-router-dom";
import Moment from "moment";

class BookTraining3 extends React.Component {
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
                      <td>Additional Comments:</td>
                      <td>{this.props.comments}</td>
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
                      <td>{this.props.barking}</td>
                    </tr>
                    <tr>
                      <td>Chewing Destruction:</td>
                      <td>{this.props.destruction}</td>
                    </tr>
                    <tr>
                      <td>Counter Surfing:</td>
                      <td>{this.props.surfing}</td>
                    </tr>
                    <tr>
                      <td>Digging:</td>
                      <td>{this.props.digging}</td>
                    </tr>
                    <tr>
                      <td>Jumping:</td>
                      <td>{this.props.jumping}</td>
                    </tr>
                    <tr>
                      <td>Pulling on Leash:</td>
                      <td>{this.props.pulling}</td>
                    </tr>
                    <tr>
                      <td>Building Confidence:</td>
                      <td>{this.props.confidence}</td>
                    </tr>
                    <tr>
                      <td>Chewing:</td>
                      <td>{this.props.chewing}</td>
                    </tr>
                    <tr>
                      <td>Handling:</td>
                      <td>{this.props.handling}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-sm">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>House Training:</td>
                      <td>{this.props.houseTraining}</td>
                    </tr>
                    <tr>
                      <td>Mouthing:</td>
                      <td>{this.props.mouthing}</td>
                    </tr>
                    <tr>
                      <td>Socialization:</td>
                      <td>{this.props.socialization}</td>
                    </tr>
                    <tr>
                      <td>Children and Dogs:</td>
                      <td>{this.props.children}</td>
                    </tr>
                    <tr>
                      <td>Distraction Strategies:</td>
                      <td>{this.props.distraction}</td>
                    </tr>
                    <tr>
                      <td>Exercise:</td>
                      <td>{this.props.exercise}</td>
                    </tr>
                    <tr>
                      <td>Focus Strategies:</td>
                      <td>{this.props.focus}</td>
                    </tr>
                    <tr>
                      <td>Loose Leash Walking:</td>
                      <td>{this.props.walking}</td>
                    </tr>
                    <tr>
                      <td>Mat Work:</td>
                      <td>{this.props.matWork}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-sm">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>New Baby:</td>
                      <td>{this.props.baby}</td>
                    </tr>
                    <tr>
                      <td>New Cat:</td>
                      <td>{this.props.cat}</td>
                    </tr>
                    <tr>
                      <td>New Dog:</td>
                      <td>{this.props.newDog}</td>
                    </tr>
                    <tr>
                      <td>New Home:</td>
                      <td>{this.props.home}</td>
                    </tr>
                    <tr>
                      <td>New Significant Other:</td>
                      <td>{this.props.significantOther}</td>
                    </tr>
                    <tr>
                      <td>Stealing Items Chase Game:</td>
                      <td>{this.props.stealing}</td>
                    </tr>
                    <tr>
                      <td>Additional Household Members:</td>
                      <td>{this.props.members}</td>
                    </tr>
                    <tr>
                      <td>Play:</td>
                      <td>{this.props.play}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bookAppointmentFooter">
              <div className="row" style={{ marginTop: "5%" }}>
                <div className="col-sm">
                  <button
                    type="button"
                    onClick={this.props.toPage2}
                    className="btn mb-3"
                    style={{
                      marginRight: "3%",
                      marginLeft: "-30%",
                      fontWeight: "bold",
                      backgroundColor: "#1D3461",
                      color: "#ECEBE7",
                      boxShadow:
                        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                    }}
                  >
                    Previous Step
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

                <div className="col-xs"></div>

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
                      marginLeft: "3%",
                      marginRight: "-30%",
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

export default BookTraining3;
