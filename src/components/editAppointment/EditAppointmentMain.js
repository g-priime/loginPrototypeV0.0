import React from "react";

import BasePath from "../../api/BasePath";
//import BookAppointment1 from "./BookAppointment1";
//import BookAppointment2 from "./BookAppointment2";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";

import Moment from "moment";
import EditDaycareMain from "./EditDaycareMain";
import EditBoardingMain from "./EditBoardingMain";
import EditTrainingMain from "./EditTrainingMain";

class EditAppointmentMain extends React.Component {
  constructor() {
    super(...arguments);

    this.appointment = [];
  }

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

  getAppointmentInfo = () => {
    this.appointment = this.props.location.state.appointment;
    console.log(this.appointment);
  };

  render() {
    this.getAppointmentInfo();

    if (this.appointment.type === "daycare") {
      return (
        <div style={{ marginTop: "10px" }}>
          <EditDaycareMain appointment={this.appointment}></EditDaycareMain>
        </div>
      );
    } else if (this.appointment.type === "boarding") {
      return <div style={{ marginTop: "10px" }}>
          <EditBoardingMain appointment={this.appointment}></EditBoardingMain>
      </div>;
    } else {
      return <div style={{ marginTop: "10px" }}>
          <EditTrainingMain appointment={this.appointment}></EditTrainingMain>
      </div>;
    }

    /*
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
    } else if (isValid === "Successfully added appointment") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/Services",
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
    */
  }
}

export default EditAppointmentMain;
