import React from "react";

import BasePath from "../../api/BasePath";
import BookTraining1 from "./BookTraining1";
import BookTraining2 from "./BookTraining2";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";

import Moment from "moment";
import BookTraining3 from "./BookTraining3";

class BookTrainingMain extends React.Component {
  state = {
    response: "",
    fieldName: [],
    page: "",
    showPopup: false,
    cn: "",

    dog: "",
    selectedDogs: [],
    dogs: [],
    initialStates: false,
    cost: "",
    baby: "No"
  };

  getDogs = async () => {
    var token = localStorage.getItem("token");
    const response = await BasePath.get(`/webresources/RetrieveDogs/${token}`);

    const dogs = response.data;
    var dogArray = [];
    dogs.map(doggy =>
      dogArray.push({ key: doggy.idNumber, value: doggy.name })
    );

    if (!this.state.initialStates) {
      this.setState({ dogs: dogArray, initialStates: true, selectedDogs: [] });
    }
  };

  onSearchSubmit1 = async () => {
    this.setState({
      fieldName: [
        this.state.selectedDogs,
        this.state.startTime,
        this.state.endTime,
        this.state.grooming,
        this.state.comments,
        //this.state.sessionId
        this.state.baby
      ]
    });

    var token = localStorage.getItem("token");
    var dogs = [];
    this.state.selectedDogs.map(doggy => dogs.push(doggy.key));
    var dogString = dogs.toString();
    var startTime = this.state.startTime;
    var formattedStart = Moment(startTime).format("YYYY-MM-DD hh:mm:ss");
    var endTime = this.state.endTime;
    var formattedEnd = Moment(endTime).format("YYYY-MM-DD hh:mm:ss");

    var grooming = "false";
    if (this.state.grooming === "Yes") {
      grooming = "true";
    }
    var type = "boarding";

    console.log(this.state.dog);

    const response = await BasePath.put("/webresources/calculatecost", {
      token,
      dogString,
      formattedStart,
      formattedEnd,
      grooming,
      type
    });

    console.log(response);
    this.setState({
      response: response.data.message,
      cost: response.data.total
    });

    if (this.state.response === "Old startTime is incorrect") {
      this.setState({ cn: "popup4" });
      this.togglePopup();
    } else if (this.state.response === "New startTimes do not match") {
      this.setState({ cn: "popup5" });
      this.togglePopup();
    }
  };

  onSearchSubmit2 = async () => {
    var token = localStorage.getItem("token");

    var selectedDogs = [];
    this.state.fieldName[0].map(doggy => selectedDogs.push(doggy.key));
    var dogIdNumber = selectedDogs.toString();
    var startTime = Moment(this.state.fieldName[1]).format(
      "YYYY-MM-DD hh:mm:ss"
    );
    var endTime = Moment(this.state.fieldName[2]).format("YYYY-MM-DD hh:mm:ss");
    var grooming = "false";
    if (this.state.fieldName[3] === "Yes") {
      grooming = "true";
    }
    var additionalComments = this.state.fieldName[4];
    var total = this.state.cost;

    const response = await BasePath.put("/webresources/bookboarding", {
      token,
      dogIdNumber,
      startTime,
      endTime,
      total,
      additionalComments,
      grooming
    });

    this.setState({ response: response.data });

    if (this.state.response === "Old startTime is incorrect") {
      this.setState({ cn: "popup4" });
      this.togglePopup();
    } else if (this.state.response === "New startTimes do not match") {
      this.setState({ cn: "popup5" });
      this.togglePopup();
    }
  };

  onPrevious = () => {
    this.setState({ response: "" });
  };

  toDetails = () => {
    this.setState({ response: "Details" });
  };

  proceedToPayment = () => {
    this.setState({ response: "Payment" });
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleChangeDog = selectedOption => {
    this.setState({ selectedDogs: selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedDogs)
    );
  };
  handleChangeStartTime = event => {
    this.setState({ startTime: event.target.value });
  };
  handleChangeEndTime = event => {
    this.setState({ endTime: event.target.value });
  };
  handleChangeComments = event => {
    this.setState({ comments: event.target.value });
  };

  handleChangeBaby = event => {
    this.setState({ baby: event.target.value });
  };
  handleChangeCat = event => {
    this.setState({ cat: event.target.value });
  };
  handleChangeNewDog = event => {
    this.setState({ newDog: event.target.value });
  };
  handleChangeSignificantOther = event => {
    this.setState({ significantOther: event.target.value });
  };
  handleChangeMembers = event => {
    this.setState({ members: event.target.value });
  };
  handleChangeChildren = event => {
    this.setState({ children: event.target.value });
  };
  handleChangeHome = event => {
    this.setState({ home: event.target.value });
  };

  handleChangeBarking = event => {
    this.setState({ barking: event.target.value });
  };
  handleChangeDestruction = event => {
    this.setState({ destruction: event.target.value });
  };
  handleChangeSurfing = event => {
    this.setState({ surfing: event.target.value });
  };
  handleChangeDigging = event => {
    this.setState({ digging: event.target.value });
  };
  handleChangeJumping = event => {
    this.setState({ jumping: event.target.value });
  };
  handleChangePulling = event => {
    this.setState({ pulling: event.target.value });
  };
  handleChangeConfidence = event => {
    this.setState({ confidence: event.target.value });
  };
  handleChangeChewing = event => {
    this.setState({ chewing: event.target.value });
  };
  handleChangeHandling = event => {
    this.setState({ handling: event.target.value });
  };

  handleChangeHouseTraining = event => {
    this.setState({ houseTraining: event.target.value });
  };
  handleChangeMouthing = event => {
    this.setState({ mouthing: event.target.value });
  };
  handleChangeSocialization = event => {
    this.setState({ socialization: event.target.value });
  };
  handleChangeDistraction = event => {
    this.setState({ distraction: event.target.value });
  };
  handleChangeExercise = event => {
    this.setState({ exercise: event.target.value });
  };
  handleChangeFocus = event => {
    this.setState({ focus: event.target.value });
  };
  handleChangeWalking = event => {
    this.setState({ walking: event.target.value });
  };
  handleChangeMatWork = event => {
    this.setState({ matWork: event.target.value });
  };
  handleChangeStealing = event => {
    this.setState({ stealing: event.target.value });
  };

  render() {
    this.getDogs();

    var isValid = this.state.response;

    if (isValid === "Cost estimate successful") {
      return (
        <div style={{ marginTop: "10px" }}>
          <BookTraining2
            onChangeBarking={this.handleChangeBarking}
            onChangeDestruction={this.handleChangeDestruction}
            onChangeSurfing={this.handleChangeSurfing}
            onChangeDigging={this.handleChangeDigging}
            onChangeJumping={this.handleChangeJumping}
            onChangePulling={this.handleChangePulling}
            onChangeConfidence={this.handleChangeConfidence}
            onChangeChewing={this.handleChangeChewing}
            onChangeHandling={this.handleChangeHandling}
            onChangeHouseTraining={this.handleChangeHouseTraining}
            onChangeMouthing={this.handleChangeMouthing}
            onChangeSocialization={this.handleChangeSocialization}
            onChangeDistraction={this.handleChangeDistraction}
            onChangeExercise={this.handleChangeExercise}
            onChangeFocus={this.handleChangeFocus}
            onChangeWalking={this.handleChangeWalking}
            onChangeMatWork={this.handleChangeMatWork}
            onChangeStealing={this.handleChangeStealing}
            barking={this.state.barking}
            destruction={this.state.destruction}
            surfing={this.state.surfing}
            digging={this.state.digging}
            jumping={this.state.jumping}
            pulling={this.state.pulling}
            confidence={this.state.confidence}
            chewing={this.state.chewing}
            handling={this.state.handling}
            houseTraining={this.state.houseTraining}
            mouthing={this.state.mouthing}
            socialization={this.state.socialization}
            distraction={this.state.distraction}
            exercise={this.state.exercise}
            focus={this.state.focus}
            walking={this.state.walking}
            matWork={this.state.matWork}
            stealing={this.state.stealing}
            onClick={this.onPrevious}
            toDetails={this.toDetails}
            proceedToPayment={this.proceedToPayment}
            onSubmit={this.onSearchSubmit2}
          />
        </div>
      );
    } else if (isValid === "Details") {
      return (
        <div style={{ marginTop: "10px" }}>
          <BookTraining3
            selectedDogs={this.state.selectedDogs}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            comments={this.state.comments}
            cost={this.state.cost}
            barking={this.state.barking}
            destruction={this.state.destruction}
            surfing={this.state.surfing}
            digging={this.state.digging}
            jumping={this.state.jumping}
            pulling={this.state.pulling}
            confidence={this.state.confidence}
            chewing={this.state.chewing}
            handling={this.state.handling}
            houseTraining={this.state.houseTraining}
            mouthing={this.state.mouthing}
            socialization={this.state.socialization}
            distraction={this.state.distraction}
            exercise={this.state.exercise}
            focus={this.state.focus}
            walking={this.state.walking}
            matWork={this.state.matWork}
            stealing={this.state.stealing}
            baby={this.state.baby}
            cat={this.state.cat}
            newDog={this.state.newDog}
            significantOther={this.state.significantOther}
            members={this.state.members}
            children={this.state.children}
            home={this.state.home}
          />
        </div>
      );
    } else if (isValid === "Succsessfully added appointment") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/Services",
              state: { message: "Appointment is booked pending approval" }
            }}
          />
        </div>
      );
    } else if (isValid === "Payment") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/",
              state: { message: "Redirect to PayPal" }
            }}
          />
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "10px" }}>
          <BookTraining1
            onChangeDog={this.handleChangeDog}
            onChangeStartTime={this.handleChangeStartTime}
            onChangeEndTime={this.handleChangeEndTime}
            onChangeBaby={this.handleChangeBaby}
            onChangeCat={this.handleChangeCat}
            onChangeNewDog={this.handleChangeNewDog}
            onChangeSignificantOther={this.handleChangeSignificantOther}
            onChangeMembers={this.handleChangeMembers}
            onChangeChildren={this.handleChangeChildren}
            onChangeHome={this.handleChangeHome}
            onChangeComments={this.handleChangeComments}
            dog={this.state.dog}
            selectedDogs={this.state.selectedDogs}
            startTime={this.state.startTime}
            endTime={this.state.endTime}
            baby={this.state.baby}
            cat={this.state.cat}
            newDog={this.state.newDog}
            significantOther={this.state.significantOther}
            members={this.state.members}
            children={this.state.children}
            home={this.state.home}
            comments={this.state.comments}
            onSubmit={this.onSearchSubmit1}
            dogs={this.state.dogs}
          />
          <div>
            {this.state.showPopup ? (
              <Popup
                cn={this.state.cn}
                text={this.state.response}
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

export default BookTrainingMain;
