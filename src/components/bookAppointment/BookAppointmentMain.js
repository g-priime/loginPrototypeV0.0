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
    cost: ""
  };

  getDogs = async () => {
    var token = localStorage.getItem("token");
    const response = await BasePath.get(`/webresources/RetrieveDogs/${token}`);
    //console.log(response.data);

    const dogs = response.data;
    var dogArray = [];
    dogs.map(doggy => dogArray.push({key:doggy.idNumber,value:doggy.name}));

    if (!this.state.initialStates) {
      this.setState({ dogs: dogArray, initialStates: true, selectedDogs: [] });
    }

    //console.log(this.state.dogs);
  };

  onSearchSubmit1 = async () => {
    this.setState({
      fieldName: [
        //this.state.dog,
        this.state.selectedDogs,
        this.state.startTime,
        this.state.endTime,
        this.state.grooming,
        this.state.comments,
        this.state.sessionId
      ]
    });

    var token = localStorage.getItem("token");

    var startTime = this.state.startTime;
    var formattedStart = Moment(startTime).format("x");
    //var formattedStart = startTime.getTime();
    var endTime = this.state.endTime;
    //var formattedEnd = Moment(endTime).format("YYYY-MM-DD hh-mm-am");
    var formattedEnd = Moment(endTime).format("x");
    var grooming = false;
    if (this.state.grooming === "Yes") {
      grooming = true;
    }

    console.log(this.state.dog);

    const response = await BasePath.get(
      `/webresources/bookboarding/${token}/${formattedStart}/${formattedEnd}/${grooming}`
    );

    this.setState({ response: response.data.value, cost: response.data.cost });
    //console.log("here");

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
    this.state.fieldName[0].map(doggy => (
      selectedDogs.push(doggy.key)
    ));
    //var dog = this.state.fieldName[0].key;
    var startTime = this.state.fieldName[1];
    var endTime = this.state.fieldName[2];
    var grooming = false;
    if (this.state.fieldName[3] === "Yes") {
      grooming = true;
    }
    var additionalComments = this.state.fieldName[4];

    //console.log(this.state.dog);

    const response = await BasePath.put("/webresources/bookboarding", {
      token,
      selectedDogs,
      startTime,
      endTime,
      grooming,
      additionalComments
    });

    //console.log(response.data);

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
    //console.log("main");
    this.setState({ response: "" });
    //console.log(this.state.images);
  };

  proceedToPayment = () => {
    this.setState({ response: "Payment" });
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
/*
  handleChangeDog = ({selectedOption}) => {
    this.setState({ dog: selectedOption });
  };
*/
/*
  handleChangeDog = selectedOption => {
    this.setState(
      { dog: selectedOption[0] },
      () => console.log(`Option selected:`, this.state.dog)
    );
  };
*/
  handleChangeDog = selectedOption => {
    /*var selectedDogs = [];
    selectedOption.map(dog => {
      selectedDogs.push(dog);
    });*/
    this.setState(
      { selectedDogs: selectedOption },
      () => console.log(`Option selected:`, this.state.selectedDogs)
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

    if (isValid === "Valid") {
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
    } else if (isValid === "Pay Later") {
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
