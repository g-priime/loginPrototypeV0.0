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
        <div className="leftPad">
          <h1>Your appointments:</h1>
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
        <br />
        <div className="row">
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
      </div>
    );
  }
}

export default ViewAppointments;
