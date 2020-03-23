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
import {
  Internationalization,
  extend,
  createElement
} from "@syncfusion/ej2-base";
import { DropDownList } from '@syncfusion/ej2-dropdowns'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

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
        appointment.EventType = result.data[i].type;
        this.data.push(appointment);
      }
      //this.setState({ appointments: appointments });
      //this.data = appointments;
    }
  };

  getTimeString(value) {
    return this.instance.formatDate(value, { skeleton: "hm" });
  }

  eventTemplate(props) {
    if (props.Subject === "daycare") {
      return (
        <div className="template-wrap" style={{ background: "red" }}>
          <div className="subject" style={{ background: "red" }}>
            {props.Subject}
          </div>
          <div className="time" style={{ background: "red" }}>
            Time: {this.getTimeString(props.StartTime)} -{" "}
            {this.getTimeString(props.EndTime)}
          </div>
        </div>
      );
    } else if (props.Subject === "boarding") {
      return (
        <div className="template-wrap" style={{ background: "green" }}>
          <div className="subject" style={{ background: "green" }}>
            {props.Subject}
          </div>
          <div className="time" style={{ background: "green" }}>
            Time: {this.getTimeString(props.StartTime)} -{" "}
            {this.getTimeString(props.EndTime)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="template-wrap" style={{ background: "orange" }}>
          <div className="subject" style={{ background: "orange" }}>
            {props.Subject}
          </div>
          <div className="time" style={{ background: "orange" }}>
            Time: {this.getTimeString(props.StartTime)} -{" "}
            {this.getTimeString(props.EndTime)}
          </div>
        </div>
      );
    }
  }
/*
  onPopupOpen(args) {
    if (args.type === "Editor") {
      if (!args.element.querySelector(".custom-field-row")) {
        let row = createElement("div", { className: "custom-field-row" });
        let formElement = args.element.querySelector(".e-schedule-form");
        formElement.lastChild.insertBefore(
          row,
          formElement.lastChild.lastChild
        );
        let container = createElement("div", {
          className: "custom-field-container"
        });
        let inputEle = createElement("input", {
          className: "e-field",
          attrs: { name: "EventType" }
        });
        
        container.appendChild(inputEle);
        row.appendChild(container);
        let drowDownList = new DropDownList({
          dataSource: [
            { text: "Public Event", value: "public-event" },
            { text: "Maintenance", value: "maintenance" },
            { text: "Commercial Event", value: "commercial-event" },
            { text: "Family Event", value: "family-event" }
          ],
          fields: { text: "text", value: "value" },
          value: args.data.EventType,
          floatLabelType: "Always",
          placeholder: "Event Type"
        });
        drowDownList.appendTo(inputEle);
        inputEle.setAttribute("name", "EventType");
        
      }
    }
  }
*/
onPopupOpen(args) {
  if (args.type === 'Editor') {
      let statusElement = args.element.querySelector('#EventType');
      statusElement.setAttribute('name', 'EventType');
  }
}
editorTemplate(props) {
  return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
<tr><td className="e-textlabel">Appointment Type</td><td colSpan={4}>
  <input id="Appointment Type" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }}/>
</td></tr>
<tr><td className="e-textlabel">Owner</td><td colSpan={4}>
  <input id="Owner" className="e-field e-input" type="text" name="username" style={{ width: '100%' }}/>
</td></tr>
<tr><td className="e-textlabel">Status</td><td colSpan={4}>
  <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['New', 'Requested', 'Confirmed']} value={props.EventType || null}></DropDownListComponent>
</td></tr>
<tr><td className="e-textlabel">From</td><td colSpan={4}>
  <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
</td></tr>
<tr><td className="e-textlabel">To</td><td colSpan={4}>
  <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
</td></tr>
<tr><td className="e-textlabel">Reason</td><td colSpan={4}>
  <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
</td></tr></tbody></table> : <div></div>);
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
        editorTemplate={this.editorTemplate.bind(this)}
        popupOpen={this.onPopupOpen.bind(this)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default CalendarMain;
