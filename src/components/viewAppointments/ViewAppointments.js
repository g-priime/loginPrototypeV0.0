import React from "react";
import "../../css/reg.css";
import "../../css/viewAppointments.css";
import { Link } from "react-router-dom";
import BasePath from "../../api/BasePath";
import ApprovedAppointment from "./ApprovedAppointment";
import PendingAppointment from "./PendingAppointment";
import Moment from "moment";
import Popup from "../PopUp";

import { ReactComponent as Hint } from "../hint.svg";
const hint = () => (
  <div>
    {
      <svg width="25" height="25">
        <circle
          cx="11"
          cy="11"
          r="10"
          stroke="gray"
          stroke-width="1"
          fill="gray"
        />
        <text
          x="6"
          y="19"
          font-size="22px "
          fill="white"
          font-weight="bold"
          font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        >
          ?
        </text>
        Sorry, your browser does not support inline SVG.
      </svg>
    }
    <Hint />
  </div>
);

class ViewAppointments extends React.Component {
  state = {
    initialStates: false,
    appointmentList: [],
    approvedList: [],
    pendingList: [],
    bgColor: "blue"
  };

  getAppointmentInfo = async () => {
    var token = localStorage.getItem("token");

    const result = await BasePath.get(`/webresources/getappointments/${token}`);
    if (this.state.initialStates === false) {
      this.setState({
        initialStates: true,
        appointmentList: result.data
      });
      console.log(result);

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
      });
    }
  };

  updateAppointments = () => {
    var token = localStorage.getItem("token");

    BasePath.get(`/webresources/getappointments/${token}`).then(result => {
      this.setState({
        appointmentList: result.data
      });
      console.log(result);

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
      });
    });
  };

  UNSAFE_componentWillMount() {
    if (
      typeof this.props.location.state == "undefined" ||
      this.props.location.state === null
    ) {
      this.setState({ message: "" });
    } else {
      this.setState({ message: this.props.location.state.message });
      this.setState({ cn: "popup3" });
      this.togglePopup();
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    this.getAppointmentInfo();

    return (
      <div
        className="ui segment p-3 mb-2 "
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <br />
        <br />
        <div className="row ">
          <div className="col-sm">
            <div className="leftPad">
              <h1>Your appointments:</h1>
            </div>
          </div>
          <div className="col-sm">
            <div className="center">
              <Link //creates a link, styled like a button
                to="/BookAppointment" //telling to go to home, in adddog it should be accinfo
                type="button"
                className="btn mb-3"
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#1D3461",
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="row ">
          <div className="col-sm-1 right">
            <Hint />{" "}
          </div>
          <div className="col-sm-2 left ">Approved</div>
          <div className="col-sm left">
            {" "}
            <hr width="60%" size="8" align="center"></hr>
          </div>
        </div>
        <br />
        <div className="row ">
          <div className="col-sm right">
            <b>Appointment Type</b>
          </div>
          <div className="col-sm left">Start Time</div>
          <div className="col-sm left">End Time</div>
          <div className="col-sm left">
            <button
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                width: 150,
                display: "none"
              }}
            >
              Edit
            </button>
          </div>
          <div className="col-sm left">
            <button
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                width: 150,
                display: "none"
              }}
            >
              Make Payment
            </button>
          </div>
        </div>
        <br />

        <div>
          {this.state.approvedList.map(appointment => (
            <ApprovedAppointment
              key={appointment.idNumber}
              appointment={appointment}
              appointmentType={appointment.type.toUpperCase()}
              startTime={Moment(appointment.startTime).format("LL LT")}
              endTime={Moment(appointment.endTime).format("LL LT")}
            />
          ))}
        </div>

        <br />
        <br />
        <div className="row">
          <div className="col-sm-1 right">
            <Hint />{" "}
          </div>
          <div className="col-sm-2 left">Pending</div>
          <div className="col-sm left">
            {" "}
            <hr width="60%" size="8" align="center"></hr>
          </div>
        </div>
        <br />
        <div className="row ">
          <div className="col-sm right">
            <b>Appointment Type</b>
          </div>
          <div className="col-sm left">Start Time</div>
          <div className="col-sm left">End Time</div>
          <div className="col-sm left">
            <button
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                width: 150,
                display: "none"
              }}
            >
              Edit
            </button>
          </div>
          <div className="col-sm left">
            <button
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                width: 150,
                display: "none"
              }}
            >
              Cancel
            </button>
          </div>
        </div>
        <br />

        <div>
          {this.state.pendingList.map(appointment => (
            <PendingAppointment
              key={appointment.idNumber}
              appointment={appointment}
              appointmentType={appointment.type.toUpperCase()}
              startTime={Moment(appointment.startTime).format("LL LT")}
              endTime={Moment(appointment.endTime).format("LL LT")}
              updateAppointments={this.updateAppointments}
            />
          ))}
        </div>

        {/* <div className="row">
          <div className="col-sm-1 right">
            <Hint />{" "}
          </div>
          <div className="col-sm-2 left">Billing Information</div>
          <div className="col-sm left">
            {" "}
            <hr width="60%" size="8" align="center"></hr>
          </div>
        </div>
        <br />
        <br />
        <div className="pad">
          <div
            className="ui segment p-3 mb-2"
            style={{ backgroundColor: "#FFFFFF" }}
          ></div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm">
            <button
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                width: 150
              }}
            >
              Download
            </button>
          </div>
          <div className="col-sm">
            <button
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                width: 150
              }}
            >
              Print
            </button>
          </div>
        </div> */}
        <div>
          {this.state.showPopup ? (
            <Popup
              cn={this.state.cn}
              text={this.state.message}
              closePopup={this.togglePopup.bind(this)}
              bgColor={this.state.bgColor}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default ViewAppointments;
