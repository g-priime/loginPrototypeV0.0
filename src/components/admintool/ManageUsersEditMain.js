import React from "react";

import BasePath from "../../api/BasePath";
import ManageUsers from "./ManageUsers";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";
import PopUpConfirm from "../PopUpConfirm";

class ManageUsersEditMain extends React.Component {
  state = {
    images: [],
    page: "",
    showPopup: false,
    showCon: false,
    userList:[],
    cn: "",
    bgColor: "red",

    username: "",
    password: "",
    confirmPassword: "",
    fname: "",
    lname: "",
    email: "",
    delUser: "",

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

  onSearchSubmit = async () => {

    var token = localStorage.getItem("token");
    //var email = this.state.email;

    var username = this.state.username;

    var firstName = this.state.fname;
    var lastName = this.state.lname;
    var email = this.state.email;
    //var emailCheck = email;

    var houseNum = this.state.appt;
    var buildingNum = this.state.building;
    var streetName = this.state.street;
    var city = this.state.city;
    var province = this.state.province;
    var postal = this.state.postcode;
    var phoneNumber = this.state.phone;
    var emergencyPhone = this.state.emergencyphone;
    var emergencyName = this.state.emergencyname;

    const response = await BasePath.put("/webresources/update",{
    
      token,
      email,
      username,

      firstName,
      lastName,

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
    } else if (this.state.images === "Not Updated") {
      this.setState({ cn: "popup2" });
      this.togglePopup();
    } else if (this.state.images === "Email Already in Use") {
      this.setState({ cn: "popup6" });
      this.togglePopup();
    } else if(this.state.images === "Updated") {
      this.updateList();
      this.setState({ cn: "popup3", bgColor: "grey" });
      this.togglePopup();
      this.clearStates();
    }
  };

  editUser = user => {

    console.log('in edit user');
    var build;
    var street;
    var prov;
    var post;
    var house;
    var city;

    if (user.address != null) {
      build = user.address.buildingNum;
      street = user.address.streetName;
      prov = user.address.province;
      post = user.address.postal;
      house = user.address.houseNum;
      city = user.address.city;
    }

    this.setState({
      initialStates: true,
      username: user.username,
      password: user.password,
      confirmPassword: user.password,
      fname: user.firstName,
      lname: user.lastName,
      email: user.email,

      appt: house,
      building: build,
      street: street,
      city: city,
      province: prov,
      postcode: post,
      phone: user.phoneNumber,
      emergencyphone: user.emergencyPhone,
      emergencyname: user.emergencyName
    });
  };

  UNSAFE_componentWillMount() {
    this.updateList();
  }

  updateList = () => {
    this.setState({userList: []});
    var token = localStorage.getItem("token");
    BasePath.get(`webresources/RetrieveUsers/${token}`).then(result => {
      console.log(result.data[0].isActive);
      for (var i = 0;i < result.data.length;i++) {
        if (result.data[i].isActive == true) {
          this.setState({ userList: [...this.state.userList, result.data[i]] })
        }
      }
    });
  }

  delUser = () => {
    var token = localStorage.getItem('token');
    console.log(token);
    BasePath.put('/webresources/DeleteUser', {
      token: token,
      username: this.state.delUser.username
    }).then(result => {
      this.updateList();
    });
  }

  deleteUser = user => {
    this.setState({ delUser: user });
    this.setState({ showCon: true });
  };

  dontConfirm = () => {
    this.setState({ showCon: false });
  }

  confirm = () => {
    this.setState({ showCon: false });
    this.delUser();
  }

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
         emergencyname: ""
       });
     //}
   };

  render() {
    // this.getCustomerInfo();

    var isValid = this.state.images;
/*
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
    } else 
    */
    if (isValid !== "Valid" || isValid === "Updated") {
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
            userList={this.state.userList}
            editUser={this.editUser}
            deleteUser={this.deleteUser}
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

            clearStates={this.clearStates}
          />
          {this.state.showCon && this.state.delUser != null ? (
            <PopUpConfirm dontConfirm={this.dontConfirm} confirm={this.confirm} text={'Are you sure you want to delete ' + this.state.delUser.username + '?'} cn="popup3" />
          ) : null}
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
    }
  }
}

export default ManageUsersEditMain;
