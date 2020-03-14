import React from "react";
import "../../css/bookAppointment.css";
import { Link } from "react-router-dom";

import Select from "react-select";

class BookTraining1 extends React.Component {
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
        className="ui segment contBookTraining"
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container bookAppointmentContainer">
            <h1>Book Training: Step 1</h1>

            <div className="row">
              <div className="col-sm" style={{ marginLeft: "10%", marginRight: "5%" }}>
                <label>Select Dogs:</label>

                <Select
                  isMulti
                  closeMenuOnSelect={false}
                  value={this.props.selectedDogs}
                  onChange={this.props.onChangeDog}
                  options={this.props.dogs}
                  getOptionLabel={option => option.value}
                  getOptionValue={option => option.value}
                  getOptionKey={option => option.key}
                />
                <br />

                <label>Select Start Time:</label>
                <input
                  type="datetime-local"
                  name="startTime"
                  defaultValue={this.props.startTime}
                  onChange={this.props.onChangeStartTime}
                  required
                />
                <br />
                <br />

                <label>Select End Time:</label>
                <input
                  type="datetime-local"
                  name="endTime"
                  defaultValue={this.props.endTime}
                  onChange={this.props.onChangeEndTime}
                  required
                />
                <br />
                <br />

                <label>Additional Comments: </label>
                <textarea
                  rows="2"
                  name="comments"
                  value={this.props.comments}
                  onChange={this.props.onChangeComments}
                />
              </div>

              <div className="col-sm" style={{ marginLeft: "5%", marginRight: "10%" }}>
                <label>Select others interacting with dog:</label>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>New Baby:</td>
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
                      <td>New Cat:</td>
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
                      <td>New Dog:</td>
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
                      <td>New Significant Other:</td>
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
                      <td>Additional Household Members:</td>
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
                      <td>Children and Dogs:</td>
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
                      <td>New Home:</td>
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
              </div>

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

export default BookTraining1;
