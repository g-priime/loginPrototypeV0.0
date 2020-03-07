import React from "react";

import BasePath from "../../api/BasePath";
import BookAppointment1 from "./BookAppointment1";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";

class BookAppointmentMain extends React.Component {
  state = {
    images: [],
    fieldName: [],
    page: "",
    showPopup: false,
    cn: "",

    dog: "fido",
    dogs: []
  };

  onSearchSubmit1 = async () => {
    this.setState({
      fieldName: [
        this.state.dog,
        this.state.startTime,
        this.state.endTime,
        this.state.sessionId
      ]
    });

    var token = localStorage.getItem('token');

    var dog = this.state.dog;
    var startTime = this.state.startTime;
    var endTime = this.state.endTime;

    console.log(this.state.dog);

    const response = await BasePath.put("/webresources/bookAppointment", {
      token,
      dog,
      startTime,
      endTime,
    });

    console.log(response.data);
    
    this.setState({ images: response.data });

    if (this.state.images === "Old startTime is incorrect") {
      this.setState({ cn: "popup4" });
      this.togglePopup();
    } else if (this.state.images === "New startTimes do not match") {
      this.setState({ cn: "popup5" });
      this.togglePopup();
    }
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChangeDog = event => {
    this.setState({ dog: event.target.value });
  };

  handleChangeStartTime = event => {
    this.setState({ startTime: event.target.value });
  };

  handleChangeEndTime = event => {
    this.setState({ endTime: event.target.value });
  };

  render() {
    var isValid = this.state.images;

    if (isValid === "Valid") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/",
              state: { message: "Appointment has been added" }
            }}
          />
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "10px" }}>
          <BookAppointment1
            onChangeDog={this.handleChangeDog}
            onChangeStartTime={this.handleChangeStartTime}
            onChangeEndTime={this.handleChangeEndTime}
            onSubmit={this.onSearchSubmit1}
          />
          <div>
            {this.state.showPopup ? (
              <Popup
                cn={this.state.cn}
                text={this.state.images}
                closePopup={this.togglePopup.bind(this)}
                bgColor="red"
              />
            ) : null}
          </div>
        </div>
      );
    } 
  }
}

export default BookAppointmentMain;
