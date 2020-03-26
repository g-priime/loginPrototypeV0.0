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
      console.log(result.data);

      for (let i = 0; i < result.data.length; i++) {
        var appointment = new Object();
        appointment.Id = result.data[i].idNumber;

        appointment.Subject = result.data[i].type;
        appointment.StartTime = result.data[i].startTime;
        appointment.EndTime = result.data[i].endTime;
        /*
        var dogIds = result.data[i].dogIdNumber.split(",");
        this.getDogs(dogIds[i]);
        appointment.dogs = this.dogs;
        appointment.appointedDogs = this.appointedDogs;
        console.log(this.dogs);
        */
        /*
        var dogArray = [];
        
        for(let i=0; i<dogIds.length; i++){
          var dog = this.getDogs(dogIds[i]);
          dogArray.push(dog);
        }
        console.log(dogArray);
        */
        //subjects.push(result.data[i].type);
        appointment.dogIdNumber = result.data[i].dogIdNumber.split(",");
        //appointment.dogIdNumber = dogArray;
        /*
        var dogIds = result.data[i].dogIdNumber.split(",");
        var dogArray = [];
        for (let i = 0; i < dogIds.length; i++) {
          if (dogIds[i] === "1") {
            dogArray.push("Max");
          } else {
            dogArray.push("Sparky");
          }
        }
        appointment.dogIdNumber = dogArray;
*/      appointment.dogNames = result.data[i].dogNames.split(",");

        appointment.appointedDogs = this.state.dognames;
        console.log(appointment.appointedDogs);

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
  /*
  getAppointedDogs = dogIds => {
    var token = localStorage.getItem("token");
    var dogArray = [];

    for (let i = 0; i < dogIds.length; i++) {
      var dog = "";
      BasePath.get(`/webresources/GetDog/${token}/${dogIds[i]}`)
        .then(result => {
          dog = result.data.name;
          dogArray.push(dog);
        })
        .catch(err => {
          console.log(err);
        });
    }

    console.log(dogArray);

    return dog;
  };
*/
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
    console.log(this.state.customers);
  };

  getDogInfo = async () => {
    var token = localStorage.getItem("token");

    const result = await BasePath.get(`/webresources/GetDogs/${token}`);
    if (this.state.initialDogs === false) {
      this.setState({
        initialDogs: true
      });
      console.log(result);

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

    console.log(this.state.dognames);
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
  getDogs = async dogIds => {
    //let dogIds = ["1", "2"];
    //this.setState({ initialDogs: false });
    var token = localStorage.getItem("token");
    console.log(token);
    const response = await BasePath.get(`/webresources/GetDogs/${token}`);
    //console.log(response.data);

    const dogs = response.data;
    var dogArray = [];
    dogs.map(doggy =>
      dogArray.push({ key: doggy.idNumber, value: doggy.name })
    );
    //console.log(dogArray[0].key);

    var dogArrayAppointed = [];

    if (dogIds !== undefined) {
      for (let i = 0; i < dogArray.length; i++) {
        for (let j = 0; j < dogIds.length; j++) {
          //console.log(dogArray[i].key);
          //console.log(dogIds[j]);
          if (dogIds[j] == dogArray[i].key) {
            //console.log("here");
            dogArrayAppointed.push(dogArray[i].value);
          }
        }
      }
    }

    //console.log(dogArrayAppointed);

    var dogArrayDropDown = [];
    dogs.map(doggy => dogArrayDropDown.push(doggy.name));

    this.dogs = dogArrayDropDown;
    this.appointedDogs = dogArrayAppointed;

    console.log(this.state.initialDogs);
    if (false) {
      this.setState({
        dogs: dogArrayDropDown,
        initialDogs: true,
        appointedDogs: dogArrayAppointed
      });
    }
  };
*/
  onCellClick() {
    console.log("cell");
  }

  onEventClick() {
    console.log("event");
  }

  onPopupClose(args) {
    console.log("close");
    //this.setState({ initialDogs: false });
  }

  onPopupOpen(args, props) {
    if (args.type === "Editor") {
      let statusElement = args.element.querySelector("#Subject");
      statusElement.setAttribute("name", "Subject");
      //this.getDogs(props.dogIdNumber);
    }
    console.log("open");

    //this.setState({ initialDogs: false });
  }
  editorTemplate(props) {
    //console.log(props.dogIdNumber);
    //if (props.dogIdNumber !== undefined) {
    //this.getDogs(props.dogIdNumber);
    //this.setState({ initialDogs: false });
    //}
    let customer = {};
    for (let i = 0; i < this.state.customers.length; i++) {
      if (props.username === this.state.customers[i].username) {
        customer = this.state.customers[i];
      }
    }
    //console.log(customer);
    //console.log(this.state.dogs);
    //console.log(props.dogIdNumber);
    //let dogs = this.state.dogs;
    console.log(this.dogs);
    let appointedDogs = [];
    if (props.dogIdNumber !== undefined) {
      for (let i = 0; i < props.dogIdNumber.length; i++) {
        for (let j = 0; j < this.dogs.length; j++) {
          if (props.dogIdNumber[i] === this.dogs[j].idNumber) {
            console.log(this.dogs.length);
            appointedDogs.push(this.dogs[j].name);
          }
        }
      }
    }
    //console.log(appointedDogs);
    /*
    let dogIdNumber = [];
    dogIdNumber = props.dogIdNumber;
    let appointedDogs = [];
    for (let i = 0; i < dogIdNumber.length; i++) {
      for (let j = 0; j < this.state.dogs; j++) {
        if (dogIdNumber[i] === this.state.dogs[j].idNumber) {
          appointedDogs.push(this.state.dogs[j].name);
        }
      }
    }
    console.log(appointedDogs);
    */
    props.appointedDogs = ["Max"];

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
                dataSource={this.state.usernames}
                value={props.username || null}
              ></DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel">Dogs</td>
            <td colSpan={4}>
              <MultiSelectComponent
                id="appointedDogs"
                placeholder="Choose dogs"
                data-name="appointedDogs"
                className="e-field"
                style={{ width: "100%" }}
                dataSource={this.state.dognames}
                value={props.dogNames || null}
                fields={this.state.dognames}
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
    this.getDogInfo();

    return (
      <ScheduleComponent
        currentView="Month"
        eventSettings={{
          dataSource: this.data,
          template: this.eventTemplate.bind(this),
          fields: {
            description: { name: "dogNames", title: "Dogs" },
            Owner: { name: "username", title: "Owner" }
          }
        }}
        editorTemplate={this.editorTemplate.bind(this)}
        popupOpen={this.onPopupOpen.bind(this)}
        popupClose={this.onPopupClose.bind(this)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default CalendarMain;
