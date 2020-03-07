import React from "react";
import "../css/reg.css";
import "../css/viewAppointments.css";
import { Link } from "react-router-dom";

import { ReactComponent as Hint } from "./hint.svg";
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
  render() {
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
            <b>AppointmentType</b>
          </div>
          <div className="col-sm left">StartTime</div>
          <div className="col-sm left">EndTime</div>
          <div className="col-sm left">
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
                width: 150
              }}
            >
              Make Payment
            </button>
          </div>
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
            <b>AppointmentType</b>
          </div>
          <div className="col-sm left">StartTime</div>
          <div className="col-sm left">EndTime</div>
          <div className="col-sm left">
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
                width: 150
              }}
            >
              Cancel
            </button>
          </div>
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
      </div>
    );
  }
}

export default ViewAppointments;
