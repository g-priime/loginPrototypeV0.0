import React from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda
  //EventSettingsModel
} from "@syncfusion/ej2-react-schedule";
//import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
import BasePath from "../../api/BasePath";

class CalendarMain extends React.Component {
  /*
  constructor() {
    super(...arguments);

    this.data = [];
  }
  */

  state = {
    initialStates: false,
    appointmentList: [],
    appointments: []
  };

  getAppointmentInfo = async () => {
    var token = localStorage.getItem("token");

    //use dog info as placeholder til backend creates resource to get appointment info
    const result = await BasePath.get(`/webresources/getappointments/${token}`);
    if (this.state.initialStates === false) {
      this.setState({
        initialStates: true,
        appointmentList: result.data
      });

      console.log(result);

      const appointments = [];
      var appointment = {
        Id: 0,
        Subject: "",
        StartTime: new Date(2020, 0, 0, 0, 0),
        EndTime: new Date(2020, 0, 0, 0, 0)
      };
      for (var i = 0; i < 3; i++) {
        appointment.Id = this.state.appointmentList[i].idNumber;
        appointment.Subject = this.state.appointmentList[i].type;
        appointment.StartTime = this.state.appointmentList[i].startTime;
        appointment.EndTime = this.state.appointmentList[i].endTime;
        appointments.push(appointment);
      }
      this.setState({ appointments: appointments });
      console.log(this.state.appointments);
    }
    /*
      const pendingList = [];
      const approvedList = [];
      for (var i = 0; i < this.state.appointmentList.length; i++) {
        if (this.state.appointmentList[i].isApproved === true) {
          approvedList.push(this.state.appointmentList[i]);
        } else {
          pendingList.push(this.state.appointmentList[i]);
        }
      }
      this.setState({
        approvedList: approvedList,
        pendingList: pendingList
      });*/
  };
  //const dogz = this.state.dogList.map(dog => dog + "dog");
  //console.log(this.state.appointmentList);
  //};

  render() {
    this.getAppointmentInfo();

    return (
      <ScheduleComponent
        currentView="Month"
        eventSettings={{ dataSource: this.state.appointments }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default CalendarMain;
