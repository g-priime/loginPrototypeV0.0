import React from "react";
import "../../css/bookAppointment.css";
import { Link } from "react-router-dom";

import Select from "react-select";

class BookAppointment1 extends React.Component {
  state = {
    dog: "",
    startTime: "",
    endTime: new Date(),

    dogs: [],
    comments: "",
    grooming: true,
    selectedDogs: []
  };

  onFormSubmit = event => {
    event.preventDefault();

    //console.log(this.state.dog);

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
          <div className="container fieldContainer">
            <h1>Book Appointment</h1>

            <div className="row">
              <div className="col-sm">
                <label>Select Dog:</label>
                <Select
                  isMulti
                  closeMenuOnSelect={false}
                  //defaultValue={[1,2,3]}
                  //value={[1,2,3]}
                  //value={this.props.dogs}
                  //onChange={this.props.onChangeDog}
                  //options={[{key:"1",value:"1"},{key:'hi',value:'hi'}]}
                  options={this.props.dogs}
                  getOptionLabel={option => option.value}
                  getOptionValue={option => option.key}
                />
                {/*
                  {this.props.dogs.map(doggy => (
                    <option key={doggy} value={doggy}>
                      {doggy}
                    </option>
                  ))}
                  */}
                <br />

                <label>Select Start Time:</label>
                <input
                  type="datetime-local"
                  name="startTime"
                  //value={this.props.startTime}
                  //selected={this.props.startTime}
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
                  //value={this.props.endTime}
                  //selected={this.props.endTime}
                  defaultValue={this.props.endTime}
                  onChange={this.props.onChangeEndTime}
                  required
                />
                <br />
                <br />

                <div className="row">
                  <div className="col-sm">
                    <label>Add Grooming:</label>
                  </div>

                  <div className="col-sm">
                    <label>
                      <input
                        type="radio"
                        name="grooming"
                        value="Yes"
                        checked={this.props.grooming === "Yes"}
                        onChange={this.props.onChangeGrooming}
                      />
                      <span>Yes</span>
                    </label>
                  </div>
                  <div className="col-sm">
                    <label>
                      <input
                        type="radio"
                        name="grooming"
                        value="No"
                        checked={this.props.grooming === "No"}
                        onChange={this.props.onChangeGrooming}
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
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

export default BookAppointment1;
