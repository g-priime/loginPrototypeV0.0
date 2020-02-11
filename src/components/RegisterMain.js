import React from "react";

import BasePath from "../api/BasePath";
import RegisterPage from "./RegisterPage";
import Register2 from "./Register2";
import HomePage from "./HomePage";
import Header from "./Header";
import Register1 from "./Register1";
import Register3 from "./Register3";
import { Redirect } from "react-router-dom";

class RegisterMain extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { images: [], fieldName: [], page: "" };

  onSearchSubmit1 = async (
    username,
    password,
    confirmPassword,
    fname,
    lname,
    email
  ) => {
    this.setState({
      fieldName: [username, password, confirmPassword, fname, lname, email]
    });

    const response = await BasePath.put("/webresources/verify", {
      username,
      password,
      confirmPassword
    });

    console.log(response.data);
    console.log(response.status);
    this.setState({ images: response.data });
  };

  onSearchSubmit2 = async (
    appt,
    building,
    street,
    city,
    province,
    postcode,
    phone,
    emergencyphone,
    emergencyname
  ) => {
    var username = this.state.fieldName[0];
    var password = this.state.fieldName[1];

    var fname = this.state.fieldName[3];
    var lname = this.state.fieldName[4];
    var email = this.state.fieldName[5];

    const response = await BasePath.put("/webresources/register2", {
      username,
      password,
      fname,
      lname,
      email,
      appt,
      building,
      street,
      city,
      province,
      postcode,
      phone,
      emergencyphone,
      emergencyname
    });

    console.log(response.data);
    console.log(response.status);
    this.setState({ images: response.data });

  };

  onPrevious = () => {
    console.log("main");
    this.setState({ images: [] });
    console.log(this.state.images);
  };

  onHome = event => {
    event.preventDefault();

    this.props.onClick("home");

    console.log("main event");
    //this.setState({ images: [] });
    //console.log(this.state.images);
  };

  onChangePage = () => {
    //event.preventDefault();

    this.props.onClick(this.state.page);
    console.log("here");
  };

  render() {
    var isValid = this.state.images;

    if (isValid === "account registered") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/"
            }}
          />
          <div>{this.state.images}</div>
        </div>
      );
    } else if (isValid !== "Valid") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Register1
            onSubmit={this.onSearchSubmit1}
            onClick={() => {
              this.props.onChangePage("about");
            }}
          />
          <div>{this.state.images}</div>
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "10px" }}>
          <Register2
            onSubmit={this.onSearchSubmit2}
            onClick={this.onPrevious}
          />
          <div>{this.state.images}</div>
        </div>
      );
    }
  }
}

export default RegisterMain;
