import React from "react";
import dog from "./tempdog.JPG";
import "../css/head.css";
import { Link } from "react-router-dom";

import BasePath from "../api/BasePath";
import { DropdownButton, Dropdown, ButtonGroup, Button } from "react-bootstrap";

class Header1 extends React.Component {
  state = {
    initialStates: false,
    username: ""
  };

  getCustomerInfo = async () => {
    //localStorage.clear();
    var token = localStorage.getItem("token");

    const customerInfo = await BasePath.get(
      `/webresources/RetrieveUser/${token}`
    );

    if (this.state.initialStates === false) {
      this.setState({
        initialStates: true,
        username: customerInfo.data.username
      });
    }
  };

  render() {
    this.getCustomerInfo();

    if (this.state.username !== null) {
      return (
        <div>
          <div className="d-flex justify-content-between">
            <Link to="/">
              <img
                src={dog}
                alt="dog"
                height="30"
                width="40"
                className="align-self-end"
              />
            </Link>
            <h2 className="title mr-3">K9 FUN FAMILY</h2>
          </div>
          {/* TODO: find a way to keep track of current page for highlighting the tab, maybe store in session? */}
          <div
            className="container-head d-flex align-items-center d-flex justify-content-around header"
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <div>
              <Link to="/" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Home</div>
              </Link>
            </div>
            <div>
              <Link to="/Services" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Services</div>
              </Link>
            </div>
            <div>
              <Link to="/Gallery" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Gallery</div>
              </Link>
            </div>
            <div>
              <Link to="/Testimonials" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Testimonials</div>
              </Link>
            </div>
            <div>
              <Link to="/FAQ" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">FAQ</div>
              </Link>
            </div>
            <div className="pt-3 pb-3" style={{ color: "#707070" }}>
              <Dropdown>
                <Dropdown.Toggle variant="btn btn-link pt-3 pb-3" id="dropdown-basic" style={{ color: "#707070" }}>
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="d-flex justify-content-between">
            <Link to="/">
              <img
                src={dog}
                alt="dog"
                height="30"
                width="40"
                className="align-self-end"
              />
            </Link>
            <h2 className="title mr-3">K9 FUN FAMILY</h2>
          </div>
          {/* TODO: find a way to keep track of current page for highlighting the tab, maybe store in session? */}
          <div
            className="container-head d-flex align-items-center d-flex justify-content-around header"
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <div>
              <Link to="/" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Home</div>
              </Link>
            </div>
            <div>
              <Link to="/Services" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Services</div>
              </Link>
            </div>
            <div>
              <Link to="/Gallery" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Gallery</div>
              </Link>
            </div>
            <div>
              <Link to="/Testimonials" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">Testimonials</div>
              </Link>
            </div>
            <div>
              <Link to="/FAQ" style={{ color: "#707070" }}>
                <div className="pt-3 pb-3">FAQ</div>
              </Link>
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
