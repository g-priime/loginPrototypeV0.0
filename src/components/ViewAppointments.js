import React from "react";
import "../css/reg.css";
import "../css/viewAppointments.css";
import { Link } from "react-router-dom";

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
     <div  className="row leftPad">Approved <hr width="70%" size="8" align="center"></hr></div>   
      </div>
    );
  }
}

export default ViewAppointments;
