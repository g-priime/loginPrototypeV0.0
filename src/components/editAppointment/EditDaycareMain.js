import React from "react";
import BasePath from "../../api/BasePath";
import EditDaycare1 from "./EditDaycare1";
import EditDaycare2 from "./EditDaycare2";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";

import Moment from "moment";

class EditDaycareMain extends React.Component {
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
  };

  getDogs = async () => {
    var token = localStorage.getItem("token");
    const response = await BasePath.get(`/webresources/RetrieveDogs/${token}`);

    const dogs = response.data;
    var dogArray = [];
    dogs.map((doggy) =>
      dogArray.push({ key: doggy.idNumber, value: doggy.name })
    );

    const dogIds = this.props.appointment.dogIdNumber;
    const dogArrayAppointed = [];
    for (let i = 0; i < dogArray.length; i++) {
      for (let j = 0; j < dogIds.length; j++) {
        if (dogIds[j] == dogArray[i].key) {
          dogArrayAppointed.push(dogArray[i]);
        }
      }
    }

    if (!this.state.initialStates) {
      this.setState({
        dogs: dogArray,
        initialStates: true,
        selectedDogs: dogArrayAppointed,
        startTime: this.props.appointment.startTime,
        endTime: this.props.appointment.endTime,
        comments: this.props.appointment.additionalComments,
      });
    }
  };

  onSearchSubmit1 = async () => {
    this.setState({
      fieldName: [
        this.state.selectedDogs,
        this.state.startTime,
        this.state.endTime,
        this.state.comments,
        this.state.sessionId,
      ],
    });

    var d1 = new Date(this.state.startTime);
    var d2 = new Date(this.state.endTime);
    var validTimes = d1.getTime() < d2.getTime();
    var dNow = new Date();
    var validStart = dNow.getTime() <= d1.getTime();

    if (this.state.selectedDogs != null) {
      var token = localStorage.getItem("token");
      var dogs = [];
      this.state.selectedDogs.map((doggy) => dogs.push(doggy.key));
      var dogString = dogs.toString();
      var startTime = this.state.startTime;
      var formattedStart = Moment(startTime).format("YYYY-MM-DD hh:mm:ss");
      var endTime = this.state.endTime;
      var formattedEnd = Moment(endTime).format("YYYY-MM-DD hh:mm:ss");
      var grooming = "false";
      var type = "daycare";

      console.log(this.state.dog);

      const response = await BasePath.put("/webresources/calculatecost", {
        token,
        dogString,
        formattedStart,
        formattedEnd,
        grooming,
        type,
      });

      this.setState({
        response: response.data.message,
        cost: response.data.total,
      });

      if (response.data === "") {
        this.setState({
          cn: "popup4",
          response: "Must select at least one dog",
        });
        this.togglePopup();
      } else if (!validStart) {
        this.setState({
          cn: "popup4",
          response: "Must enter a Start Time that has not passed",
        });
        this.togglePopup();
      } else if (!validTimes) {
        this.setState({
          cn: "popup4",
          response: "Must enter an End Time that is greater than Start Time",
        });
        this.togglePopup();
      }
    } else {
      this.setState({ cn: "popup4", response: "Must select at least one dog" });
      this.togglePopup();
    }
  };

  onSearchSubmit2 = async () => {
    var token = localStorage.getItem("token");

    var username = this.props.appointment.username;
    var idNumber = this.props.appointment.idNumber;

    var selectedDogs = [];
    this.state.fieldName[0].map((doggy) => selectedDogs.push(doggy.key));
    var dogIdNumber = selectedDogs.toString();
    var startTime = Moment(this.state.fieldName[1]).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    var endTime = Moment(this.state.fieldName[2]).format("YYYY-MM-DD HH:mm:ss");
    console.log(endTime);
    var additionalComments = this.state.fieldName[3];
    var total = this.state.cost;

    var amountPaid = this.props.appointment.amountPaid;
    var isApproved = this.props.appointment.isApproved;
    var isCancelled = this.props.appointment.isCancelled;
    var type = this.props.appointment.type;

    const response = await BasePath.put("/webresources/editdaycare", {
      token,
      username,
      idNumber,
      dogIdNumber,
      startTime,
      endTime,
      total,
      amountPaid,
      isApproved,
      isCancelled,
      type,
      additionalComments,
    });

    this.setState({ response: response.data });
  };

  onPrevious = () => {
    this.setState({ response: "" });
  };

  proceedToPayment = () => {
    this.setState({ response: "Payment" });
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  handleChangeDog = (selectedOption) => {
    this.setState({ selectedDogs: selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedDogs)
    );
  };

  handleChangeStartTime = (event) => {
    this.setState({ startTime: event.target.value });
  };

  handleChangeEndTime = (event) => {
    this.setState({ endTime: event.target.value });
  };

  handleChangeComments = (event) => {
    this.setState({ comments: event.target.value });
  };

  render() {
    this.getDogs();

    var isValid = this.state.response;

    if (isValid === "Cost estimate successful") {
      return (
        <div style={{ marginTop: "10px" }}>
          <EditDaycare2
            dog={this.state.dog}
            selectedDogs={this.state.selectedDogs}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            comments={this.state.comments}
            cost={this.state.cost}
            onClick={this.onPrevious}
            proceedToPayment={this.proceedToPayment}
            onSubmit={this.onSearchSubmit2}
          />
        </div>
      );
    } else if (isValid === "Appointment updated") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "ViewAppointments",
              state: { message: "Appointment updated" },
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
              state: { message: "Redirect to PayPal" },
            }}
          />
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "10px" }}>
          <EditDaycare1
            onChangeDog={this.handleChangeDog}
            onChangeStartTime={this.handleChangeStartTime}
            onChangeEndTime={this.handleChangeEndTime}
            onChangeGrooming={this.handleChangeGrooming}
            onChangeComments={this.handleChangeComments}
            dog={this.state.dog}
            selectedDogs={this.state.selectedDogs}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
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

export default EditDaycareMain;
