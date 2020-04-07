import React from "react";

import BasePath from "../../api/BasePath";
import CreateUser from "./CreateUser";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";

class CreateUserMain extends React.Component {
  state = {
    images: [],
    page: "",
    showPopup: false,
    cn: "",
    username: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",

    appt: "",
    building: "",
    street: "",
    city: "",
    province: { key: 1, value: "Alberta" },
    postcode: "",
    phone: "",
    emergencyphone: "",
    emergencyname: "",

    provinces: [
      { key: 1, value: "Alberta" },
      { key: 2, value: "British Columbia" },
      { key: 3, value: "Manitoba" },
      { key: 4, value: "New Brunswick" },
      { key: 5, value: "Newfoundland and Labrador" },
      { key: 6, value: "Northwest Territories" },
      { key: 7, value: "Nova Scotia" },
      { key: 8, value: "Nunavut" },
      { key: 9, value: "Ontario" },
      { key: 10, value: "Prince Edward Island" },
      { key: 11, value: "Quebec" },
      { key: 12, value: "Saskatchewan" },
      { key: 13, value: "Yukon" },
    ],
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

  onSearchSubmit = async () => {
    var email = this.state.email;
    var username = this.state.username;
    var password = this.state.password;
    var confirmPassword = this.state.confirmPassword;
    var firstName = this.state.fname;
    var lastName = this.state.lname;
    var houseNum = this.state.appt;
    var buildingNum = this.state.building;
    var streetName = this.state.street;
    var city = this.state.city;
    var province = this.state.province.value;

    var postal = this.state.postcode;
    var phoneNumber = this.state.phone;
    var emergencyPhone = this.state.emergencyphone;
    var emergencyName = this.state.emergencyname;

    const reply = await BasePath.put("/webresources/verify", {
      username,
      password,
      confirmPassword,
      email,
    });

    console.log(reply.data);
    console.log(reply.status);
    this.setState({ images: reply.data });

    if (reply.data == "Valid") {
      const response = await BasePath.put("/webresources/register", {
        username,
        password,
        firstName,
        lastName,
        email,
        phoneNumber,
        emergencyPhone,
        emergencyName,

        address: {
          houseNum,
          buildingNum,
          streetName,
          city,
          province,
          postal,
        },
      });
      console.log(response.data);
      console.log(response.status);
      this.setState({ images: response.data });
    }

    if (this.state.images === "Username Already Exists") {
      this.setState({ cn: "popup1", message: "Username already exists" });
      this.togglePopup();
    } else if (this.state.images === "Email Already in Use") {
      this.setState({ cn: "popup1", message: "Email Already in Use" });
      this.togglePopup();
    } else if (this.state.images === "Passwords do not match") {
      this.setState({ cn: "popup2", message: "Passwords do not match" });
      this.togglePopup();
    } else if (this.state.images === "account registered") {
      this.setState({ cn: "popup3", bgColor: "grey" });
      this.togglePopup();
      this.clearStates();
    }
  };

  clearStates = () => {
    // if (this.state.initialStates === true) {
    this.setState({
      initialStates: false,
      username: "",
      password: "",
      confirmPassword: "",
      fname: "",
      lname: "",
      email: "",
      appt: "",
      building: "",
      street: "",
      city: "",
      province: "",
      postcode: "",
      phone: "",
      emergencyphone: "",
      emergencyname: "",
    });
    document.getElementById("p1").value = "";
    document.getElementById("p2").value = "";
    //}
  };

  onChangePage = () => {
    this.props.onClick(this.state.page);
    console.log("here");
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleChangeConfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleChangeFname = (event) => {
    this.setState({ fname: event.target.value });
  };

  handleChangeLname = (event) => {
    this.setState({ lname: event.target.value });
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangeAppt = (event) => {
    this.setState({ appt: event.target.value });
  };

  handleChangeBuilding = (event) => {
    this.setState({ building: event.target.value });
  };

  handleChangeStreet = (event) => {
    this.setState({ street: event.target.value });
  };

  handleChangeCity = (event) => {
    this.setState({ city: event.target.value });
  };

  handleChangeProvince = (selectedOption) => {
    this.setState({ province: selectedOption }, () =>
      console.log(`Option selected:`, this.state.province)
    );
  };

  handleChangePostcode = (event) => {
    this.setState({ postcode: event.target.value });
  };

  handleChangePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  handleChangeEmergencyphone = (event) => {
    this.setState({ emergencyphone: event.target.value });
  };

  handleChangeEmergencyname = (event) => {
    this.setState({ emergencyname: event.target.value });
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <CreateUser
          onChangeUsername={this.handleChangeUsername}
          onChangePassword={this.handleChangePassword}
          onChangeConfirmPassword={this.handleChangeConfirmPassword}
          onChangeFname={this.handleChangeFname}
          onChangeLname={this.handleChangeLname}
          onChangeEmail={this.handleChangeEmail}
          onChangeAppt={this.handleChangeAppt}
          onChangeBuilding={this.handleChangeBuilding}
          onChangeStreet={this.handleChangeStreet}
          onChangeCity={this.handleChangeCity}
          onChangeProvince={this.handleChangeProvince}
          onChangePostcode={this.handleChangePostcode}
          onChangePhone={this.handleChangePhone}
          onChangeEmergencyphone={this.handleChangeEmergencyphone}
          onChangeEmergencyname={this.handleChangeEmergencyname}
          username={this.state.username}
          fname={this.state.fname}
          lname={this.state.lname}
          email={this.state.email}
          appt={this.state.appt}
          building={this.state.building}
          street={this.state.street}
          city={this.state.city}
          province={this.state.province}
          postcode={this.state.postcode}
          phone={this.state.phone}
          emergencyphone={this.state.emergencyphone}
          emergencyname={this.state.emergencyname}
          onSubmit={this.onSearchSubmit}
          onClick={() => {
            this.props.onChangePage("about"); ////////////
          }}
          clearStates={this.clearStates}
          provinces={this.state.provinces}
        />
        <div>
          {this.state.showPopup ? (
            <Popup
              cn={this.state.cn}
              text={this.state.images}
              closePopup={this.togglePopup.bind(this)}
              bgColor={this.state.bgColor}
            />
          ) : null}
        </div>
      </div>
    );
    // }
  }
}

export default CreateUserMain;
