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
    grooming: "No",

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
        this.state.grooming,
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
      if (this.state.grooming === "Yes") {
        grooming = "true";
      }
      var type = "boarding";

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

    var selectedDogs = [];
    this.state.fieldName[0].map((doggy) => selectedDogs.push(doggy.key));
    var dogIdNumber = selectedDogs.toString();
    var startTime = Moment(this.state.fieldName[1]).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    var endTime = Moment(this.state.fieldName[2]).format("YYYY-MM-DD HH:mm:ss");
    var grooming = "false";
    if (this.state.fieldName[3] === "Yes") {
      grooming = "true";
    }
    var additionalComments = this.state.fieldName[4];
    var total = this.state.cost;

    const response = await BasePath.put("/webresources/bookboarding", {
      token,
      dogIdNumber,
      startTime,
      endTime,
      total,
      additionalComments,
      grooming,
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

  handleChangeGrooming = (event) => {
    this.setState({ grooming: event.target.value });
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
            cancelLink={this.state.cancelLink}
          />
        </div>
      );
    } else if (isValid === "Successfully added appointment") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/ViewAppointments",
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

export default BookAppointmentMain;
