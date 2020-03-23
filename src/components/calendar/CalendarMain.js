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
  constructor() {
    super(...arguments);

    this.data = [{
      
    }];
  }

  state = {
    initialStates: false
    //appointments: []
  };

  getAppointmentInfo = async () => {
    var token = localStorage.getItem("token");

    const result = await BasePath.get(`/webresources/getappointments/${token}`);
    if (this.state.initialStates === false) {
      this.setState({
        initialStates: true
      });
console.log(result.data);
      //var appointments = [];

      for (let i = 0; i < result.data.length; i++) {
        var appointment = new Object();
        appointment.Id = result.data[i].idNumber;
        appointment.Subject = result.data[i].type;
        appointment.StartTime = result.data[i].startTime;
        appointment.EndTime = result.data[i].endTime;
        appointment.dogIdNumber = result.data[i].dogIdNumber;
        appointment.username = result.data[i].username;
        this.data.push(appointment);
      }
      //this.setState({ appointments: appointments });
      //this.data = appointments;
    }
  };

  render() {
    this.getAppointmentInfo();

    return (
      <ScheduleComponent
        currentView="Month"
        eventSettings={{ dataSource: this.data,
        fields: {
          description: { name: 'dogIdNumber', title: 'Dogs' },
          location: { name: 'username', title: 'Owner' }
        } }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default CalendarMain;
