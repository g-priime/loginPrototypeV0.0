import React from "react";

import BasePath from "../../api/BasePath";
import BookAppointment1 from "./BookAppointment1";
import BookAppointment2 from "./BookAppointment2";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";

import Moment from "moment";

class BookAppointmentMain extends React.Component {
  state = {
    response: "",
    fieldName: [],
    page: "",
    showPopup: false,
    cn: "",

    dog: "",
    selectedDogs: [],
    dogs: [],
    initialStates: false,
    cost: "",
    grooming: "No"
  };

  getDogs = async () => {
    var token = localStorage.getItem("token");
    const response = await BasePath.get(`/webresources/RetrieveDogs/${token}`);

    const dogs = response.data;
    var dogArray = [];
    dogs.map(doggy =>
      dogArray.push({ key: doggy.idNumber, value: doggy.name })
    );

    if (!this.state.initialStates) {
      this.setState({ dogs: dogArray, initialStates: true, selectedDogs: [] });
    }
  };

  onSearchSubmit1 = async () => {
    this.setState({
      fieldName: [
        this.state.selectedDogs,
        this.state.startTime,
        this.state.endTime,
        this.state.grooming,
        this.state.comments,
        this.state.sessionId
      ]
    });

    var token = localStorage.getItem("token");
    var dogs = [];
    this.state.selectedDogs.map(doggy => dogs.push(doggy.key));
    var dogString = dogs.toString();
    var startTime = this.state.startTime;
    var formattedStart = Moment(startTime).format("YYYY-MM-DD hh:mm:ss");
    var endTime = this.state.endTime;
    var formattedEnd = Moment(endTime).format("YYYY-MM-DD hh:mm:ss");
    
    var grooming = "false";
    if (this.state.grooming === "Yes") {
      grooming = "true";
    }
    var type = "boarding";

    console.log(this.state.dog);

    const response = await BasePath.put("/webresources/calculatecost2", {
      token,
      dogString,
      formattedStart,
      formattedEnd,
      grooming,
      type
    });

    console.log(response);
    this.setState({ response: response.data.message, cost: response.data.total });

    if (this.state.response === "Old startTime is incorrect") {
      this.setState({ cn: "popup4" });
      this.togglePopup();
    } else if (this.state.response === "New startTimes do not match") {
      this.setState({ cn: "popup5" });
      this.togglePopup();
    }
  };

  onSearchSubmit2 = async () => {
    var token = localStorage.getItem("token");

    var selectedDogs = [];
    this.state.fieldName[0].map(doggy => selectedDogs.push(doggy.key));
    var dogid = selectedDogs.toString();
    var startTime = Moment(this.state.fieldName[1]).format("YYYY-MM-DD hh:mm:ss");
    var endTime = Moment(this.state.fieldName[2]).format("YYYY-MM-DD hh:mm:ss");
    var grooming = "false";
    if (this.state.fieldName[3] === "Yes") {
      grooming = "true";
    }
    var additionalComments = this.state.fieldName[4];
    var total = this.state.cost;

    const response = await BasePath.put("/webresources/bookboarding", {
      token,
      dogid,
      startTime,
      endTime,
      total,
      additionalComments,
      grooming
    });

    this.setState({ response: response.data });

    if (this.state.response === "Old startTime is incorrect") {
      this.setState({ cn: "popup4" });
      this.togglePopup();
    } else if (this.state.response === "New startTimes do not match") {
      this.setState({ cn: "popup5" });
      this.togglePopup();
    }
  };

  onPrevious = () => {
    this.setState({ response: "" });
  };

  proceedToPayment = () => {
    this.setState({ response: "Payment" });
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChangeDog = selectedOption => {
    this.setState({ selectedDogs: selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedDogs)
    );
  };

  handleChangeStartTime = event => {
    this.setState({ startTime: event.target.value });
  };

  handleChangeEndTime = event => {
    this.setState({ endTime: event.target.value });
  };

  handleChangeGrooming = event => {
    this.setState({ grooming: event.target.value });
  };

  handleChangeComments = event => {
    this.setState({ comments: event.target.value });
  };

  render() {
    this.getDogs();

    var isValid = this.state.response;

    if (isValid === "Cost estimate successful") {
      return (
        <div style={{ marginTop: "10px" }}>
          <BookAppointment2
            dog={this.state.dog}
            selectedDogs={this.state.selectedDogs}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            grooming={this.state.grooming}
            comments={this.state.comments}
            cost={this.state.cost}
            onClick={this.onPrevious}
            proceedToPayment={this.proceedToPayment}
            onSubmit={this.onSearchSubmit2}
          />
        </div>
      );
    } else if (isValid === "Successfuly added appointment") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/",
              state: { message: "Appointment is booked pending approval" }
            }}
          />
        </div>
      );
    } else if (isValid === "Payment") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/",
              state: { message: "Redirect to PayPal" }
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
            onChangeGrooming={this.handleChangeGrooming}
            onChangeComments={this.handleChangeComments}
            dog={this.state.dog}
            selectedDogs={this.state.selectedDogs}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            grooming={this.state.grooming}
            comments={this.state.comments}
            onSubmit={this.onSearchSubmit1}
            dogs={this.state.dogs}
          />
          <div>
            {this.state.showPopup ? (
              <Popup
                cn={this.state.cn}
                text={this.state.response}
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
