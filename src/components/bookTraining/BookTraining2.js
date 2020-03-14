import React from "react";
import "../../css/bookAppointment.css";
import { Link } from "react-router-dom";

import Select from "react-select";

class BookTraining2 extends React.Component {
  state = {
    dog: "",
    startTime: "",
    endTime: new Date(),

    dogs: [],
    comments: "",
    grooming: true,
    selectedDogs: [],
    selectedOption: null
  };

  onFormSubmit = event => {
    event.preventDefault();

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
        className="ui segment contChangePassword"
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container bookAppointmentContainer">
            <h1>Book Training</h1>

            <div className="row">
              <div className="col-sm">
                <label>Behaviours:</label>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Barking:</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="Yes"
                          checked={this.props.grooming === "Yes"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="No"
                          checked={this.props.grooming === "No"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Chewing Destruction:</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="Yes"
                          checked={this.props.grooming === "Yes"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="No"
                          checked={this.props.grooming === "No"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Counter Surfing:</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="Yes"
                          checked={this.props.grooming === "Yes"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="No"
                          checked={this.props.grooming === "No"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Digging:</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="Yes"
                          checked={this.props.grooming === "Yes"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="No"
                          checked={this.props.grooming === "No"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Jumping:</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="Yes"
                          checked={this.props.grooming === "Yes"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="No"
                          checked={this.props.grooming === "No"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Pulling on Leash:</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="Yes"
                          checked={this.props.grooming === "Yes"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="No"
                          checked={this.props.grooming === "No"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Building Confidence:</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="Yes"
                          checked={this.props.grooming === "Yes"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="No"
                          checked={this.props.grooming === "No"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Chewing:</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="Yes"
                          checked={this.props.grooming === "Yes"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="grooming"
                          value="No"
                          checked={this.props.grooming === "No"}
                          onChange={this.props.onChangeGrooming}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>

                <br />
              </div>
              <br />
              <br />
            </div>
            <br />

            <div className="d-flex justify-content-between">
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
                Cancel
              </Link>
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
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BookTraining2;
