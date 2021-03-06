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
    medList: "",
    allList: "",
    train: false,
    physlimit: "",
    veterinarian: "",

    strangers: "",
    largerdogs: "",
    smalldogs: "",
    puppies: "",
    da2pp: "",
    rabies: "",
    bordetella: "",

    initialStates: false,
  };

  onSearchSubmit1 = async () => {
    this.setState({ images: "Valid" });
  };

  onPrevious = () => {
    console.log("main");
    this.setState({ images: [] });
    console.log(this.state.images);
  };

  onSearchSubmit2 = async () => {
    //called when step 2 submitted

    var medList = this.state.medication;
    var allList = this.state.allergies;

    var dogname = this.state.dogname;
    var breed = this.state.breed;

    var dob = this.state.dob;
    var gender = this.state.gender;
    var weight = this.state.weight;
    var neuteredspayed = this.state.neuteredspayed;
    var physlimit = this.state.physlimit;
    var veterinarianName = this.state.veterinarian;

    console.log(this.state.strangers);
    var dogId = this.state.dogId;
    var strangers = this.state.strangers;
    var largerdogs = this.state.largerdogs;
    var smalldogs = this.state.smalldogs;
    var puppies = this.state.puppies;
    var train = this.state.train;

    var da2pp = this.state.da2pp;
    var rabies = this.state.rabies;
    var bordetella = this.state.bordetella;

    console.log(veterinarianName);

    var token = localStorage.getItem("token");

    const response = await BasePath.put("/webresources/registerDog", {
      token: token,
      idNumber: dogId,
      name: dogname,
      breed: breed,
      dateOfBirth: dob,
      gender: gender,
      weight: weight,
      spayedNeutered: neuteredspayed,
      medications: medList,
      allergies: allList,
      physLimit: physlimit,
      veterinarian: {
        vetName: veterinarianName,
      },

      strangerComfortable: strangers,
      largeDogFriendly: largerdogs,
      smallDogFriendly: smalldogs,
      puppyFriendly: puppies,
      vaccines: {
        da2pp: da2pp,
        rabies: rabies,
        bordetella: bordetella,
      },
      active: true,
      trainingDone: train,
    });

    this.setState({ images: response.data });
  };

  togglePopup() {
    //for the popup for validation
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  handleChangeDogname = (event) => {
    //getting info from the fields
    this.setState({ dogname: event.target.value });
  };

  handleChangeBreed = (event) => {
    this.setState({ breed: event.target.value });
  };

  handleChangeDob = (event) => {
    this.setState({ dob: event.target.value });
  };

  handleChangeGender = (event) => {
    console.log(event.target.value);
    this.setState({ gender: event.target.value });
  };

  handleChangeWeight = (event) => {
    this.setState({ weight: event.target.value });
  };

  handleChangeNeuteredspayed = (event) => {
    this.setState({ neuteredspayed: event.target.value });
  };

  handleChangeMedication = (event) => {
    this.setState({ medication: event.target.value });
  };

  handleChangeAllergies = (event) => {
    this.setState({ allergies: event.target.value });
  };

  handleChangePhyslimit = (event) => {
    this.setState({ physlimit: event.target.value });
  };

  handleChangeVeterinarian = (event) => {
    this.setState({ veterinarian: event.target.value });
  };

  handleChangeStrangers = (event) => {
    this.setState({ strangers: event.target.value });
  };

  handleChangeLargerdogs = (event) => {
    this.setState({ largerdogs: event.target.value });
  };

  handleChangeSmalldogs = (event) => {
    this.setState({ smalldogs: event.target.value });
  };

  handleChangePuppies = (event) => {
    this.setState({ puppies: event.target.value });
  };

  handleChangeDa2pp = (event) => {
    this.setState({ da2pp: event.target.value });
  };

  handleChangeRabies = (event) => {
    this.setState({ rabies: event.target.value });
  };

  handleChangeBordetella = (event) => {
    this.setState({ bordetella: event.target.value });
  };

  render() {
    var isValid = this.state.images; // images - message sent from the back

    if (isValid === "Successfully added") {
      //validation after submitting the 2nd step
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/Profile",
              state: { message: "Dog added" },
            }}
          />
        </div>
      );
    } else if (isValid !== "Valid") {
      //the first step
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
    } else {
      //is valid - the second step
      return (
        <div style={{ marginTop: "10px" }}>
          <AddDog2
            onChangeStrangers={this.handleChangeStrangers}
            onChangeLargerdogs={this.handleChangeLargerdogs}
            onChangeSmalldogs={this.handleChangeSmalldogs}
            onChangePuppies={this.handleChangePuppies}
            onChangeDa2pp={this.handleChangeDa2pp}
            onChangeRabies={this.handleChangeRabies}
            onChangeBordetella={this.handleChangeBordetella}
            strangers={this.state.strangers}
            largerdogs={this.state.largerdogs}
            smalldogs={this.state.smalldogs}
            puppies={this.state.puppies}
            da2pp={this.state.da2pp}
            rabies={this.state.rabies}
            bordetella={this.state.bordetella}
            onSubmit={this.onSearchSubmit2} //calls onsearch submit, all the stuff is getting passed from main page to the step2
            onClickPrev={this.onPrevious}
          />
        </div>
      );
    }
  }
}

export default AddDogMain;
