import React from "react";
import Moment from "moment";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  ViewDirective,
  ViewsDirective,
  MonthAgenda,
  TimelineViews
} from "@syncfusion/ej2-react-schedule";
import BasePath from "../../api/BasePath";
import { Internationalization, extend } from "@syncfusion/ej2-base";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import {
  DropDownListComponent,
  MultiSelectComponent,
} from "@syncfusion/ej2-react-dropdowns";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";

class CalendarMain extends React.Component {
  constructor() {
    super(...arguments);

    this.data = extend([], null, true);
    this.instance = new Internationalization();
    this.dogs = [];
    this.appointedDogs = [];
    this.dogList = ["Fido"];
    this.dogBit = false;
  }

  state = {
    initialStates: false,
    initialCustomers: false,
    customers: [],
    dogs: [],
    initialDogs: false,
    appointedDogs: [],

    usernames: [],
    dognames: [],

    data: [],
    intitialData: false,

    showPopup: false,
    cn: "",
    message: "",
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  getAppointmentInfo = async () => {
    var token = localStorage.getItem("token");

    const result = await BasePath.get(
      `/webresources/getAllAppointments/${token}`
    );
    if (this.state.initialStates === false) {
      this.setState({
        initialStates: true,
      });
      console.log(result);

      for (let i = 0; i < result.data.length; i++) {
        var appointment = new Object();
        appointment.Id = result.data[i].idNumber;
        appointment.type = result.data[i].type;

        appointment.StartTime = result.data[i].startTime;
        appointment.EndTime = result.data[i].endTime;

        appointment.dogIdNumber = result.data[i].dogIdNumber.split(",");
        appointment.dogNames = result.data[i].dogNames.split(",");

        appointment.appointedDogs = this.state.dognames;

        appointment.username = result.data[i].username;
        appointment.Subject = result.data[i].username;

        appointment.EventType = result.data[i].type;
        appointment.total = result.data[i].total;
        appointment.amountPaid = result.data[i].amountPaid;
        appointment.isApproved = result.data[i].isApproved;
        appointment.isCancelled = result.data[i].isCancelled;
        appointment.isPaid = result.data[i].isPaid;
        appointment.additionalComments = result.data[i].additionalComments;

        appointment.grooming = result.data[i].grooming;

        appointment.barking = result.data[i].barking;
        appointment.chewingDestruction = result.data[i].chewingDestruction;
        appointment.counterSurfing = result.data[i].counterSurfing;
        appointment.digging = result.data[i].digging;
        appointment.jumping = result.data[i].jumping;
        appointment.pullingOnLeash = result.data[i].pullingOnLeash;
        appointment.buildingConfidence = result.data[i].buildingConfidence;
        appointment.chewing = result.data[i].chewing;
        appointment.handling = result.data[i].handling;
        appointment.houseTraining = result.data[i].houseTraining;
        appointment.mouthing = result.data[i].mouthing;
        appointment.socialization = result.data[i].socialization;
        appointment.distractionStrategies =
          result.data[i].distractionStrategies;
        appointment.exercise = result.data[i].exercise;
        appointment.focusStrategies = result.data[i].focusStrategies;
        appointment.looseLeashWalking = result.data[i].looseLeashWalking;
        appointment.matWork = result.data[i].matWork;
        appointment.stealingItemsChaseGame =
          result.data[i].stealingItemsChaseGame;
        appointment.newBaby = result.data[i].newBaby;
        appointment.newCat = result.data[i].newCat;
        appointment.newDog = result.data[i].newDog;
        appointment.newSignificantOther = result.data[i].newSignificantOther;
        appointment.additionalHouseholdMembers =
          result.data[i].additionalHouseholdMembers;
        appointment.childrenAndDogs = result.data[i].childrenAndDogs;
        appointment.newHome = result.data[i].newHome;
        appointment.play = result.data[i].play;

        this.data.push(appointment);
      }
    }
    if (!this.state.intitialData) {
      this.setState({ data: this.data, intitialData: true });
    }
    //this.scheduleObj.refreshEvents();
  };

  updateAppointmentInfo = async () => {
    var token = localStorage.getItem("token");

    const result = await BasePath.get(
      `/webresources/getAllAppointments/${token}`
    );

    this.data.splice(0, this.data.length);

    for (let i = 0; i < result.data.length; i++) {
      var appointment = new Object();
      appointment.Id = result.data[i].idNumber;
      appointment.type = result.data[i].type;

      appointment.StartTime = result.data[i].startTime;
      appointment.EndTime = result.data[i].endTime;

      appointment.dogIdNumber = result.data[i].dogIdNumber.split(",");
      appointment.dogNames = result.data[i].dogNames.split(",");

      appointment.appointedDogs = this.state.dognames;

      appointment.username = result.data[i].username;
      appointment.Subject = result.data[i].username;

      appointment.EventType = result.data[i].type;
      appointment.total = result.data[i].total;
      appointment.amountPaid = result.data[i].amountPaid;
      appointment.isApproved = result.data[i].isApproved;
      appointment.isCancelled = result.data[i].isCancelled;
      appointment.isPaid = result.data[i].isPaid;
      appointment.additionalComments = result.data[i].additionalComments;

      appointment.grooming = result.data[i].grooming;

      appointment.barking = result.data[i].barking;
      appointment.chewingDestruction = result.data[i].chewingDestruction;
      appointment.counterSurfing = result.data[i].counterSurfing;
      appointment.digging = result.data[i].digging;
      appointment.jumping = result.data[i].jumping;
      appointment.pullingOnLeash = result.data[i].pullingOnLeash;
      appointment.buildingConfidence = result.data[i].buildingConfidence;
      appointment.chewing = result.data[i].chewing;
      appointment.handling = result.data[i].handling;
      appointment.houseTraining = result.data[i].houseTraining;
      appointment.mouthing = result.data[i].mouthing;
      appointment.socialization = result.data[i].socialization;
      appointment.distractionStrategies = result.data[i].distractionStrategies;
      appointment.exercise = result.data[i].exercise;
      appointment.focusStrategies = result.data[i].focusStrategies;
      appointment.looseLeashWalking = result.data[i].looseLeashWalking;
      appointment.matWork = result.data[i].matWork;
      appointment.stealingItemsChaseGame =
        result.data[i].stealingItemsChaseGame;
      appointment.newBaby = result.data[i].newBaby;
      appointment.newCat = result.data[i].newCat;
      appointment.newDog = result.data[i].newDog;
      appointment.newSignificantOther = result.data[i].newSignificantOther;
      appointment.additionalHouseholdMembers =
        result.data[i].additionalHouseholdMembers;
      appointment.childrenAndDogs = result.data[i].childrenAndDogs;
      appointment.newHome = result.data[i].newHome;
      appointment.play = result.data[i].play;

      this.data.push(appointment);
    }
    console.log(this.data);
    this.setState({ data: this.data, intitialData: true });
    this.scheduleObj.eventSettings.dataSource = this.data;
    this.scheduleObj.refreshEvents();
  };

  getCustomerInfo = async () => {
    var token = localStorage.getItem("token");

    const result = await BasePath.get(`/webresources/RetrieveUsers/${token}`);
    if (this.state.initialCustomers === false) {
      this.setState({
        initialCustomers: true,
      });
      console.log(result);

      let customers = [];
      for (let i = 0; i < result.data.length; i++) {
        customers.push(result.data[i]);
      }
      this.setState({ customers: customers });

      let usernames = [];
      customers.map((customer) => usernames.push(customer.username));
      this.setState({ usernames: usernames });
    }
  };

  getDogInfo = async () => {
    var token = localStorage.getItem("token");

    const result = await BasePath.get(`/webresources/GetDogs/${token}`);
    if (this.state.initialDogs === false) {
      this.setState({
        initialDogs: true,
      });
      console.log(result);

      let dogs = [];
      for (let i = 0; i < result.data.length; i++) {
        dogs.push(result.data[i]);
      }
      this.setState({ dogs: dogs });
      this.dogs = dogs;

      let dognames = [];
      dogs.map((dog) => dognames.push(dog.name));
      this.setState({ dognames: dognames });
    }
  };

  onActionComplete(ActionEventArgs) {
    if (ActionEventArgs.changedRecords !== undefined) {
      this.scheduleObj.refreshEvents();
    }

    if (document.querySelector(".e-schedule-dialog") !== undefined) {
      let diaObj = document.querySelector(".e-schedule-dialog")
        .ej2_instances[0];
      this.scheduleObj.uiStateValues.isBlock = false;
      diaObj.hide();
    }
  }

  onActionBegin(ActionEventArgs) {
    

    if (ActionEventArgs.changedRecords !== undefined) {
      if (
        ActionEventArgs.requestType === "eventCreate" &&
        ActionEventArgs.data[0].Subject === "daycare"
      ) {
        console.log("hello");
        this.scheduleObj.uiStateValues.isBlock = true;
        ActionEventArgs.cancel = true;
        alert("Enter Title");
      } else if (ActionEventArgs.requestType === "eventChange") {
        let start = new Date(ActionEventArgs.changedRecords[0].StartTime);
        let end = new Date(ActionEventArgs.changedRecords[0].EndTime);
        let current = new Date();
        let validStart = start > current;
        let validRange = end > start;

        let validTotal = this.checkValidNumber(
          ActionEventArgs.changedRecords[0].total
        );
        let validAmountPaid = this.checkValidNumber(
          ActionEventArgs.changedRecords[0].amountPaid
        );

        if (
          ActionEventArgs.changedRecords[0].dogNames == null ||
          ActionEventArgs.changedRecords[0].dogNames.length == 0
        ) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Must enter Dogs");
        }
        else if (ActionEventArgs.changedRecords[0].StartTime == null) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Must enter Start Time");
        }
        else if (ActionEventArgs.changedRecords[0].EndTime == null) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Must enter End Time");
        }
        else if (!validStart) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Start Time must be later than current time");
        }
        else if (!validRange) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("End Time must be later than Start Time");
        }
         else if (
          ActionEventArgs.changedRecords[0].total === "" ||
          !validTotal
        ) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Must enter Total");
        } else if (
          ActionEventArgs.changedRecords[0].amountPaid === "" ||
          !validAmountPaid
        ) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Must enter Amount Paid");
        } else {
          this.editAppointment(ActionEventArgs.changedRecords[0]);
        }
      } else if (ActionEventArgs.requestType === "eventCreate") {
        console.log(ActionEventArgs.addedRecords[0].StartTime);
        let start = new Date(ActionEventArgs.addedRecords[0].StartTime);
        let end = new Date(ActionEventArgs.addedRecords[0].EndTime);
        let current = new Date();
        let validStart = start > current;
        let validRange = end > start;

        let validTotal = this.checkValidNumber(
          ActionEventArgs.addedRecords[0].total
        );
        let validAmountPaid = this.checkValidNumber(
          ActionEventArgs.addedRecords[0].amountPaid
        );
        if (ActionEventArgs.addedRecords[0].type == null) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Must enter Appointment Type");
        } else if (
          ActionEventArgs.addedRecords[0].dogNames == null ||
          ActionEventArgs.addedRecords[0].dogNames.length == 0
        ) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Must enter Dogs");
        }
        else if (ActionEventArgs.addedRecords[0].StartTime == null) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Must enter Start Time");
        }
        else if (ActionEventArgs.addedRecords[0].EndTime == null) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Must enter End Time");
        }
        else if (!validStart) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Start Time must be later than current time");
        }
        else if (!validRange) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("End Time must be later than Start Time");
        }
         else if (
          ActionEventArgs.addedRecords[0].total === "" ||
          !validTotal
        ) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Must enter Total");
        } else if (
          ActionEventArgs.addedRecords[0].amountPaid === "" ||
          !validAmountPaid
        ) {
          this.scheduleObj.uiStateValues.isBlock = true;
          ActionEventArgs.cancel = true;
          alert("Must enter Amount Paid");
        } else {
          this.addAppointment(ActionEventArgs.addedRecords[0]);
        }
      } else if (ActionEventArgs.requestType === "eventRemove") {
        this.deleteAppointment(ActionEventArgs.data[0]);
      }
    }
  }

  checkValidNumber(stringValue) {
    let invalidNumber = isNaN(stringValue);
    if (!invalidNumber && stringValue >= 0) {
      return true;
    }
    return false;
  }

  deleteAppointment = async (appointment) => {
    let token = localStorage.getItem("token");
    let idNumber = appointment.Id;

    const response = await BasePath.put("/webresources/deleteAppointment", {
      token,
      idNumber,
    });
  };

  addAppointment(appointment) {
    console.log(appointment);

    let username = appointment.username;

    let dogNames = appointment.dogNames;
    let allDogs = [];
    allDogs = this.state.dogs;
    let ownedDogs = [];
    for (let i = 0; i < allDogs.length; i++) {
      if (allDogs[i].owner === username) {
        ownedDogs.push(allDogs[i]);
      }
    }

    let dogArray = [];
    for (let i = 0; i < ownedDogs.length; i++) {
      for (let j = 0; j < dogNames.length; j++) {
        if (dogNames[j] === ownedDogs[i].name) {
          dogArray.push(ownedDogs[i].idNumber);
        }
      }
    }
    let dogIdNumber = dogArray.toString();

    if (appointment.type === "daycare") {
      this.addDaycare(appointment, username, dogIdNumber);
    } else if (appointment.type === "boarding") {
      this.addBoarding(appointment, username, dogIdNumber);
    } else if (appointment.type === "training") {
      this.addTraining(appointment, username, dogIdNumber);
    }
  }

  addDaycare = async (appointment, username, dogIdNumber) => {
    console.log(appointment);
    let token = localStorage.getItem("token");
    let idNumber = appointment.Id;

    let startTime = Moment(appointment.StartTime).format("YYYY-MM-DD HH:mm:ss");
    let endTime = Moment(appointment.EndTime).format("YYYY-MM-DD HH:mm:ss");
    let total = appointment.total;
    let amountPaid = appointment.amountPaid;
    let isApproved = appointment.isApproved;
    let isCancelled = appointment.isCancelled;
    let type = "daycare";
    let additionalComments = appointment.additionalComments;

    const response = await BasePath.put("/webresources/bookdaycare", {
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
    });
  };

  addBoarding = async (appointment, username, dogIdNumber) => {
    let token = localStorage.getItem("token");
    let idNumber = appointment.Id;

    let startTime = Moment(appointment.StartTime).format("YYYY-MM-DD HH:mm:ss");
    let endTime = Moment(appointment.EndTime).format("YYYY-MM-DD HH:mm:ss");
    let total = appointment.total;
    let amountPaid = appointment.amountPaid;
    let isApproved = appointment.isApproved;
    let isCancelled = appointment.isCancelled;

    let grooming = appointment.grooming;
    let type = "boarding";
    let additionalComments = appointment.additionalComments;

    const response = await BasePath.put("/webresources/bookboarding", {
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

      grooming,
      type,
      additionalComments,
    });
  };

  addTraining = async (appointment, username, dogIdNumber) => {
    let token = localStorage.getItem("token");
    let idNumber = appointment.Id;

    let startTime = Moment(appointment.StartTime).format("YYYY-MM-DD HH:mm:ss");
    let endTime = Moment(appointment.EndTime).format("YYYY-MM-DD HH:mm:ss");
    let total = appointment.total;
    let amountPaid = appointment.amountPaid;
    let isApproved = appointment.isApproved;
    let isCancelled = appointment.isCancelled;

    let type = "training";
    let additionalComments = appointment.additionalComments;

    let barking = appointment.barking;
    let chewingDestruction = appointment.chewingDestruction;
    let counterSurfing = appointment.counterSurfing;
    let digging = appointment.digging;
    let jumping = appointment.jumping;
    let pullingOnLeash = appointment.pullingOnLeash;
    let buildingConfidence = appointment.buildingConfidence;
    let chewing = appointment.chewing;
    let handling = appointment.handling;
    let houseTraining = appointment.houseTraining;
    let mouthing = appointment.mouthing;
    let socialization = appointment.socialization;
    let distractionStrategies = appointment.distractionStrategies;
    let exercise = appointment.exercise;
    let focusStrategies = appointment.focusStrategies;
    let looseLeashWalking = appointment.looseLeashWalking;
    let matWork = appointment.matWork;
    let stealingItemsChaseGame = appointment.stealingItemsChaseGame;
    let newBaby = appointment.newBaby;
    let newCat = appointment.newCat;
    let newDog = appointment.newDog;
    let newSignificantOther = appointment.newSignificantOther;
    let additionalHouseholdMembers = appointment.additionalHouseholdMembers;
    let childrenAndDogs = appointment.childrenAndDogs;
    let newHome = appointment.newHome;
    let play = appointment.play;

    const response = await BasePath.put("/webresources/booktraining", {
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
      play,
    });
  };

  editAppointment(appointment) {
    let username = appointment.username;

    let dogNames = appointment.dogNames;
    let allDogs = [];
    allDogs = this.state.dogs;
    let ownedDogs = [];
    for (let i = 0; i < allDogs.length; i++) {
      if (allDogs[i].owner === username) {
        ownedDogs.push(allDogs[i]);
      }
    }

    let dogArray = [];
    for (let i = 0; i < ownedDogs.length; i++) {
      for (let j = 0; j < dogNames.length; j++) {
        if (dogNames[j] === ownedDogs[i].name) {
          dogArray.push(ownedDogs[i].idNumber);
        }
      }
    }
    let dogIdNumber = dogArray.toString();

    if (appointment.type === "daycare") {
      this.editDaycare(appointment, username, dogIdNumber);
    } else if (appointment.type === "boarding") {
      this.editBoarding(appointment, username, dogIdNumber);
    } else if (appointment.type === "training") {
      this.editTraining(appointment, username, dogIdNumber);
    }
  }

  editDaycare = async (appointment, username, dogIdNumber) => {
    let token = localStorage.getItem("token");
    let idNumber = appointment.Id;

    let startTime = Moment(appointment.StartTime).format("YYYY-MM-DD HH:mm:ss");
    let endTime = Moment(appointment.EndTime).format("YYYY-MM-DD HH:mm:ss");
    let total = appointment.total;
    let amountPaid = appointment.amountPaid;
    let isApproved = appointment.isApproved;
    let isCancelled = appointment.isCancelled;
    let type = "daycare";
    let additionalComments = appointment.additionalComments;

    const response = await BasePath.put("/webresources/editdaycare", {
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
    });

    if (response.data === "Appointment updated") {
      this.updateAppointmentInfo();
    }
    this.scheduleObj.refreshEvents();
  };

  editBoarding = async (appointment, username, dogIdNumber) => {
    let token = localStorage.getItem("token");
    let idNumber = appointment.Id;

    let startTime = Moment(appointment.StartTime).format("YYYY-MM-DD HH:mm:ss");
    let endTime = Moment(appointment.EndTime).format("YYYY-MM-DD HH:mm:ss");
    let total = appointment.total;
    let amountPaid = appointment.amountPaid;
    let isApproved = appointment.isApproved;
    let isCancelled = appointment.isCancelled;

    let grooming = appointment.grooming;
    let type = "boarding";
    let additionalComments = appointment.additionalComments;

    const response = await BasePath.put("/webresources/editboarding", {
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

      grooming,
      type,
      additionalComments,
    });
    if (response.data === "Appointment updated") {
      this.updateAppointmentInfo();
    }
  };

  editTraining = async (appointment, username, dogIdNumber) => {
    let token = localStorage.getItem("token");
    let idNumber = appointment.Id;

    let startTime = Moment(appointment.StartTime).format("YYYY-MM-DD HH:mm:ss");
    let endTime = Moment(appointment.EndTime).format("YYYY-MM-DD HH:mm:ss");
    let total = appointment.total;
    let amountPaid = appointment.amountPaid;
    let isApproved = appointment.isApproved;
    let isCancelled = appointment.isCancelled;

    let type = "training";
    let additionalComments = appointment.additionalComments;

    let barking = appointment.barking;
    let chewingDestruction = appointment.chewingDestruction;
    let counterSurfing = appointment.counterSurfing;
    let digging = appointment.digging;
    let jumping = appointment.jumping;
    let pullingOnLeash = appointment.pullingOnLeash;
    let buildingConfidence = appointment.buildingConfidence;
    let chewing = appointment.chewing;
    let handling = appointment.handling;
    let houseTraining = appointment.houseTraining;
    let mouthing = appointment.mouthing;
    let socialization = appointment.socialization;
    let distractionStrategies = appointment.distractionStrategies;
    let exercise = appointment.exercise;
    let focusStrategies = appointment.focusStrategies;
    let looseLeashWalking = appointment.looseLeashWalking;
    let matWork = appointment.matWork;
    let stealingItemsChaseGame = appointment.stealingItemsChaseGame;
    let newBaby = appointment.newBaby;
    let newCat = appointment.newCat;
    let newDog = appointment.newDog;
    let newSignificantOther = appointment.newSignificantOther;
    let additionalHouseholdMembers = appointment.additionalHouseholdMembers;
    let childrenAndDogs = appointment.childrenAndDogs;
    let newHome = appointment.newHome;
    let play = appointment.play;

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
      play,
    });
    if (response.data === "Appointment updated") {
      this.updateAppointmentInfo();
    }
  };

  onPopupClose(args) {
    console.log("pop up close");
  }

  onEditorClose(args) {
    console.log("editor close");
    args.Cancel = true; //to prevent closing of the editor window
  }

  onDataBound() {
    this.scheduleObj.refreshEvents();
  }

  onDataChange() {
    this.scheduleObj.refreshEvents();
  }

  onComplete(ChangeEventArgs) {
    this.dogBit = true;
    let username = ChangeEventArgs.itemData.value;
    this.alterDogList(username);
  }

  alterDogList(username) {
    this.dogList.splice(0, this.dogList.length);

    if (username !== undefined) {
      for (let i = 0; i < this.dogs.length; i++) {
        if (username === this.dogs[i].owner) {
          console.log(this.dogs[i].name);

          this.dogList.push(this.dogs[i].name);
        }
      }
    }
  }

  onPopupOpen(args) {
    if (args.type === "QuickInfo") {
      let username = args.data.username;
      this.alterDogList(username);
    }

    if (args.type === "Editor" && args.data.username === undefined) {
      this.scheduleObj.uiStateValues.isBlock = true;
      args.cancel = true;
      alert("Must enter Customer");
    }

    if (args.type === "Editor") {
      let statusElement = args.element.querySelector("#username");
      statusElement.setAttribute("name", "username");
    }
  }
  editorTemplate(props) {
    let dogList = [];
    if (this.dogBit == true) {
      if (props.username !== undefined) {
        for (let i = 0; i < this.dogs.length; i++) {
          if (props.username === this.dogs[i].owner) {
            dogList.push(this.dogs[i].name);
          }
        }
      }
    }

    if (props !== undefined && props.type === "training") {
      return (
        <div>
          <table
            className="custom-event-editor"
            style={{ width: "100%", cellpadding: "5" }}
          >
            <tbody>
              <tr>
                <td className="e-textlabel">Appointment Type</td>
                <td colSpan={4}>
                  <input
                    id="type"
                    className="e-field e-input"
                    type="text"
                    name="type"
                    style={{ width: "100%" }}
                    value={props.Subject}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Customer</td>
                <td colSpan={4}>
                  <input
                    id="username"
                    className="e-field e-input"
                    type="text"
                    name="username"
                    style={{ width: "100%" }}
                    value={props.Subject}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Dogs</td>
                <td colSpan={4}>
                  <MultiSelectComponent
                    id="dogNames"
                    placeholder="Choose dogs"
                    data-name="dogNames"
                    className="e-field"
                    style={{ width: "100%" }}
                    dataSource={this.dogList}
                    value={props.dogNames || null}
                    mode="Box"
                  ></MultiSelectComponent>
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Start Time</td>
                <td colSpan={4}>
                  <DateTimePickerComponent
                    format="dd/MM/yy hh:mm a"
                    id="StartTime"
                    data-name="StartTime"
                    value={new Date(props.startTime || props.StartTime)}
                    className="e-field"
                  ></DateTimePickerComponent>
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">End Time</td>
                <td colSpan={4}>
                  <DateTimePickerComponent
                    format="dd/MM/yy hh:mm a"
                    id="EndTime"
                    data-name="EndTime"
                    value={new Date(props.endTime || props.EndTime)}
                    className="e-field"
                  ></DateTimePickerComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Total</td>
                <td>
                  <input
                    id="total"
                    className="e-field e-input"
                    type="text"
                    name="total"
                    style={{ width: "100%" }}
                  />
                </td>
                <td className="e-textlabel">Amount Paid</td>
                <td>
                  <input
                    id="amountPaid"
                    className="e-field e-input"
                    type="text"
                    name="amountPaid"
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Approved</td>
                <td>
                  <CheckBoxComponent
                    id="isApproved"
                    className="e-field"
                    type="checkbox"
                    data-name="isApproved"
                    style={{ width: "100%" }}
                    value={props.isApproved}
                    checked={props.isApproved}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Cancelled</td>
                <td>
                  <CheckBoxComponent
                    id="isCancelled"
                    className="e-field"
                    type="checkbox"
                    data-name="isCancelled"
                    style={{ width: "100%" }}
                    value={props.isCancelled}
                    checked={props.isCancelled}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Additional Comments</td>
                <td colSpan={4}>
                  <textarea
                    id="additionalComments"
                    className="e-field e-input"
                    name="additionalComments"
                    rows={3}
                    cols={50}
                    style={{
                      width: "100%",
                      height: "60px !important",
                      resize: "vertical",
                    }}
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel"></td>
              </tr>
              <tr>
                <td height="50" colSpan={4}>
                  Training Options
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Barking</td>
                <td>
                  <CheckBoxComponent
                    id="barking"
                    className="e-field"
                    type="checkbox"
                    data-name="barking"
                    style={{ width: "100%" }}
                    value={props.barking}
                    checked={props.barking}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Chewing Destruction</td>
                <td>
                  <CheckBoxComponent
                    id="chewingDestruction"
                    className="e-field"
                    type="checkbox"
                    data-name="chewingDestruction"
                    style={{ width: "100%" }}
                    value={props.chewingDestruction}
                    checked={props.chewingDestruction}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Counter Surfing</td>
                <td>
                  <CheckBoxComponent
                    id="counterSurfing"
                    className="e-field"
                    type="checkbox"
                    data-name="counterSurfing"
                    style={{ width: "100%" }}
                    value={props.counterSurfing}
                    checked={props.counterSurfing}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Digging</td>
                <td>
                  <CheckBoxComponent
                    id="digging"
                    className="e-field"
                    type="checkbox"
                    data-name="digging"
                    style={{ width: "100%" }}
                    value={props.digging}
                    checked={props.digging}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Jumping</td>
                <td>
                  <CheckBoxComponent
                    id="jumping"
                    className="e-field"
                    type="checkbox"
                    data-name="jumping"
                    style={{ width: "100%" }}
                    value={props.jumping}
                    checked={props.jumping}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Pulling on Leash</td>
                <td>
                  <CheckBoxComponent
                    id="pullingOnLeash"
                    className="e-field"
                    type="checkbox"
                    data-name="pullingOnLeash"
                    style={{ width: "100%" }}
                    value={props.pullingOnLeash}
                    checked={props.pullingOnLeash}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Building Confidence</td>
                <td>
                  <CheckBoxComponent
                    id="buildingConfidence"
                    className="e-field"
                    type="checkbox"
                    data-name="buildingConfidence"
                    style={{ width: "100%" }}
                    value={props.buildingConfidence}
                    checked={props.buildingConfidence}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Chewing</td>
                <td>
                  <CheckBoxComponent
                    id="chewing"
                    className="e-field"
                    type="checkbox"
                    data-name="chewing"
                    style={{ width: "100%" }}
                    value={props.chewing}
                    checked={props.chewing}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Handling</td>
                <td>
                  <CheckBoxComponent
                    id="handling"
                    className="e-field"
                    type="checkbox"
                    data-name="handling"
                    style={{ width: "100%" }}
                    value={props.handling}
                    checked={props.handling}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">House Training</td>
                <td>
                  <CheckBoxComponent
                    id="houseTraining"
                    className="e-field"
                    type="checkbox"
                    data-name="houseTraining"
                    style={{ width: "100%" }}
                    value={props.houseTraining}
                    checked={props.houseTraining}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Mouthing</td>
                <td>
                  <CheckBoxComponent
                    id="mouthing"
                    className="e-field"
                    type="checkbox"
                    data-name="mouthing"
                    style={{ width: "100%" }}
                    value={props.mouthing}
                    checked={props.mouthing}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Socialization</td>
                <td>
                  <CheckBoxComponent
                    id="socialization"
                    className="e-field"
                    type="checkbox"
                    data-name="socialization"
                    style={{ width: "100%" }}
                    value={props.socialization}
                    checked={props.socialization}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Distraction Strategies</td>
                <td>
                  <CheckBoxComponent
                    id="distractionStrategies"
                    className="e-field"
                    type="checkbox"
                    data-name="distractionStrategies"
                    style={{ width: "100%" }}
                    value={props.distractionStrategies}
                    checked={props.distractionStrategies}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Exercise</td>
                <td>
                  <CheckBoxComponent
                    id="exercise"
                    className="e-field"
                    type="checkbox"
                    data-name="exercise"
                    style={{ width: "100%" }}
                    value={props.exercise}
                    checked={props.exercise}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Focus Strategies</td>
                <td>
                  <CheckBoxComponent
                    id="focusStrategies"
                    className="e-field"
                    type="checkbox"
                    data-name="focusStrategies"
                    style={{ width: "100%" }}
                    value={props.focusStrategies}
                    checked={props.focusStrategies}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Loose Leash Walking</td>
                <td>
                  <CheckBoxComponent
                    id="looseLeashWalking"
                    className="e-field"
                    type="checkbox"
                    data-name="looseLeashWalking"
                    style={{ width: "100%" }}
                    value={props.looseLeashWalking}
                    checked={props.looseLeashWalking}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Mat Work</td>
                <td>
                  <CheckBoxComponent
                    id="matWork"
                    className="e-field"
                    type="checkbox"
                    data-name="matWork"
                    style={{ width: "100%" }}
                    value={props.matWork}
                    checked={props.matWork}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Stealing Items Chase Game</td>
                <td>
                  <CheckBoxComponent
                    id="stealingItemsChaseGame"
                    className="e-field"
                    type="checkbox"
                    data-name="stealingItemsChaseGame"
                    style={{ width: "100%" }}
                    value={props.stealingItemsChaseGame}
                    checked={props.stealingItemsChaseGame}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">New Baby</td>
                <td>
                  <CheckBoxComponent
                    id="newBaby"
                    className="e-field"
                    type="checkbox"
                    data-name="newBaby"
                    style={{ width: "100%" }}
                    value={props.newBaby}
                    checked={props.newBaby}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">New Cat</td>
                <td>
                  <CheckBoxComponent
                    id="newCat"
                    className="e-field"
                    type="checkbox"
                    data-name="newCat"
                    style={{ width: "100%" }}
                    value={props.newCat}
                    checked={props.newCat}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">New Dog</td>
                <td>
                  <CheckBoxComponent
                    id="newDog"
                    className="e-field"
                    type="checkbox"
                    data-name="newDog"
                    style={{ width: "100%" }}
                    value={props.newDog}
                    checked={props.newDog}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">New Significant Other</td>
                <td>
                  <CheckBoxComponent
                    id="newSignificantOther"
                    className="e-field"
                    type="checkbox"
                    data-name="newSignificantOther"
                    style={{ width: "100%" }}
                    value={props.newSignificantOther}
                    checked={props.newSignificantOther}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Additional Household Members</td>
                <td>
                  <CheckBoxComponent
                    id="additionalHouseholdMembers"
                    className="e-field"
                    type="checkbox"
                    data-name="additionalHouseholdMembers"
                    style={{ width: "100%" }}
                    value={props.additionalHouseholdMembers}
                    checked={props.additionalHouseholdMembers}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Children And Dogs</td>
                <td>
                  <CheckBoxComponent
                    id="childrenAndDogs"
                    className="e-field"
                    type="checkbox"
                    data-name="childrenAndDogs"
                    style={{ width: "100%" }}
                    value={props.childrenAndDogs}
                    checked={props.childrenAndDogs}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">New Home</td>
                <td>
                  <CheckBoxComponent
                    id="newHome"
                    className="e-field"
                    type="checkbox"
                    data-name="newHome"
                    style={{ width: "100%" }}
                    value={props.newHome}
                    checked={props.newHome}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Play</td>
                <td>
                  <CheckBoxComponent
                    id="play"
                    className="e-field"
                    type="checkbox"
                    data-name="play"
                    style={{ width: "100%" }}
                    value={props.play}
                    checked={props.play}
                  ></CheckBoxComponent>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else if (props !== undefined && props.type === "boarding") {
      return (
        <div>
          <table
            className="custom-event-editor"
            style={{ width: "100%", cellpadding: "5" }}
          >
            <tbody>
              <tr>
                <td className="e-textlabel">Appointment Type</td>
                <td colSpan={4}>
                  <input
                    id="type"
                    className="e-field e-input"
                    type="text"
                    name="type"
                    style={{ width: "100%" }}
                    value={props.Subject}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Customer</td>
                <td colSpan={4}>
                  <input
                    id="username"
                    className="e-field e-input"
                    type="text"
                    name="username"
                    style={{ width: "100%" }}
                    value={props.Subject}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Dogs</td>
                <td colSpan={4}>
                  <MultiSelectComponent
                    id="dogNames"
                    placeholder="Choose dogs"
                    data-name="dogNames"
                    className="e-field"
                    style={{ width: "100%" }}
                    dataSource={this.dogList}
                    value={props.dogNames || null}
                    mode="Box"
                  ></MultiSelectComponent>
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Start Time</td>
                <td colSpan={4}>
                  <DateTimePickerComponent
                    format="dd/MM/yy hh:mm a"
                    id="StartTime"
                    data-name="StartTime"
                    value={new Date(props.startTime || props.StartTime)}
                    className="e-field"
                  ></DateTimePickerComponent>
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">End Time</td>
                <td colSpan={4}>
                  <DateTimePickerComponent
                    format="dd/MM/yy hh:mm a"
                    id="EndTime"
                    data-name="EndTime"
                    value={new Date(props.endTime || props.EndTime)}
                    className="e-field"
                  ></DateTimePickerComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Total</td>
                <td>
                  <input
                    id="total"
                    className="e-field e-input"
                    type="text"
                    name="total"
                    style={{ width: "100%" }}
                  />
                </td>
                <td className="e-textlabel">Amount Paid</td>
                <td>
                  <input
                    id="amountPaid"
                    className="e-field e-input"
                    type="text"
                    name="amountPaid"
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Approved</td>
                <td>
                  <CheckBoxComponent
                    id="isApproved"
                    className="e-field"
                    type="checkbox"
                    data-name="isApproved"
                    style={{ width: "100%" }}
                    value={props.isApproved}
                    checked={props.isApproved}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Cancelled</td>
                <td>
                  <CheckBoxComponent
                    id="isCancelled"
                    className="e-field"
                    type="checkbox"
                    data-name="isCancelled"
                    style={{ width: "100%" }}
                    value={props.isCancelled}
                    checked={props.isCancelled}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Additional Comments</td>
                <td colSpan={4}>
                  <textarea
                    id="additionalComments"
                    className="e-field e-input"
                    name="additionalComments"
                    rows={3}
                    cols={50}
                    style={{
                      width: "100%",
                      height: "60px !important",
                      resize: "vertical",
                    }}
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel"></td>
              </tr>
              <tr>
                <td height="50" colSpan={4}>
                  Boarding Option
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Grooming</td>
                <td>
                  <CheckBoxComponent
                    id="grooming"
                    className="e-field"
                    type="checkbox"
                    data-name="grooming"
                    style={{ width: "100%" }}
                    value={props.grooming}
                    checked={props.grooming}
                  ></CheckBoxComponent>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else if (props !== undefined && props.type === "daycare") {
      return (
        <div>
          <table
            className="custom-event-editor"
            style={{ width: "100%", cellpadding: "5" }}
          >
            <tbody>
              <tr>
                <td className="e-textlabel">Appointment Type</td>
                <td colSpan={4}>
                  <input
                    id="type"
                    className="e-field e-input"
                    type="text"
                    name="type"
                    style={{ width: "100%" }}
                    value={props.Subject}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Customer</td>
                <td colSpan={4}>
                  <input
                    id="username"
                    className="e-field e-input"
                    type="text"
                    name="username"
                    style={{ width: "100%" }}
                    value={props.Subject}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Dogs</td>
                <td colSpan={4}>
                  <MultiSelectComponent
                    id="dogNames"
                    placeholder="Choose dogs"
                    data-name="dogNames"
                    className="e-field"
                    style={{ width: "100%" }}
                    dataSource={this.dogList}
                    value={props.dogNames || null}
                    mode="Box"
                  ></MultiSelectComponent>
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">Start Time</td>
                <td colSpan={4}>
                  <DateTimePickerComponent
                    format="dd/MM/yy hh:mm a"
                    id="StartTime"
                    data-name="StartTime"
                    value={new Date(props.startTime || props.StartTime)}
                    className="e-field"
                  ></DateTimePickerComponent>
                </td>
              </tr>
              <tr>
                <td className="e-textlabel">End Time</td>
                <td colSpan={4}>
                  <DateTimePickerComponent
                    format="dd/MM/yy hh:mm a"
                    id="EndTime"
                    data-name="EndTime"
                    value={new Date(props.endTime || props.EndTime)}
                    className="e-field"
                  ></DateTimePickerComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Total</td>
                <td>
                  <input
                    id="total"
                    className="e-field e-input"
                    type="text"
                    name="total"
                    style={{ width: "100%" }}
                  />
                </td>
                <td className="e-textlabel">Amount Paid</td>
                <td>
                  <input
                    id="amountPaid"
                    className="e-field e-input"
                    type="text"
                    name="amountPaid"
                    style={{ width: "100%" }}
                  />
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Approved</td>
                <td>
                  <CheckBoxComponent
                    id="isApproved"
                    className="e-field"
                    type="checkbox"
                    data-name="isApproved"
                    style={{ width: "100%" }}
                    value={props.isApproved}
                    checked={props.isApproved}
                  ></CheckBoxComponent>
                </td>
                <td className="e-textlabel">Cancelled</td>
                <td>
                  <CheckBoxComponent
                    id="isCancelled"
                    className="e-field"
                    type="checkbox"
                    data-name="isCancelled"
                    style={{ width: "100%" }}
                    value={props.isCancelled}
                    checked={props.isCancelled}
                  ></CheckBoxComponent>
                </td>
              </tr>

              <tr>
                <td className="e-textlabel">Additional Comments</td>
                <td colSpan={4}>
                  <textarea
                    id="additionalComments"
                    className="e-field e-input"
                    name="additionalComments"
                    rows={3}
                    cols={50}
                    style={{
                      width: "100%",
                      height: "60px !important",
                      resize: "vertical",
                    }}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else if (props !== undefined) {
      return (
        <table
          className="custom-event-editor"
          style={{ width: "100%", cellpadding: "5" }}
        >
          <tbody>
            <tr>
              <td className="e-textlabel">Appointment Type</td>
              <td colSpan={4}>
                <DropDownListComponent
                  id="type"
                  placeholder="Choose appointment type"
                  data-name="type"
                  className="e-field"
                  style={{ width: "100%" }}
                  dataSource={["daycare", "boarding", "training"]}
                  value={props.type || null}
                ></DropDownListComponent>
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">Customer</td>
              <td colSpan={4}>
                <input
                  id="username"
                  className="e-field e-input"
                  type="text"
                  name="username"
                  style={{ width: "100%" }}
                  value={props.Subject}
                  readOnly
                />
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">Dogs</td>
              <td colSpan={4}>
                <MultiSelectComponent
                  id="dogNames"
                  placeholder="Choose dogs"
                  data-name="dogNames"
                  className="e-field"
                  style={{ width: "100%" }}
                  dataSource={this.dogList}
                  value={props.dogNames || null}
                  mode="Box"
                ></MultiSelectComponent>
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">Start Time</td>
              <td colSpan={4}>
                <DateTimePickerComponent
                  format="dd/MM/yy hh:mm a"
                  id="StartTime"
                  data-name="StartTime"
                  value={new Date(props.startTime || props.StartTime)}
                  className="e-field"
                ></DateTimePickerComponent>
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">End Time</td>
              <td colSpan={4}>
                <DateTimePickerComponent
                  format="dd/MM/yy hh:mm a"
                  id="EndTime"
                  data-name="EndTime"
                  value={new Date(props.endTime || props.EndTime)}
                  className="e-field"
                ></DateTimePickerComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Total</td>
              <td>
                <input
                  id="total"
                  className="e-field e-input"
                  type="text"
                  name="total"
                  style={{ width: "100%" }}
                />
              </td>
              <td className="e-textlabel">Amount Paid</td>
              <td>
                <input
                  id="amountPaid"
                  className="e-field e-input"
                  type="text"
                  name="amountPaid"
                  style={{ width: "100%" }}
                />
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Approved</td>
              <td>
                <CheckBoxComponent
                  id="isApproved"
                  className="e-field"
                  type="checkbox"
                  data-name="isApproved"
                  style={{ width: "100%" }}
                  value={props.isApproved}
                  checked={props.isApproved}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">Cancelled</td>
              <td>
                <CheckBoxComponent
                  id="isCancelled"
                  className="e-field"
                  type="checkbox"
                  data-name="isCancelled"
                  style={{ width: "100%" }}
                  value={props.isCancelled}
                  checked={props.isCancelled}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Additional Comments</td>
              <td colSpan={4}>
                <textarea
                  id="additionalComments"
                  className="e-field e-input"
                  name="additionalComments"
                  rows={3}
                  cols={50}
                  style={{
                    width: "100%",
                    height: "60px !important",
                    resize: "vertical",
                  }}
                ></textarea>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel"></td>
            </tr>
            <tr>
              <td height="50" colSpan={4}>
                Boarding Option
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">Grooming</td>
              <td>
                <CheckBoxComponent
                  id="grooming"
                  className="e-field"
                  type="checkbox"
                  data-name="grooming"
                  style={{ width: "100%" }}
                  value={props.grooming}
                  checked={props.grooming}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel"></td>
            </tr>
            <tr>
              <td height="50" colSpan={4}>
                Training Options
              </td>
            </tr>
            <tr>
              <td className="e-textlabel">Barking</td>
              <td>
                <CheckBoxComponent
                  id="barking"
                  className="e-field"
                  type="checkbox"
                  data-name="barking"
                  style={{ width: "100%" }}
                  value={props.barking}
                  checked={props.barking}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">Chewing Destruction</td>
              <td>
                <CheckBoxComponent
                  id="chewingDestruction"
                  className="e-field"
                  type="checkbox"
                  data-name="chewingDestruction"
                  style={{ width: "100%" }}
                  value={props.chewingDestruction}
                  checked={props.chewingDestruction}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Counter Surfing</td>
              <td>
                <CheckBoxComponent
                  id="counterSurfing"
                  className="e-field"
                  type="checkbox"
                  data-name="counterSurfing"
                  style={{ width: "100%" }}
                  value={props.counterSurfing}
                  checked={props.counterSurfing}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">Digging</td>
              <td>
                <CheckBoxComponent
                  id="digging"
                  className="e-field"
                  type="checkbox"
                  data-name="digging"
                  style={{ width: "100%" }}
                  value={props.digging}
                  checked={props.digging}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Jumping</td>
              <td>
                <CheckBoxComponent
                  id="jumping"
                  className="e-field"
                  type="checkbox"
                  data-name="jumping"
                  style={{ width: "100%" }}
                  value={props.jumping}
                  checked={props.jumping}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">Pulling on Leash</td>
              <td>
                <CheckBoxComponent
                  id="pullingOnLeash"
                  className="e-field"
                  type="checkbox"
                  data-name="pullingOnLeash"
                  style={{ width: "100%" }}
                  value={props.pullingOnLeash}
                  checked={props.pullingOnLeash}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Building Confidence</td>
              <td>
                <CheckBoxComponent
                  id="buildingConfidence"
                  className="e-field"
                  type="checkbox"
                  data-name="buildingConfidence"
                  style={{ width: "100%" }}
                  value={props.buildingConfidence}
                  checked={props.buildingConfidence}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">Chewing</td>
              <td>
                <CheckBoxComponent
                  id="chewing"
                  className="e-field"
                  type="checkbox"
                  data-name="chewing"
                  style={{ width: "100%" }}
                  value={props.chewing}
                  checked={props.chewing}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Handling</td>
              <td>
                <CheckBoxComponent
                  id="handling"
                  className="e-field"
                  type="checkbox"
                  data-name="handling"
                  style={{ width: "100%" }}
                  value={props.handling}
                  checked={props.handling}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">House Training</td>
              <td>
                <CheckBoxComponent
                  id="houseTraining"
                  className="e-field"
                  type="checkbox"
                  data-name="houseTraining"
                  style={{ width: "100%" }}
                  value={props.houseTraining}
                  checked={props.houseTraining}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Mouthing</td>
              <td>
                <CheckBoxComponent
                  id="mouthing"
                  className="e-field"
                  type="checkbox"
                  data-name="mouthing"
                  style={{ width: "100%" }}
                  value={props.mouthing}
                  checked={props.mouthing}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">Socialization</td>
              <td>
                <CheckBoxComponent
                  id="socialization"
                  className="e-field"
                  type="checkbox"
                  data-name="socialization"
                  style={{ width: "100%" }}
                  value={props.socialization}
                  checked={props.socialization}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Distraction Strategies</td>
              <td>
                <CheckBoxComponent
                  id="distractionStrategies"
                  className="e-field"
                  type="checkbox"
                  data-name="distractionStrategies"
                  style={{ width: "100%" }}
                  value={props.distractionStrategies}
                  checked={props.distractionStrategies}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">Exercise</td>
              <td>
                <CheckBoxComponent
                  id="exercise"
                  className="e-field"
                  type="checkbox"
                  data-name="exercise"
                  style={{ width: "100%" }}
                  value={props.exercise}
                  checked={props.exercise}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Focus Strategies</td>
              <td>
                <CheckBoxComponent
                  id="focusStrategies"
                  className="e-field"
                  type="checkbox"
                  data-name="focusStrategies"
                  style={{ width: "100%" }}
                  value={props.focusStrategies}
                  checked={props.focusStrategies}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">Loose Leash Walking</td>
              <td>
                <CheckBoxComponent
                  id="looseLeashWalking"
                  className="e-field"
                  type="checkbox"
                  data-name="looseLeashWalking"
                  style={{ width: "100%" }}
                  value={props.looseLeashWalking}
                  checked={props.looseLeashWalking}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Mat Work</td>
              <td>
                <CheckBoxComponent
                  id="matWork"
                  className="e-field"
                  type="checkbox"
                  data-name="matWork"
                  style={{ width: "100%" }}
                  value={props.matWork}
                  checked={props.matWork}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">Stealing Items Chase Game</td>
              <td>
                <CheckBoxComponent
                  id="stealingItemsChaseGame"
                  className="e-field"
                  type="checkbox"
                  data-name="stealingItemsChaseGame"
                  style={{ width: "100%" }}
                  value={props.stealingItemsChaseGame}
                  checked={props.stealingItemsChaseGame}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">New Baby</td>
              <td>
                <CheckBoxComponent
                  id="newBaby"
                  className="e-field"
                  type="checkbox"
                  data-name="newBaby"
                  style={{ width: "100%" }}
                  value={props.newBaby}
                  checked={props.newBaby}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">New Cat</td>
              <td>
                <CheckBoxComponent
                  id="newCat"
                  className="e-field"
                  type="checkbox"
                  data-name="newCat"
                  style={{ width: "100%" }}
                  value={props.newCat}
                  checked={props.newCat}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">New Dog</td>
              <td>
                <CheckBoxComponent
                  id="newDog"
                  className="e-field"
                  type="checkbox"
                  data-name="newDog"
                  style={{ width: "100%" }}
                  value={props.newDog}
                  checked={props.newDog}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">New Significant Other</td>
              <td>
                <CheckBoxComponent
                  id="newSignificantOther"
                  className="e-field"
                  type="checkbox"
                  data-name="newSignificantOther"
                  style={{ width: "100%" }}
                  value={props.newSignificantOther}
                  checked={props.newSignificantOther}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">Additional Household Members</td>
              <td>
                <CheckBoxComponent
                  id="additionalHouseholdMembers"
                  className="e-field"
                  type="checkbox"
                  data-name="additionalHouseholdMembers"
                  style={{ width: "100%" }}
                  value={props.additionalHouseholdMembers}
                  checked={props.additionalHouseholdMembers}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">Children And Dogs</td>
              <td>
                <CheckBoxComponent
                  id="childrenAndDogs"
                  className="e-field"
                  type="checkbox"
                  data-name="childrenAndDogs"
                  style={{ width: "100%" }}
                  value={props.childrenAndDogs}
                  checked={props.childrenAndDogs}
                ></CheckBoxComponent>
              </td>
            </tr>

            <tr>
              <td className="e-textlabel">New Home</td>
              <td>
                <CheckBoxComponent
                  id="newHome"
                  className="e-field"
                  type="checkbox"
                  data-name="newHome"
                  style={{ width: "100%" }}
                  value={props.newHome}
                  checked={props.newHome}
                ></CheckBoxComponent>
              </td>
              <td className="e-textlabel">Play</td>
              <td>
                <CheckBoxComponent
                  id="play"
                  className="e-field"
                  type="checkbox"
                  data-name="play"
                  style={{ width: "100%" }}
                  value={props.play}
                  checked={props.play}
                ></CheckBoxComponent>
              </td>
            </tr>
          </tbody>
        </table>
      );
    } else return <div></div>;
  }

  getTimeString(value) {
    return this.instance.formatDate(value, { skeleton: "hm" });
  }

  eventTemplate(props) {
    if (props.type === "daycare") {
      return (
        <div
          className="template-wrap"
          style={{
            //background: "#1F271B",
            //background: "#5B5B5B",
            background: "#06070E",
            paddingBottom: 2000,
            marginLeft: -5,
            marginRight: -20,
            paddingLeft: 5,
            paddingRight: 1000,
          }}
        >
          <div className="type" style={{ background: "#06070E" }}>
            {props.type}
          </div>
          <div className="time" style={{ background: "#06070E" }}>
            Time: {this.getTimeString(props.StartTime)} -{" "}
            {this.getTimeString(props.EndTime)}
          </div>
        </div>
      );
    } else if (props.type === "boarding") {
      return (
        <div
          className="template-wrap"
          style={{
            //background: "#19674E",
            //background: "#7D7C7A",
            background: "#29524A",
            paddingBottom: 2000,
            marginLeft: -5,
            marginRight: -20,
            paddingLeft: 5,
            paddingRight: 1000,
          }}
        >
          <div className="type" style={{ background: "#29524A" }}>
            {props.type}
          </div>
          <div className="time" style={{ background: "#29524A" }}>
            Time: {this.getTimeString(props.StartTime)} -{" "}
            {this.getTimeString(props.EndTime)}
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="template-wrap"
          style={{
            //background: "#28AFB0",
            //background: "#C9C19F",
            background: "#94A187",
            paddingBottom: 2000,
            marginLeft: -5,
            marginRight: -20,
            paddingLeft: 5,
            paddingRight: 1000,
          }}
        >
          <div className="type" style={{ background: "#94A187" }}>
            {props.type}
          </div>
          <div className="time" style={{ background: "#94A187" }}>
            Time: {this.getTimeString(props.StartTime)} -{" "}
            {this.getTimeString(props.EndTime)}
          </div>
        </div>
      );
    }
  }

  header(props) {
    if (props.elementType === "cell") {
      return (
        <div className="e-cell-header">
          <div className="e-header-icon-wrapper">
            <button className="e-close" title="Close"></button>
          </div>
        </div>
      );
    } else if (props.type === "daycare") {
      return (
        <div className="e-event-header" style={{ backgroundColor: "#06070E" }}>
          <div className="e-header-icon-wrapper">
            <button className="e-close" title="CLOSE"></button>
          </div>
        </div>
      );
    } else if (props.type === "boarding") {
      return (
        <div className="e-event-header" style={{ backgroundColor: "#29524A" }}>
          <div className="e-header-icon-wrapper">
            <button className="e-close" title="CLOSE"></button>
          </div>
        </div>
      );
    } else if (props.type === "training") {
      return (
        <div className="e-event-header" style={{ backgroundColor: "#94A187" }}>
          <div className="e-header-icon-wrapper">
            <button className="e-close" title="CLOSE"></button>
          </div>
        </div>
      );
    }
  }
  content(props) {
    let startTime = "";
    if (props.StartTime !== undefined) {
      startTime = new Date(props.startTime || props.StartTime).toString();
    }
    var formattedStart = Moment(startTime).format("LL LT");

    let endTime = "";
    if (props.StartTime !== undefined) {
      endTime = new Date(props.endTime || props.EndTime).toString();
    }
    var formattedEnd = Moment(endTime).format("LL LT");

    let dogNames = "";
    if (props.dogNames !== undefined) {
      dogNames = props.dogNames.toString();
    }

    return (
      <div>
        {props.elementType === "cell" ? (
          <div className="e-event-content e-template">
            <div className="e-subject-wrap">
              <div className="e-textlabel">
                <h3>New Event</h3>
              </div>
              <div colSpan={4}>
                <DropDownListComponent
                  id="username"
                  placeholder="Choose customer"
                  data-name="username"
                  className="e-subject e-field e-input"
                  style={{ width: "100%" }}
                  dataSource={this.state.usernames}
                  value={props.Subject || null}
                  select={this.onComplete.bind(this)}
                ></DropDownListComponent>
              </div>

              {props.Description !== undefined ? (
                <div className="description">{props.Description}</div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="e-event-content e-template">
            <div className="e-subject-wrap">
              {props.type !== undefined ? (
                <div className="type">
                  <h3>{props.type}</h3>
                </div>
              ) : (
                ""
              )}
              {props.username !== undefined ? (
                <div className="username">
                  <h5>Customer: {props.username}</h5>
                </div>
              ) : (
                ""
              )}
              {props.dogNames !== undefined ? (
                <div className="dogNames">
                  <h5>Dogs: {dogNames}</h5>
                </div>
              ) : (
                ""
              )}
              {props.StartTime !== undefined ? (
                <div className="startTime">
                  <h5>Start Time: {formattedStart}</h5>
                </div>
              ) : (
                ""
              )}
              {props.EndTime !== undefined ? (
                <div className="endTime">
                  <h5>End Time: {formattedEnd}</h5>
                </div>
              ) : (
                ""
              )}
              {console.log(formattedStart)}

              {props.Description !== undefined ? (
                <div className="description">{props.Description}</div>
              ) : (
                ""
              )}
            </div>
            <div className="e-event-footer">
              <button className="e-event-edit" title="Edit">
                Edit
              </button>
              <button className="e-event-delete" title="Delete">
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
  footer(props) {
    return (
      <div>
        {props.elementType === "cell" ? (
          <div className="e-cell-footer">
            <button className="e-event-details" title="Extra Details">
              Next Step
            </button>
          </div>
        ) : (
          <div className="e-event-footer"></div>
        )}
      </div>
    );
  }

  render() {
    this.getAppointmentInfo();
    this.getCustomerInfo();
    this.getDogInfo();

    return (
      <div>
        <ScheduleComponent
          ref={(t) => (this.scheduleObj = t)}
          currentView="Month"
          eventSettings={{
            dataSource: this.state.data,
            template: this.eventTemplate.bind(this),
            fields: {
              id: "Id",
              description: {
                name: "dogNames",
                title: "Dogs",
                validation: { required: true },
              },
              subject: {
                name: "username",
                title: "Owner",
                default: "admin",
                validation: { required: true },
              },
              location: {
                title: "Appointment Type",
                name: "Location",
                default: "daycare",
                validation: { required: true },
              },
            },
          }}
          editorTemplate={this.editorTemplate.bind(this)}
          popupOpen={this.onPopupOpen.bind(this)}
          actionBegin={this.onActionBegin.bind(this)}
          dataChange={this.onDataChange.bind(this)}
          editorClose={this.onEditorClose.bind(this)}
          quickInfoTemplates={{
            dataSource: this.state.data,
            header: this.header.bind(this),
            content: this.content.bind(this),
            footer: this.footer.bind(this),
            fields: {
              id: "Id",
              description: { name: "dogNames", title: "Dogs" },
              subject: {
                name: "username",
                title: "Owner",
                default: "admin",
              },
              location: {
                title: "Appointment Type",
                name: "Location",
                default: "daycare",
              },
            },
          }}
        >
          <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
            <ViewDirective
              option="WorkWeek"
              startHour="07:00"
              endHour="21:00"
            />
            <ViewDirective option="Month" />
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month]} />
        </ScheduleComponent>
      </div>
    );
  }
}

export default CalendarMain;
