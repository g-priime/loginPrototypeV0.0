import React from "react";
import Moment from "moment";
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

    this.data = extend([], null, true);
    this.instance = new Internationalization();
    this.dogs = [];
    this.appointedDogs = [];
  }

  state = {
    initialStates: false,
    initialCustomers: false,
    customers: [],
    dogs: [],
    initialDogs: false,
    appointedDogs: [],

    usernames: [],
    dognames: []
  };

  getAppointmentInfo = async () => {
    var token = localStorage.getItem("token");

    const result = await BasePath.get(
      `/webresources/getAllAppointments/${token}`
    );
    if (this.state.initialStates === false) {
      this.setState({
        initialStates: true
      });
      //console.log(result.data);

      for (let i = 0; i < result.data.length; i++) {
        var appointment = new Object();
        //appointment.Id = parseInt(result.data[i].idNumber);
        //appointment.Id = i;//problem shifting ids getting from backend into calendar

        appointment.Subject = result.data[i].type;
        appointment.StartTime = result.data[i].startTime;
        appointment.EndTime = result.data[i].endTime;

        appointment.dogIdNumber = result.data[i].dogIdNumber.split(",");
        appointment.dogNames = result.data[i].dogNames.split(",");

        appointment.appointedDogs = this.state.dognames;
        //console.log(appointment.appointedDogs);

        appointment.username = result.data[i].username;
        appointment.EventType = result.data[i].type;
        appointment.total = result.data[i].total;
        appointment.amountPaid = result.data[i].amountPaid;
        appointment.isApproved = result.data[i].isApproved;
        appointment.isCancelled = result.data[i].isCancelled;
        appointment.isPaid = result.data[i].isPaid;
        appointment.additionalComments = result.data[i].additionalComments;

        appointment.grooming = result.data[i].grooming;

        this.data.push(appointment);
      }
    }
  };

  getCustomerInfo = async () => {
    var token = localStorage.getItem("token");

    const result = await BasePath.get(`/webresources/RetrieveUsers/${token}`);
    if (this.state.initialCustomers === false) {
      this.setState({
        initialCustomers: true
      });

      let customers = [];
      for (let i = 0; i < result.data.length; i++) {
        customers.push(result.data[i]);
      }
      this.setState({ customers: customers });

      let usernames = [];
      customers.map(customer => usernames.push(customer.username));
      this.setState({ usernames: usernames });
    }
    //console.log(this.state.customers);
  };

  getDogInfo = async () => {
    var token = localStorage.getItem("token");

    const result = await BasePath.get(`/webresources/GetDogs/${token}`);
    if (this.state.initialDogs === false) {
      this.setState({
        initialDogs: true
      });
      //console.log(result);

      let dogs = [];
      for (let i = 0; i < result.data.length; i++) {
        dogs.push(result.data[i]);
      }
      this.setState({ dogs: dogs });
      this.dogs = dogs;

      let dognames = [];
      dogs.map(dog => dognames.push(dog.name));
      this.setState({ dognames: dognames });
    }

    //console.log(this.state.dognames);
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

  onActionBegin(ActionEventArgs) {
    //console.log("Begin");
    if (ActionEventArgs.changedRecords !== undefined) {
      if (ActionEventArgs.requestType === "eventChange") {
        this.editAppointment(ActionEventArgs.changedRecords[0]);
        //console.log(ActionEventArgs.changedRecords[0]);
        //console.log(ActionEventArgs.changedRecords[0].username);
      }
      console.log(ActionEventArgs);
    }
  }

  editAppointment(appointment) {
    //console.log(Appointment);

    let username = appointment.username;

    let dogNames = appointment.dogNames;
    let allDogs = [];
    allDogs = this.state.dogs;
    let ownedDogs = [];
    for (let i = 0; i < allDogs.length; i++) {
      if (allDogs[i].owner === username) {
        ownedDogs.push(allDogs[i]);
      }
    }

    let dogArray = [];
    console.log(allDogs);
    for (let i = 0; i < ownedDogs.length; i++) {
      for (let j = 0; j < dogNames.length; j++) {
        if (dogNames[j] === ownedDogs[i].name) {
          dogArray.push(ownedDogs[i].idNumber);
        }
      }
    }
    let dogIdNumber = dogArray.toString();

    if (appointment.Subject === "daycare") {
      this.editDaycare(appointment, username, dogIdNumber);
    } 
    else if(appointment.Subject === "boarding"){
      this.editBoarding(appointment, username, dogIdNumber);
    }
  }

  editDaycare = async (appointment, username, dogIdNumber) => {
    console.log(appointment);
    let token = localStorage.getItem("token");
    let idNumber = appointment.Id;

    let startTime = Moment(appointment.StartTime).format("YYYY-MM-DD HH:mm:ss");
    let endTime = Moment(appointment.EndTime).format("YYYY-MM-DD HH:mm:ss");
    let total = appointment.total;
    let amountPaid = appointment.amountPaid;
    let isApproved = appointment.isApproved;
    let isCancelled = appointment.isCancelled;
    let type = "daycare";
    let additionalComments = appointment.additionalComments;

    const response = await BasePath.put("/webresources/editdaycare", {
      token,
      username,
      idNumber,
      dogIdNumber,
      startTime,
      endTime,
      total,
      amountPaid,
      isApproved,
      isCancelled,
      type,
      additionalComments
    });
    console.log(response);
  };

  editBoarding = async (appointment, username, dogIdNumber) => {
    console.log(appointment);
    let token = localStorage.getItem("token");
    let idNumber = appointment.Id;

    let startTime = Moment(appointment.StartTime).format("YYYY-MM-DD HH:mm:ss");
    let endTime = Moment(appointment.EndTime).format("YYYY-MM-DD HH:mm:ss");
    let total = appointment.total;
    let amountPaid = appointment.amountPaid;
    let isApproved = appointment.isApproved;
    let isCancelled = appointment.isCancelled;

    let grooming = appointment.grooming;
    let type = "boarding";
    let additionalComments = appointment.additionalComments;

    const response = await BasePath.put("/webresources/editboarding", {
      token,
      username,
      idNumber,
      dogIdNumber,
      startTime,
      endTime,
      total,
      amountPaid,
      isApproved,
      isCancelled,

      grooming,
      type,
      additionalComments
    });
    console.log(response);
  };

  onActionComplete(props) {
    //console.log("Complete");
    //console.log(props.username);
  }

  onCellClick() {
    //console.log("cell");
  }

  onEventClick() {
    //console.log("event");
  }

  onPopupClose(args) {
    //console.log("close");
  }

  onPopupOpen(args, props) {
    if (args.type === "Editor") {
      let statusElement = args.element.querySelector("#Subject");
      statusElement.setAttribute("name", "Subject");
    }
    //console.log(props.Id);
  }
  editorTemplate(props) {
    //console.log(props.username);
    console.log(props.Id);

    let customer = {};
    for (let i = 0; i < this.state.customers.length; i++) {
      if (props.username === this.state.customers[i].username) {
        customer = this.state.customers[i];
      }
    }

    //console.log(this.dogs);
    let appointedDogs = [];
    if (props.dogIdNumber !== undefined) {
      for (let i = 0; i < props.dogIdNumber.length; i++) {
        for (let j = 0; j < this.dogs.length; j++) {
          if (props.dogIdNumber[i] === this.dogs[j].idNumber) {
            //console.log(this.dogs.length);
            appointedDogs.push(this.dogs[j].name);
          }
        }
      }
    }

    return props !== undefined ? (
      <table
        className="custom-event-editor"
        style={{ width: "100%", cellpadding: "5" }}
      >
        <tbody>
          <tr>
            <td className="e-textlabel">Id</td>
            <td colSpan={4}>
              <input
                id="Id"
                className="e-field e-input"
                type="text"
                name="Id"
                style={{ width: "100%" }}
              />
            </td>
          </tr>
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
                dataSource={this.state.usernames}
                value={props.username || null}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Dogs</td>
            <td colSpan={4}>
              <MultiSelectComponent
                id="dogNames"
                placeholder="Choose dogs"
                data-name="dogNames"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={this.state.dognames}
                value={props.dogNames || null}
                //fields={{ text: 'sports', value: 'id' }}
                mode="Box"
                //enablePersistence={true}
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
            <td className="e-textlabel">Grooming</td>
            <td colSpan={4}>
              <CheckBoxComponent
                id="grooming"
                className="e-field"
                type="checkbox"
                data-name="grooming"
                style={{ width: "100%" }}
                value={props.grooming}
                checked={props.grooming}
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
    this.getDogInfo();

    return (
      <ScheduleComponent
        currentView="Month"
        eventSettings={{
          dataSource: this.data,
          template: this.eventTemplate.bind(this),
          fields: {
            id: "Id",
            description: { name: "dogNames", title: "Dogs" },
            location: { name: "username", title: "Owner" }
          }
        }}
        editorTemplate={this.editorTemplate.bind(this)}
        popupOpen={this.onPopupOpen.bind(this)}
        popupClose={this.onPopupClose.bind(this)}
        //actionComplete={this.onActionComplete.bind(this)}
        actionBegin={this.onActionBegin.bind(this)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default CalendarMain;
