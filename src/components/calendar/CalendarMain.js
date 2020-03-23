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
//import { WebinarData } from './dataSource';
import { Internationalization, extend } from "@syncfusion/ej2-base";

class CalendarMain extends React.Component {
  constructor() {
    super(...arguments);

    this.data = extend([{}], null, true);
    this.instance = new Internationalization();
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

  getTimeString(value){
    return this.instance.formatDate(value, { skeleton: 'hm' })
  }

  eventTemplate(props) {
    if (props.Subject === "daycare"){
      return (
        <div
          className="template-wrap"
          style={{ background: "red" }}
        >
          <div className="subject" style={{ background: "red" }}>
            {props.Subject}
          </div>
          <div className="time" style={{ background: "red" }}>
            Time: {this.getTimeString(props.StartTime)} - {this.getTimeString(props.EndTime)}
          </div>
        </div>
      );
    }
    else if (props.Subject === "boarding") {
      return (
        <div
          className="template-wrap"
          style={{ background: "green" }}
        >
          <div className="subject" style={{ background: "green" }}>
            {props.Subject}
          </div>
          <div className="time" style={{ background: "green" }}>
            Time: {this.getTimeString(props.StartTime)} - {this.getTimeString(props.EndTime)}
          </div>
        </div>
      );
    }
    else {
      return (
        <div
          className="template-wrap"
          style={{ background: "orange" }}
        >
          <div className="subject" style={{ background: "orange" }}>
            {props.Subject}
          </div>
          <div className="time" style={{ background: "orange" }}>
            Time: {this.getTimeString(props.StartTime)} - {this.getTimeString(props.EndTime)}
          </div>
        </div>
      );
    }
  }

  render() {
    this.getAppointmentInfo();

    return (
      <ScheduleComponent
        currentView="Month"
        eventSettings={{
          dataSource: this.data,
          template: this.eventTemplate.bind(this),
          fields: {
            description: { name: "dogIdNumber", title: "Dogs" },
            location: { name: "username", title: "Owner" }
          }
        }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default CalendarMain;
