import React from "react";
import "../../css/addDog.css";
import "../../css/reg.css";
import BasePath from "../../api/BasePath";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";
import AddDog2 from "./AddDog2";
import AddDog1 from "./AddDog1";

import { ReactComponent as Hint } from "../hint.svg";
const hint = () => (
  <div>
    {
      <svg width="25" height="25">
        <circle
          cx="11"
          cy="11"
          r="10"
          stroke="gray"
          stroke-width="1"
          fill="gray"
        />
        <text
          x="6"
          y="19"
          font-size="22px "
          fill="white"
          font-weight="bold"
          font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        >
          ?
        </text>
        Sorry, your browser does not support inline SVG.
      </svg>
    }
    <Hint />
  </div>
);

class AddDogMain extends React.Component {
  state = {
    images: [],
    fieldName: [],
    page: "",
    showPopup: false,
    cn: "",

    dogname: "",
    breed: "",
    dob: "",
    gender: "",
    weight: "",
    neuteredspayed: "",
    medication: "",
    allergies: "",
    physlimit: "",
    veterinarian: "",

    straingers: "",
    largerdogs: "",
    smalldogs: "",
    puppies: "",
    da2pp: "",
    rabies: "",
    bordetella: "",

    initialStates: false
  };

  // getCustomerInfo = async () => {
  //   //for editing not for Add
  //   const customerInfo = await BasePath.get("/webresources/sendCustomerInfo");

  //   if (this.state.initialStates === false) {
  //     this.setState({
  //       initialStates: true,
  //       username: customerInfo.data.username,
  //       password: customerInfo.data.password,
  //       confirmPassword: customerInfo.data.password,
  //       fname: customerInfo.data.firstName,
  //       lname: customerInfo.data.lastName,
  //       email: customerInfo.data.email,

  //       appt: customerInfo.data.appt,
  //       building: customerInfo.data.building,
  //       street: customerInfo.data.street,
  //       city: customerInfo.data.city,
  //       province: customerInfo.data.province,
  //       postcode: customerInfo.data.postcode,
  //       phone: customerInfo.data.phone,
  //       emergencyphone: customerInfo.data.emergencyphone,
  //       emergencyname: customerInfo.data.emergencyname
  //     });
  //   }
  // };

  onSearchSubmit1 = async () => {
    //should the name be different?
    //is called when go from step 1 to step 2
    this.setState({
      fieldName: [
        this.state.dogname,
        this.state.breed,
        this.state.dob,
        this.state.gender,
        this.state.weight,
        this.state.neuteredspayed,
        this.state.medication,
        this.state.allergies,
        this.state.physlimit,
        this.state.veterinarian
      ]
    });

    // onPrevious = () => {
    //   console.log("main");
    //   this.setState({ images: [] });
    //   console.log(this.state.images);
    // };

    var dname = this.state.dogname; //passing the state from the fields
    var br = this.state.breed;
    var dateofbirth = this.state.dob;
    var gen = this.state.gender;
    var wei = this.state.weight;
    var ns = this.state.neuteredspayed;
    var med = this.state.medication;
    var allerg = this.state.allergies;
    var plimit = this.state.physlimit;
    var vet = this.state.veterinarian;

    const response = await BasePath.put("/webresources/verify", {
      dname,
      br,
      dateofbirth,
      gen,
      wei
    });

    this.setState({ images: response.data });
  };

  onSearchSubmit2 = async () => {
    //called when step 2 submitted
    var dogname = this.state.fieldName[0];
    var breed = this.state.fieldName[1];

    var dob = this.state.fieldName[2];
    var gender = this.state.fieldName[3];
    var weight = this.state.fieldName[4];
    var neuteredspayed = this.state.fieldName[5];
    var medication = this.state.fieldName[6];
    var allergies = this.state.fieldName[7];
    var physlimit = this.state.fieldName[8];
    var veterinarian = this.state.fieldName[9];

    var straingers = this.state.straingers;
    var largerdogs = this.state.largerdogs;
    var smalldogs = this.state.smalldogs;
    var puppies = this.state.puppies;
    var da2pp = this.state.da2pp;
    var rabies = this.state.rabies;
    var bordetella = this.state.bordetella;

    const response = await BasePath.put("/webresources/register", {
      //what path??????????
      dogname,
      breed,
      dob,
      gender,
      weight,
      neuteredspayed,
      medication,
      allergies,
      physlimit,
      veterinarian,

      straingers,
      largerdogs,
      smalldogs,
      puppies,
      da2pp,
      rabies,
      bordetella
    });

    this.setState({ images: response.data });
  };

  togglePopup() {
    //just for the popup for validation
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChangeDogname = event => {
    //getting info from the fields, needed
    this.setState({ dogname: event.target.value });
  };

  handleChangeBreed = event => {
    this.setState({ breed: event.target.value });
  };

  handleChangeDob = event => {
    this.setState({ dob: event.target.value });
  };

  handleChangeGender = event => {
    this.setState({ gender: event.target.value });
  };

  handleChangeWeight = event => {
    this.setState({ weight: event.target.value });
  };

  handleChangeNeuteredspayed = event => {
    this.setState({ neuteredspayed: event.target.value });
  };

  handleChangeMedication = event => {
    this.setState({ medication: event.target.value });
  };

  handleChangeAllergies = event => {
    this.setState({ allergies: event.target.value });
  };

  handleChangePhyslimit = event => {
    this.setState({ physlimit: event.target.value });
  };

  handleChangeVeterinarian = event => {
    this.setState({ veterinarian: event.target.value });
  };

  handleChangeStraingers = event => {
    this.setState({ straingers: event.target.value });
  };

  handleChangeLargerdogs = event => {
    this.setState({ largerdogs: event.target.value });
  };

  handleChangeSmalldogs = event => {
    this.setState({ smalldogs: event.target.value });
  };

  handleChangePuppies = event => {
    this.setState({ puppies: event.target.value });
  };

  handleChangeDa2pp = event => {
    this.setState({ da2pp: event.target.value });
  };

  handleChangeRabies = event => {
    this.setState({ rabies: event.target.value });
  };

  handleChangeBordetella = event => {
    this.setState({ bordetella: event.target.value });
  };

  render() {
    //this.getCustomerInfo(); //just for editing

    var isValid = this.state.images; // images - message sent from the back

    if (isValid === "dog added") {
      //validation after submitting the 2nd step, add and edit
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/", //will be path for the UserAcc
              state: { message: "Dog added" }
            }}
          />
        </div>
      );
    } else if (isValid !== "Valid") {
      //will be the first step
      return (
        <div style={{ marginTop: "10px" }}>
          <AddDog1
            onChangeDogname={this.handleChangeDogname}
            onChangeBreed={this.handleChangeBreed}
            onChangeDob={this.handleChangeDob}
            onChangeGender={this.handleChangeGender}
            onChangeWeight={this.handleChangeWeight}
            onChangeNeuteredspayed={this.handleChangeNeuteredspayed}
            onChangeMedication={this.handleChangeMedication}
            onChangeAllergies={this.handleChangeAllergies}
            onChangePhyslimit={this.handleChangePhyslimit}
            onChangeVeterinarian={this.handleChangeVeterinarian}
            dogname={this.state.dogname}
            breed={this.state.breed}
            dob={this.state.dob}
            gender={this.state.gender}
            weight={this.state.weight}
            neuteredspayed={this.state.neuteredspayed}
            medication={this.state.medication}
            allergies={this.state.allergies}
            physlimit={this.state.physlimit}
            veterinarian={this.state.veterinarian}
            onSubmit={this.onSearchSubmit1}
            // onClick={() => {
            //   //no needed
            //   this.props.onChangePage("about"); //no needed
            // }}
          />
          <div>
            {this.state.showPopup ? ( //need it probably for error messages
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
    } else {
      //is valid - the second step
      return (
        <div style={{ marginTop: "10px" }}>
          <AddDog2
            onChangeStraingers={this.handleChangeStraingers}
            onChangeLargerdogs={this.handleChangeLargerdogs}
            onChangeSmalldogs={this.handleChangeSmalldogs}
            onChangePuppies={this.handleChangePuppies}
            onChangeDa2pp={this.handleChangeDa2pp}
            onChangeRabies={this.handleChangeRabies}
            onChangeBordetella={this.handleChangeBordetella}
            straingers={this.state.straingers}
            largerdogs={this.state.largerdogs}
            smalldogs={this.state.smalldogs}
            puppies={this.state.puppies}
            da2pp={this.state.da2pp}
            rabies={this.state.rabies}
            bordetella={this.state.bordetella}
            onSubmit={this.onSearchSubmit2} //calls onsearch submit, all the stuff is getting passed from main page to the step2
            // onClick={this.onPrevious} //don't need
          />
        </div>
      );
    }
  }
}

export default AddDogMain;
