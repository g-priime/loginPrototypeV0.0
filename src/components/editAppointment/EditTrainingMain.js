import React from "react";

import BasePath from "../../api/BasePath";
import EditTraining1 from "./EditTraining1";
import EditTraining2 from "./EditTraining2";
import { Redirect } from "react-router-dom";
import Popup from "../PopUp";

import Moment from "moment";
import EditTraining3 from "./EditTraining3";

class EditTrainingMain extends React.Component {
  state = {
    response: "",
    fieldName: [],
    page: "",
    showPopup: false,
    cn: "",

    dog: "",
    selectedDogs: "",
    dogs: [],
    initialStates: false,
    cost: ""
  };

  getDogs = async () => {
    var token = localStorage.getItem("token");
    console.log(token);
    const response = await BasePath.get(`/webresources/RetrieveDogs/${token}`);

    const dogs = response.data;
    var dogArray = [];
    dogs.map(doggy =>
      dogArray.push({ key: doggy.idNumber, value: doggy.name })
    );

    const dogIds = this.props.appointment.dogIdNumber;
    var dogAppointed = "";
    for (let i = 0; i < dogArray.length; i++) {
      if (dogIds == dogArray[i].key) {
        dogAppointed = dogArray[i];
      }
    }

    var barking = "No";
    if (this.props.appointment.barking) {
      barking = "Yes";
    }
    var chewingDestruction = "No";
    if (this.props.appointment.chewingDestruction) {
      chewingDestruction = "Yes";
    }
    var counterSurfing = "No";
    if (this.props.appointment.counterSurfing) {
      counterSurfing = "Yes";
    }
    var digging = "No";
    if (this.props.appointment.digging) {
      digging = "Yes";
    }
    var jumping = "No";
    if (this.props.appointment.jumping) {
      jumping = "Yes";
    }
    var pullingOnLeash = "No";
    if (this.props.appointment.pullingOnLeash) {
      pullingOnLeash = "Yes";
    }
    var buildingConfidence = "No";
    if (this.props.appointment.buildingConfidence) {
      buildingConfidence = "Yes";
    }
    var chewing = "No";
    if (this.props.appointment.chewing) {
      chewing = "Yes";
    }
    var handling = "No";
    if (this.props.appointment.handling) {
      handling = "Yes";
    }

    var houseTraining = "No";
    if (this.props.appointment.houseTraining) {
      houseTraining = "Yes";
    }
    var mouthing = "No";
    if (this.props.appointment.mouthing) {
      mouthing = "Yes";
    }
    var socialization = "No";
    if (this.props.appointment.socialization) {
      socialization = "Yes";
    }
    var distractionStrategies = "No";
    if (this.props.appointment.distractionStrategies) {
      distractionStrategies = "Yes";
    }
    var exercise = "No";
    if (this.props.appointment.exercise) {
      exercise = "Yes";
    }
    var focusStrategies = "No";
    if (this.props.appointment.focusStrategies) {
      focusStrategies = "Yes";
    }
    var looseLeashWalking = "No";
    if (this.props.appointment.looseLeashWalking) {
      looseLeashWalking = "Yes";
    }
    var matWork = "No";
    if (this.props.appointment.matWork) {
      matWork = "Yes";
    }
    var stealingItemsChaseGame = "No";
    if (this.props.appointment.stealingItemsChaseGame) {
      stealingItemsChaseGame = "Yes";
    }

    var newBaby = "No";
    if (this.props.appointment.newBaby) {
      newBaby = "Yes";
    }
    var newCat = "No";
    if (this.props.appointment.newCat) {
      newCat = "Yes";
    }
    var newDog = "No";
    if (this.props.appointment.newDog) {
      newDog = "Yes";
    }
    var newSignificantOther = "No";
    if (this.props.appointment.newSignificantOther) {
      newSignificantOther = "Yes";
    }
    var additionalHouseholdMembers = "No";
    if (this.props.appointment.additionalHouseholdMembers) {
      additionalHouseholdMembers = "Yes";
    }
    var childrenAndDogs = "No";
    if (this.props.appointment.childrenAndDogs) {
      childrenAndDogs = "Yes";
    }
    var newHome = "No";
    if (this.props.appointment.newHome) {
      newHome = "Yes";
    }

    var play = "No";
    if (this.props.appointment.play) {
      play = "Yes";
    }

    if (!this.state.initialStates) {
      this.setState({
        dogs: dogArray,
        initialStates: true,
        selectedDogs: dogAppointed,
        startTime: this.props.appointment.startTime,
        endTime: this.props.appointment.endTime,
        comments: this.props.appointment.additionalComments,
        barking: barking,
        destruction: chewingDestruction,
        surfing: counterSurfing,
        digging: digging,
        jumping: jumping,
        pulling: pullingOnLeash,
        confidence: buildingConfidence,
        chewing: chewing,
        handling: handling,
        houseTraining: houseTraining,
        mouthing: mouthing,
        socialization: socialization,
        distraction: distractionStrategies,
        exercise: exercise,
        focus: focusStrategies,
        walking: looseLeashWalking,
        matWork: matWork,
        stealing: stealingItemsChaseGame,
        baby: newBaby,
        cat: newCat,
        newDog: newDog,
        significantOther: newSignificantOther,
        members: additionalHouseholdMembers,
        children: childrenAndDogs,
        home: newHome,
        play: play
      });
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

        this.state.baby
      ]
    });

    var d1 = new Date(this.state.startTime);
    var d2 = new Date(this.state.endTime);
    var validTimes = d1.getTime() < d2.getTime();
    var dNow = new Date();
    var validStart = dNow.getTime() <= d1.getTime();

    var token = localStorage.getItem("token");

    var dogs = "";
    if (this.state.selectedDogs !== "") {
      dogs = this.state.selectedDogs.key;
    }

    var dogString = dogs.toString();

    var startTime = this.state.startTime;
    var formattedStart = Moment(startTime).format("YYYY-MM-DD hh:mm:ss");
    var endTime = this.state.endTime;
    var formattedEnd = Moment(endTime).format("YYYY-MM-DD hh:mm:ss");

    var grooming = "false";
    if (this.state.grooming === "Yes") {
      grooming = "true";
    }
    var type = "training";

    const response = await BasePath.put("/webresources/calculatecost", {
      token,
      dogString,
      formattedStart,
      formattedEnd,
      grooming,
      type
    });

    this.setState({
      response: response.data.message,
      cost: response.data.total
    });

    if (response.data === "") {
      this.setState({ cn: "popup4", response: "Must select at least one dog" });
      this.togglePopup();
    }
    else if (!validStart) {
      this.setState({
        cn: "popup4",
        response: "Must enter a Start Time that has not passed",
      });
      this.togglePopup();
    } else if (!validTimes) {
      this.setState({
        cn: "popup4",
        response: "Must enter an End Time that is greater than Start Time",
      });
      this.togglePopup();
    }
  };

  onSearchSubmit2 = async () => {
    var token = localStorage.getItem("token");

    var selectedDogs = this.state.selectedDogs.key;

    var dogIdNumber = selectedDogs.toString();
    var startTime = Moment(this.state.fieldName[1]).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    var endTime = Moment(this.state.fieldName[2]).format("YYYY-MM-DD HH:mm:ss");

    var additionalComments = this.state.fieldName[4];
    var total = this.state.cost;

    var barking = false;
    if (this.state.barking === "Yes") {
      barking = true;
    }
    var chewingDestruction = false;
    if (this.state.destruction === "Yes") {
      chewingDestruction = true;
    }
    var counterSurfing = false;
    if (this.state.surfing === "Yes") {
      counterSurfing = true;
    }
    var digging = false;
    if (this.state.digging === "Yes") {
      digging = true;
    }
    var jumping = false;
    if (this.state.jumping === "Yes") {
      jumping = true;
    }
    var pullingOnLeash = false;
    if (this.state.pulling === "Yes") {
      pullingOnLeash = true;
    }
    var buildingConfidence = false;
    if (this.state.confidence === "Yes") {
      buildingConfidence = true;
    }
    var chewing = false;
    if (this.state.chewing === "Yes") {
      chewing = true;
    }
    var handling = false;
    if (this.state.handling === "Yes") {
      handling = true;
    }

    var houseTraining = false;
    if (this.state.houseTraining === "Yes") {
      houseTraining = true;
    }
    var mouthing = false;
    if (this.state.mouthing === "Yes") {
      mouthing = true;
    }
    var socialization = false;
    if (this.state.socialization === "Yes") {
      socialization = true;
    }
    var distractionStrategies = false;
    if (this.state.distraction === "Yes") {
      distractionStrategies = true;
    }
    var exercise = false;
    if (this.state.exercise === "Yes") {
      exercise = true;
    }
    var focusStrategies = false;
    if (this.state.focus === "Yes") {
      focusStrategies = true;
    }
    var looseLeashWalking = false;
    if (this.state.walking === "Yes") {
      looseLeashWalking = true;
    }
    var matWork = false;
    if (this.state.matWork === "Yes") {
      matWork = true;
    }
    var stealingItemsChaseGame = false;
    if (this.state.stealing === "Yes") {
      stealingItemsChaseGame = true;
    }

    var newBaby = false;
    if (this.state.baby === "Yes") {
      newBaby = true;
    }
    var newCat = false;
    if (this.state.cat === "Yes") {
      newCat = true;
    }
    var newDog = false;
    if (this.state.newDog === "Yes") {
      newDog = true;
    }
    var newSignificantOther = false;
    if (this.state.significantOther === "Yes") {
      newSignificantOther = true;
    }
    var additionalHouseholdMembers = false;
    if (this.state.members === "Yes") {
      additionalHouseholdMembers = true;
    }
    var childrenAndDogs = false;
    if (this.state.children === "Yes") {
      childrenAndDogs = true;
    }
    var newHome = false;
    if (this.state.home === "Yes") {
      newHome = true;
    }

    var play = false;
    if (this.state.play === "Yes") {
      play = true;
    }

    var username = this.props.appointment.username;
    var idNumber = this.props.appointment.idNumber;

    var amountPaid = this.props.appointment.amountPaid;
    var isApproved = this.props.appointment.isApproved;
    var isCancelled = this.props.appointment.isCancelled;
    var type = this.props.appointment.type;

    const response = await BasePath.put("/webresources/edittraining", {
      token,
      username,
      idNumber,
      dogIdNumber,
      startTime,
      endTime,
      total,
      amountPaid,
      isApproved,
      isCancelled,
      type,
      additionalComments,

      barking,
      chewingDestruction,
      counterSurfing,
      digging,
      jumping,
      pullingOnLeash,
      buildingConfidence,
      chewing,
      handling,
      houseTraining,
      mouthing,
      socialization,
      distractionStrategies,
      exercise,
      focusStrategies,
      looseLeashWalking,
      matWork,
      stealingItemsChaseGame,
      newBaby,
      newCat,
      newDog,
      newSignificantOther,
      additionalHouseholdMembers,
      childrenAndDogs,
      newHome,
      play
    });

    this.setState({ response: response.data });
  };

  onPrevious = () => {
    this.setState({ response: "" });
  };

  toDetails = () => {
    this.setState({ response: "Details" });
  };

  toPage2 = () => {
    this.setState({ response: "Cost estimate successful" });
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
  handleChangePlay = event => {
    this.setState({ play: event.target.value });
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
          <EditTraining2
            onChangeBarking={this.handleChangeBarking}
            onChangeDestruction={this.handleChangeDestruction}
            onChangeSurfing={this.handleChangeSurfing}
            onChangeDigging={this.handleChangeDigging}
            onChangeJumping={this.handleChangeJumping}
            onChangePulling={this.handleChangePulling}
            onChangeConfidence={this.handleChangeConfidence}
            onChangeChewing={this.handleChangeChewing}
            onChangeHandling={this.handleChangeHandling}
            onChangePlay={this.handleChangePlay}
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
            play={this.state.play}
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
          />
        </div>
      );
    } else if (isValid === "Details") {
      return (
        <div style={{ marginTop: "10px" }}>
          <EditTraining3
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
            play={this.state.play}
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
            toPage2={this.toPage2}
            proceedToPayment={this.proceedToPayment}
            onSubmit={this.onSearchSubmit2}
          />
        </div>
      );
    } else if (isValid === "Appointment updated") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "ViewAppointments",
              state: { message: "Appointment updated" }
            }}
          />
        </div>
      );
    } else if (isValid === "Payment") {
      return (
        <div style={{ marginTop: "10px" }}>
          <Redirect
            to={{
              pathname: "/Services",
              state: { message: "Redirect to PayPal" }
            }}
          />
        </div>
      );
    } else {
      return (
        <div style={{ marginTop: "10px" }}>
          <EditTraining1
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

export default EditTrainingMain;
