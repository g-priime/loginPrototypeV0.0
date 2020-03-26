import React from "react";
import "../../css/bookAppointment.css";
import { Link } from "react-router-dom";

import Select from "react-select";

class EditTraining1 extends React.Component {
  state = {
    dog: "",
    startTime: "",
    endTime: new Date(),

    dogs: [],
    comments: "",
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
      this.state.comments,

      this.state.baby
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

            <div className="row" style={{ marginTop: "6%" }}>
              <div className="col-sm" style={{ marginLeft: "10%", marginRight: "5%" }}>
                <label>Select Dog:</label>

                <Select
                  //isMulti
                  closeMenuOnSelect={true}
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
                <label>Select other interactions for dog:</label>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>New Baby:</td>
                      <td>
                        <input
                          type="radio"
                          name="baby"
                          value="Yes"
                          defaultChecked={this.props.baby === "Yes"}
                          onChange={this.props.onChangeBaby}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="baby"
                          value="No"
                          defaultChecked={this.props.baby === "No"}
                          onChange={this.props.onChangeBaby}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>New Cat:</td>
                      <td>
                        <input
                          type="radio"
                          name="cat"
                          value="Yes"
                          defaultChecked={this.props.cat === "Yes"}
                          onChange={this.props.onChangeCat}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="cat"
                          value="No"
                          defaultChecked={this.props.cat === "No"}
                          onChange={this.props.onChangeCat}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>New Dog:</td>
                      <td>
                        <input
                          type="radio"
                          name="newDog"
                          value="Yes"
                          defaultChecked={this.props.newDog === "Yes"}
                          onChange={this.props.onChangeNewDog}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="newDog"
                          value="No"
                          defaultChecked={this.props.newDog === "No"}
                          onChange={this.props.onChangeNewDog}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>New Significant Other:</td>
                      <td>
                        <input
                          type="radio"
                          name="significantOther"
                          value="Yes"
                          defaultChecked={this.props.significantOther === "Yes"}
                          onChange={this.props.onChangeSignificantOther}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="significantOther"
                          value="No"
                          defaultChecked={this.props.significantOther === "No"}
                          onChange={this.props.onChangeSignificantOther}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Additional Household Members:</td>
                      <td>
                        <input
                          type="radio"
                          name="members"
                          value="Yes"
                          defaultChecked={this.props.members === "Yes"}
                          onChange={this.props.onChangeMembers}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="members"
                          value="No"
                          defaultChecked={this.props.members === "No"}
                          onChange={this.props.onChangeMembers}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Children and Dogs:</td>
                      <td>
                        <input
                          type="radio"
                          name="children"
                          value="Yes"
                          defaultChecked={this.props.children === "Yes"}
                          onChange={this.props.onChangeChildren}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="children"
                          value="No"
                          defaultChecked={this.props.children === "No"}
                          onChange={this.props.onChangeChildren}
                        />
                      </td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>New Home:</td>
                      <td>
                        <input
                          type="radio"
                          name="home"
                          value="Yes"
                          defaultChecked={this.props.home === "Yes"}
                          onChange={this.props.onChangeHome}
                        />
                      </td>
                      <td>Yes</td>
                      <td>
                        <input
                          type="radio"
                          name="home"
                          value="No"
                          defaultChecked={this.props.home === "No"}
                          onChange={this.props.onChangeHome}
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
                  marginTop: "4.5%",
                  marginLeft: "0.5%",
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
                  marginTop: "4.5%",
                  marginRight: "0.5%",
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

export default EditTraining1;
