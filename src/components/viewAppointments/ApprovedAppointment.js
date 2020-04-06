import React from "react";
import { Link } from "react-router-dom";
import BasePath from "../../api/BasePath";
import PopUpConfirm from "../PopUpConfirm";

class ApprovedAppointment extends React.Component {
  state = {
    isOpen: false,
    showCon: false
  };

  deleteAppointment = () => {
    let token = localStorage.getItem("token");
    let idNumber = this.props.appointment.idNumber;

    BasePath.put("/webresources/deleteAppointment", {
      token,
      idNumber
    }).then(result => {
      this.props.updateAppointments();
    });
  };

  showConAndDel = () => {
    this.setState({ showCon: true });
  };

  dontConfirm = () => {
    this.setState({ showCon: false });
  };

  confirm = () => {
    this.setState({ showCon: false });
    this.deleteAppointment();
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
            onClick={this.showConAndDel}
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
            Cancel
          </button>
        </div>

        {this.state.showCon ? (
          <PopUpConfirm
            dontConfirm={this.dontConfirm}
            confirm={this.confirm}
            text={
              "Delete " +
              this.props.appointment.type +
              " for " +
              this.props.startTime +
              "?"
            }
            cn="popup3"
          />
        ) : null}
      </div>
    );
  }
}

export default ApprovedAppointment;
