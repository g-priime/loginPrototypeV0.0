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

class EditorTemplateBoarding extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
                select={this.onComplete.bind(this)}
                //actionComplete={this.onComplete}
                //actionComplete={()=>(this.dogList = ["Max", "Sparky", "Fido"])}
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
                //dataSource={this.dogList}
                value={props.dogNames || null}
                //fields={{ text: 'sports', value: 'id' }}
                mode="Box"
                //enablePersistence={true}
                //select={this.onComplete}
                //actionBegin={this.scheduleObj.refreshEvents.bind(this)}
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
    );
  }
}

export default EditorTemplateBoarding;
