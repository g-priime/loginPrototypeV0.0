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
  extend
  //createElement
} from "@syncfusion/ej2-base";
//import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import {
  DropDownListComponent,
  MultiSelectComponent
} from "@syncfusion/ej2-react-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";

class CalendarMain extends React.Component {
  constructor() {
    super(...arguments);

    this.data = extend([{}], null, true);
    this.instance = new Internationalization();
  }

  state = {
    initialStates: false,
    initialCustomers: false,
    customers: []
  };

  getAppointmentInfo = async () => {
    var token = localStorage.getItem("token");

    const result = await BasePath.get(`/webresources/getappointments/${token}`);
    if (this.state.initialStates === false) {
      this.setState({
        initialStates: true
      });
      console.log(result.data);

      for (let i = 0; i < result.data.length; i++) {
        var appointment = new Object();
        appointment.Id = result.data[i].idNumber;

        appointment.Subject = result.data[i].type;
        appointment.StartTime = result.data[i].startTime;
        appointment.EndTime = result.data[i].endTime;

        appointment.dogIdNumber = result.data[i].dogIdNumber.split(',');

        appointment.username = result.data[i].username;
        appointment.EventType = result.data[i].type;
        appointment.total = result.data[i].total;
        appointment.amountPaid = result.data[i].amountPaid;
        appointment.isApproved = result.data[i].isApproved;
        appointment.isCancelled = result.data[i].isCancelled;
        appointment.isPaid = result.data[i].isPaid;
        appointment.additionalComments = result.data[i].additionalComments;

        this.data.push(appointment);
      }
    }
  };

  getCustomerInfo = async () => {
    var token = localStorage.getItem("token");

    //get dogs instead of customers for until back end has get all customers
    const result = await BasePath.get(`/webresources/RetrieveDogs/${token}`);
    if (this.state.initialCustomers === false) {
      this.setState({
        initialCustomers: true
      });

      let customers = [];
      for (let i = 0; i < result.data.length; i++) {
        customers.push(result.data[i].name);
      }
      this.setState({ customers: customers });
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

  onPopupOpen(args) {
    if (args.type === "Editor") {
      let statusElement = args.element.querySelector("#Subject");
      statusElement.setAttribute("name", "Subject");
    }
  }
  editorTemplate(props) {
    return props !== undefined ? (
      <table
        className="custom-event-editor"
        style={{ width: "100%", cellpadding: "5" }}
      >
        <tbody>
          <tr>
            <td className="e-textlabel">Appointment Type</td>
            <td colSpan={4}>
              <DropDownListComponent
                id="Subject"
                placeholder="Choose appointment type"
                data-name="Subject"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={["daycare", "boarding", "training"]}
                value={props.Subject || null}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Owner</td>
            <td colSpan={4}>
              <DropDownListComponent
                id="username"
                placeholder="Choose customer"
                data-name="username"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={this.state.customers}
                value={props.username || null}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Dogs</td>
            <td colSpan={4}>
              <MultiSelectComponent
                id="dogIdNumber"
                placeholder="Choose dogs"
                data-name="dogIdNumber"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={["1", "2"]}
                value={props.dogIdNumber}
                fields={["1", "2"]} 
                mode="Box"
              ></MultiSelectComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Start Time</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="StartTime"
                data-name="StartTime"
                value={new Date(props.startTime || props.StartTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">End Time</td>
            <td colSpan={4}>
              <DateTimePickerComponent
                format="dd/MM/yy hh:mm a"
                id="EndTime"
                data-name="EndTime"
                value={new Date(props.endTime || props.EndTime)}
                className="e-field"
              ></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Total</td>
            <td colSpan={4}>
              <input
                id="total"
                className="e-field e-input"
                type="text"
                name="total"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Amount Paid</td>
            <td colSpan={4}>
              <input
                id="amountPaid"
                className="e-field e-input"
                type="text"
                name="amountPaid"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Approved</td>
            <td colSpan={4}>
              <CheckBoxComponent
                id="isApproved"
                className="e-field"
                type="checkbox"
                data-name="isApproved"
                style={{ width: "100%" }}
                value={props.isApproved}
                checked={props.isApproved}
              ></CheckBoxComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Cancelled</td>
            <td colSpan={4}>
              <CheckBoxComponent
                id="isCancelled"
                className="e-field"
                type="checkbox"
                data-name="isCancelled"
                style={{ width: "100%" }}
                value={props.isCancelled}
                checked={props.isCancelled}
              ></CheckBoxComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Paid</td>
            <td colSpan={4}>
              <CheckBoxComponent
                id="isPaid"
                className="e-field"
                type="checkbox"
                data-name="isPaid"
                style={{ width: "100%" }}
                value={props.isPaid}
                checked={props.isPaid}
              ></CheckBoxComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Additional Comments</td>
            <td colSpan={4}>
              <textarea
                id="additionalComments"
                className="e-field e-input"
                name="additionalComments"
                rows={3}
                cols={50}
                style={{
                  width: "100%",
                  height: "60px !important",
                  resize: "vertical"
                }}
              ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div></div>
    );
  }

  render() {
    this.getAppointmentInfo();
    this.getCustomerInfo();

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
