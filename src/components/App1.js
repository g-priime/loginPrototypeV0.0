import React from "react";
//import UserAccount from './UserAccount';
import HomePage from './HomePage';
import RegisterMain from './register/RegisterMain';
import Gallery from './Gallery';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import Services from './Services';
import Login from './login/Login';
import BasePath from './../api/BasePath';
import '../css/main.css';
import Admin from './admintool/AdminTool';
import Footer from "./Footer";
import AdminTool from './admintool/AdminTool';
//import "../css/main.css";

import { BrowserRouter, Route } from "react-router-dom";
import Header1 from "./Header1";
import HomePageHTML from "./HomePageHTML";

import ChangePasswordMain from './changePassword/ChangePasswordMain';

import BookAppointmentMain from './bookAppointment/BookAppointmentMain';
//import { getQueriesForElement } from '@testing-library/react';
//import AddDogMain from './addDog/AddDogMain';
//import EditDogMain from './editDog/EditDogMain';
//import AddDog2 from './addDog/AddDog2';
//import AddDog1 from './addDog/AddDog1';
import BookDaycareMain from './bookDaycare/BookDaycareMain';
import BookTrainingMain from './bookTraining/BookTrainingMain';
import UserAccount from './UserAccount';
import AddDog from './addDog/AddDogMain';
import EditDog from './editDog/EditDogMain';
import EditCustomer from './editCustomer/EditCustomerMain';
import ViewAppointments from './viewAppointments/ViewAppointments';
import DisableAccountMain from "./disableAccount/DisableAccountMain";
import EditAppointmentMain from './editAppointment/EditAppointmentMain';
import BookAppointment from "./viewAppointments/BookAppointment";

class App1 extends React.Component {
  state = {
    show: false,
    errMsg: "",
    showDisableAccount: false,
    authenticated: false
  };

  toggleLogin = () => {
    this.setState({ show: true });
  };

  onHide = () => {
    this.setState({ show: false });
    this.setState({ errMsg: "" });
  };

  changeErr = msg => {
    this.setState({ errMsg: msg });
  };

  toggleDisableAccount = () => {
    this.setState({ showDisableAccount: true });
  };

  onHideDisableAccount = () => {
    this.setState({ showDisableAccount: false });
  };

  authenticate= (value) => {
    if (value) {
      this.setState({authenticated: true});
    } else {
      this.setState({authenticated: false});
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header1 showLogin={this.toggleLogin} authenticate={this.authenticate} authenticated={this.state.authenticated} showDisableAccount={this.toggleDisableAccount} />
            <div className="mt-4 ml-5 mr-5">
              <Route path="/" exact component={HomePageHTML} />
              <Route path="/Register" component={RegisterMain} />
              <Route path="/Services" component={Services} />
              <Route path="/Gallery" component={Gallery} />
              <Route path="/Testimonials" component={Testimonials} />
              <Route path="/FAQ" component={FAQ} />
              <Route path="/ChangePass" component={ChangePasswordMain} />
              <Route path="/Profile" component={UserAccount} />
              <Route path="/ViewAppointments" component={ViewAppointments} />
              <Route path="/BookBoarding" component={BookAppointmentMain} />
              <Route path="/BookTraining" component={BookTrainingMain} />
              <Route path="/BookDaycare" component={BookDaycareMain} />
              <Route path="/AddDog" component={AddDog} />
              <Route path="/EditDog" component={EditDog} />
              <Route path="/EditCustomer" component={EditCustomer} />
              <Route path="/DisableAccount" component={DisableAccountMain} />
              <Route path="/admin" component={() => <AdminTool authenticate={this.authenticate}/>} />
              <Route path="/EditAppointment" component={EditAppointmentMain} />
              <Route path="/BookAppointment" component={BookAppointment} />
              
              
              <Login
                show={this.state.show}
                onHide={this.onHide}
                errMsg={this.state.errMsg}
                changeErr={this.changeErr}
              />
              <DisableAccountMain
                authenticate={this.authenticate}
                showDisableAccount={this.state.showDisableAccount}
                onHideDisableAccount={this.onHideDisableAccount}
              />
            </div>
          </div>
        </BrowserRouter>
        <div><Footer /></div>
      </div>
    );
  }
}

export default App1;
