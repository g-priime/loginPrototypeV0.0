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

class CalendarMain extends React.Component {
  constructor() {
    super(...arguments);
    this.data = [
      {
        Id: 2,
        Subject: "Daycare",
        StartTime: new Date(2020, 2, 23, 10, 0),
        EndTime: new Date(2020, 2, 23, 12, 30)
      }
    ];
  }

  render() {
    return (
      <ScheduleComponent
        currentView="Month"
        eventSettings={{ dataSource: this.data }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default CalendarMain;
