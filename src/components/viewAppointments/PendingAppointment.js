import React from "react";
import { Link } from "react-router-dom";
import BasePath from "../../api/BasePath";

class PendingAppointment extends React.Component {
  deleteAppointment = async () => {
    console.log(this.props.appointment.idNumber);
    let token = localStorage.getItem("token");
    let idNumber = this.props.appointment.idNumber;

    const response = await BasePath.put("/webresources/deleteAppointment", {
      token,
      idNumber
    });
    console.log(response);
  };

  render() {
    return (
      <div className="row ">
        <div className="col-sm right">
          <b>{this.props.appointmentType}</b>
        </div>
        <div className="col-sm left">{this.props.startTime}</div>
        <div className="col-sm left">{this.props.endTime}</div>
        <div className="col-sm left">
        <Link
          to={{pathname:"EditAppointment", state:{appointment: this.props.appointment}}}
          type="button"
          className="btn mb-3"
          style={{
            fontWeight: "bold",
            backgroundColor: "#1D3461",
            color: "#ECEBE7",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            width: 150,
            marginTop: "-3%"
          }}
        >
          Edit 
        </Link>
        </div>
        <div className="col-sm left">
          <button
            onClick={this.deleteAppointment}
            className="btn mb-3"
            style={{
              fontWeight: "bold",
              backgroundColor: "#1D3461",
              color: "#ECEBE7",
              boxShadow:
                "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
              width: 150,
              marginTop: "-3%"
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default PendingAppointment;
