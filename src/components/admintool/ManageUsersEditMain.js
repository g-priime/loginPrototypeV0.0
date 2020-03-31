import React from "react";

import BasePath from "../../api/BasePath";
import ManageUsers from "./ManageUsers";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";

class ManageUsersEditMain extends React.Component {
  state = {
    images: [],
    fieldName: [],
    page: "",
    showPopup: false,
    cn: "",
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

    initialStates: false
  };

  getCustomerInfo = async () => {
    var token = localStorage.getItem("token");

    const customerInfo = await BasePath.get(
      `/webresources/RetrieveUser/${token}`
    );

    if (this.state.initialStates === false) {
      this.setState({
        initialStates: true,
        username: customerInfo.data.username,
        password: customerInfo.data.password,
        confirmPassword: customerInfo.data.password,
        fname: customerInfo.data.firstName,
        lname: customerInfo.data.lastName,
        email: customerInfo.data.email,

        appt: customerInfo.data.address.houseNum,
        building: customerInfo.data.address.buildingNum,
        street: customerInfo.data.address.streetName,
        city: customerInfo.data.address.city,
        province: customerInfo.data.address.province,
        postcode: customerInfo.data.address.postal,
        phone: customerInfo.data.phoneNumber,
        emergencyphone: customerInfo.data.emergencyPhone,
        emergencyname: customerInfo.data.emergencyName
      });
    }
  };

  onSearchSubmit = async () => {
    this.setState({
      fieldName: [
        this.state.username,
        this.state.password,
        this.state.confirmPassword,
        this.state.fname,
        this.state.lname,
        this.state.email
      ]
    });

    var token = localStorage.getItem("token");
    var email = this.state.email;

    var username = this.state.fieldName[0];

    var firstName = this.state.fieldName[3];
    var lastName = this.state.fieldName[4];
    var email = this.state.fieldName[5];

    var houseNum = this.state.appt;
    var buildingNum = this.state.building;
    var streetName = this.state.street;
    var city = this.state.city;
    var province = this.state.province;
    var postal = this.state.postcode;
    var phoneNumber = this.state.phone;
    var emergencyPhone = this.state.emergencyphone;
    var emergencyName = this.state.emergencyname;

    const response = await BasePath.put("/webresources/checkEditCustomer", {
      token,
      email,
      username,

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
        postal
      }
    });

    console.log(response.data);
    console.log(response.status);
    this.setState({ images: response.data });

    if (
      this.state.images === "Username Already Exists" ||
      this.state.images === "Username already taken."
    ) {
      this.setState({ cn: "popup1" });
      this.togglePopup();
    } else if (this.state.images === "Passwords do not match") {
      this.setState({ cn: "popup2" });
      this.togglePopup();
    } else if (this.state.images === "Email Already in Use") {
      this.setState({ cn: "popup6" });
      this.togglePopup();
    }
  };

  onHome = event => {
    event.preventDefault();
    this.props.onClick("home");
    console.log("main event");
  };

  onChangePage = () => {
    this.props.onClick(this.state.page);
    console.log("here");
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChangeUsername = event => {
    this.setState({ username: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleChangeConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  handleChangeFname = event => {
    this.setState({ fname: event.target.value });
  };

  handleChangeLname = event => {
    this.setState({ lname: event.target.value });
  };

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleChangeAppt = event => {
    this.setState({ appt: event.target.value });
  };

  handleChangeBuilding = event => {
    this.setState({ building: event.target.value });
  };

  handleChangeStreet = event => {
    this.setState({ street: event.target.value });
  };

  handleChangeCity = event => {
    this.setState({ city: event.target.value });
  };

  handleChangeProvince = event => {
    this.setState({ province: event.target.value });
  };

  handleChangePostcode = event => {
    this.setState({ postcode: event.target.value });
  };

  handleChangePhone = event => {
    this.setState({ phone: event.target.value });
  };

  handleChangeEmergencyphone = event => {
    this.setState({ emergencyphone: event.target.value });
  };

  handleChangeEmergencyname = event => {
    this.setState({ emergencyname: event.target.value });
  };

  render() {
    this.getCustomerInfo();

    var isValid = this.state.images;

    if (isValid === "Updated") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/ManageUsers",
              state: { message: "Account Updated" }
            }}
          />
        </div>
      );
    } else if (isValid !== "Valid") {
      return (
        <div style={{ marginTop: "10px" }}>
          <ManageUsers
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
            password={this.state.password}
            confirmPassword={this.state.confirmPassword}
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
              this.props.onChangePage("about");
            }}
          />
          <div>
            {this.state.showPopup ? (
              <Popup
                cn={this.state.cn}
                text={this.state.images}
                closePopup={this.togglePopup.bind(this)}
                bgColor="red"
              />
            ) : null}
          </div>
        </div>
      );
    }
  }
}

export default ManageUsersEditMain;
