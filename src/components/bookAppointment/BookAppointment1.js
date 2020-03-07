import React from "react";
import "../../css/changePassword.css";
import { Link } from "react-router-dom";

class BookAppointment1 extends React.Component {
  state = {
    dog: "",
    startTime: "",
    endTime: "",

    dogs: [],
    comments: ""
  };

  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.dog);

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
        className="ui segment contChangestartTime"
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <form
          onSubmit={this.onFormSubmit}
          className="ui form"
          style={{ backgroundColor: "#ECEBE7 " }}
        >
          <div className="container">
            <h1>Book Appointment</h1>

            <div className="row">
              <div className="col-sm">
                <label>Select Dog:</label>
                <select
                  value={this.props.dog}
                  onChange={this.props.onChangeDog}
                >
                  {this.props.dogs.map(doggy => (
                    <option key={doggy} value={doggy}>
                      {doggy}
                    </option>
                  ))}
                </select>
                <br />
                <br />

                <label>Select Start Time:</label>
                <input
                  type="datetime-local"
                  name="startTime"
                  value={this.props.startTime}
                  onChange={this.props.onChangeStartTime}
                  required
                />
                <br />
                <br />

                <label>Select End Time:</label>
                <input
                  type="datetime-local"
                  name="endTime"
                  value={this.props.endTime}
                  onChange={this.props.onChangeEndTime} //how to confirm it?
                  required
                />
                <br />
                <br />

                <label>Add Grooming:</label>

                <label>
                  <input
                    type="radio"
                    name="grooming"
                    value="Yes"
                    //checked={this.props.gender === "Male"}
                    onChange={this.props.onChangeGrooming}
                  />
                  <span>Male</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="grooming"
                    value="No"
                    //checked={this.props.gender === "Female"}
                    onChange={this.props.onChangeGrooming}
                  />
                  <span>Female</span>
                </label>
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
                Back to Home Page
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
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BookAppointment1;
