import React from "react";
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
    grooming: "No",
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
      return (
        <div style={{ marginTop: "10px" }}>
          <EditBoardingMain appointment={this.appointment}></EditBoardingMain>
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "10px" }}>
          <EditTrainingMain appointment={this.appointment}></EditTrainingMain>
        </div>
      );
    }
  }
}

export default EditAppointmentMain;
