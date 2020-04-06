import React from "react";

import BasePath from "../../api/BasePath";
import BookDaycare1 from "./BookDaycare1";
import BookDaycare2 from "./BookDaycare2";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";

import Moment from "moment";

class BookDaycareMain extends React.Component {
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

    cancelLink: "/Services",
  };

  getDogs = async () => {
    var token = localStorage.getItem("token");
    const response = await BasePath.get(`/webresources/RetrieveDogs/${token}`);

    const dogs = response.data;
    var dogArray = [];
    dogs.map((doggy) =>
      dogArray.push({ key: doggy.idNumber, value: doggy.name })
    );

    if (!this.state.initialStates) {
      this.setState({ dogs: dogArray, initialStates: true, selectedDogs: [] });
    }
  };

  UNSAFE_componentWillMount() {
    if (
      typeof this.props.location.state != "undefined" &&
      this.props.location.state !== null
    ) {
      this.setState({ cancelLink: this.props.location.state.cancelLink });
    }
  }

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
      }
    }
    else{
      this.setState({
        cn: "popup4",
        response: "Must select at least one dog",
      });
      this.togglePopup();
    }
  };

  onSearchSubmit2 = async () => {
    var token = localStorage.getItem("token");

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

    const response = await BasePath.put("/webresources/bookdaycare", {
      token,
      dogIdNumber,
      startTime,
      endTime,
      total,
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
          <BookDaycare2
            dog={this.state.dog}
            selectedDogs={this.state.selectedDogs}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            comments={this.state.comments}
            cost={this.state.cost}
            onClick={this.onPrevious}
            proceedToPayment={this.proceedToPayment}
            onSubmit={this.onSearchSubmit2}
            cancelLink={this.state.cancelLink}
          />
        </div>
      );
    } else if (isValid === "Succsessfully added appointment") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/Services",
              state: { message: "Appointment is booked pending approval" },
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
          <BookDaycare1
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
            cancelLink={this.state.cancelLink}
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

export default BookDaycareMain;
