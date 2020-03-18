import React from "react";

import dog from "../images/logo.png";

import "../css/head.css";
import { NavLink } from "react-router-dom";

import BasePath from "../api/BasePath";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header1 extends React.Component {
  state = {
    initialStates: false,
    username: ""
  };

  getCustomerInfo = async () => {
    var token = localStorage.getItem("token");

    const customerInfo = await BasePath.get(
      `/webresources/RetrieveUser/${token}`
    );

    if (
      this.state.initialStates === false &&
      customerInfo.data !== "Authentication error, bad token" &&
      customerInfo.data !== ""
    ) {
      this.setState({
        initialStates: true,
        username: customerInfo.data.username
      });
    }
  };

  logOut = () => {
    localStorage.clear();
    this.setState({ initialStates: false, username: "" });
  };

  render() {
    this.getCustomerInfo();
    var username = this.state.username;

    if (username !== "" && localStorage.getItem("token") != null) {
      return (
        <div>
          <div className="d-flex justify-content-between">
            <NavLink to="/">
              <img
                src={dog}
                alt="dog"
                height="35"
                width="35"
                className="align-self-end"
              />
            </NavLink>
            <h2 className="title mr-3">K9 FUN FAMILY</h2>
          </div>
          {/* TODO: find a way to keep track of current page for highlighting the tab, maybe store in session? */}
          <div
            className="container-head d-flex align-items-center d-flex justify-content-around header"
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <div>
              <NavLink to="/" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Home</div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/Services" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Services</div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/Gallery" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Gallery</div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/Testimonials" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Testimonials</div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/FAQ" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">FAQ</div>
              </NavLink>
            </div>
            <div className="dropDown">
              <UncontrolledDropdown>
                <DropdownToggle nav caret style={{ color: "#707070" }}>
                  <div className="pt-3 pb-3">Account</div>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to="/Profile" style={{ color: "#707070" }}>
                      Profile
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      to="/ViewAppointments"
                      style={{ color: "#707070" }}
                    >
                      View Appointments
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <div style={{ color: "#707070" }} onClick={this.props.showDisableAccount}>
              Disable Account
            </div>
            </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink
                      onClick={this.logOut}
                      to="/"
                      style={{ color: "#707070" }}
                    >
                      Log Out
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="d-flex justify-content-between">
            <NavLink to="/">
              <img
                src={dog}
                alt="dog"
                height="35"
                width="35"
                className="align-self-end"
              />
            </NavLink>
            <h2 className="title mr-3">K9 FUN FAMILY</h2>
          </div>
          {/* TODO: find a way to keep track of current page for highlighting the tab, maybe store in session? */}
          <div
            className="container-head d-flex align-items-center d-flex justify-content-around header"
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <div>
              <NavLink to="/" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Home</div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/Services" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Services</div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/Gallery" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Gallery</div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/Testimonials" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Testimonials</div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/FAQ" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">FAQ</div>
              </NavLink>
            </div>
            <div style={{ color: "#707070" }} onClick={this.props.showLogin}>
              <div className="pt-3 pb-3">Login/Register</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Header1;
