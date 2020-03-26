import React from "react";
import "../../css/bookAppointment.css";
import { Link } from "react-router-dom";

import Select from "react-select";

class EditDaycare1 extends React.Component {
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
            <h1>Book Daycare</h1>

            <div className="row">
              <div className="col-sm">

                <br/>
                
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

export default EditDaycare1;
