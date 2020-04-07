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

    appt: "",
    building: "",
    street: "",
    city: "",
    province: "",
    postcode: "",
    phone: "",
    emergencyphone: "",
    emergencyname: ""
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
    var username = this.state.email;
    var password = this.state.password;
    var firstName = this.state.fname;
    var lastName = this.state.lname;
    var houseNum = this.state.appt;
    var buildingNum = this.state.building;
    var streetName = this.state.street;
    var city = this.state.city;
    var province = this.state.province;
    var postal = this.state.postcode;
    var phoneNumber = this.state.phone;
    var emergencyPhone = this.state.emergencyphone;
    var emergencyName = this.state.emergencyname;

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
        postal
      }
    });

    console.log(response.data);
    console.log(response.status);
    this.setState({ images: response.data });

    if (this.state.images === "Username Already Exists") {
      this.setState({ cn: "popup1", message: "Username already exists" });
      this.togglePopup();
    } else if (this.state.images === "Passwords do not match") {
      this.setState({ cn: "popup2", message: "Passwords do not match" });
      this.togglePopup();
    }
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
    var isValid = this.state.images;

    // if (isValid === "account registered") {
    //   return (
    //     <div style={{ marginTop: "10px" }}>
    //       <Redirect
    //         to={{
    //           pathname: "/CreateUser", //redirect to the where?
    //           state: { message: "Account Registered" }
    //         }}
    //       />
    //     </div>
    //   );
    if (isValid !== "Valid" || isValid === "Updated") {
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
          />
          <div>
            {this.state.showPopup ? (
              <Popup
                cn={this.state.cn}
                text={this.state.message}
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

export default CreateUserMain;
