import React from "react";
import "../css/reg.css";
import "../css/userAccount.css";
import DogProfile from "./DogProfile";
import BasePath from "../api/BasePath";
import { getQueriesForElement } from "@testing-library/react";
import { Link } from "react-router-dom";

class UserAccount extends React.Component {
  state = {
    userList: [],
    dogList: [],
    dog: "",
    user: {},
    address: {},
    password: "",
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

    // dogname: "",
    // breed: "",
    // dob: "",
    // gender: "",
    // weight: "",
    // neuteredspayed: "",
    // medication: "",
    // allergies: "",
    // physlimit: "",
    // veterinarian: "",
    // strangers: "",
    // largerdogs: "",
    // smalldogs: "",
    // puppies: "",
    // da2pp: "",
    // rabies: "",
    // bordetella: ""
  };

  // onFormSubmit = event => {
  //   event.preventDefault();

  //   this.props.onSubmit(
  //     this.state.username,
  //     this.state.password,
  //     this.state.fname,
  //     this.state.lname,
  //     this.state.email,

  //     this.state.appt,
  //     this.state.building,
  //     this.state.street,
  //     this.state.city,
  //     this.state.province,
  //     this.state.postcode,
  //     this.state.phone,
  //     this.state.emergencyphone,
  //     this.state.emergencyname,

  //     this.state.dogname,
  //     this.state.breed,
  //     this.state.dob,
  //     this.state.gender,
  //     this.state.weight,
  //     this.state.neuteredspayed,
  //     this.state.medication,
  //     this.state.allergies,
  //     this.state.physlimit,
  //     this.state.veterinarian,

  //     this.state.strangers,
  //     this.state.largerdogs,
  //     this.state.smalldogs,
  //     this.state.puppies,
  //     this.state.da2pp,
  //     this.state.rabies,
  //     this.state.bordetella
  //   );
  // };

  UNSAFE_componentWillMount() {
    var token = localStorage.getItem("token");
    BasePath.get(`/webresources/RetrieveUser/${token}`)
      .then(result => {
        this.setState({ user: result.data });
        this.setState({ address: this.state.user.address });
        console.log(this.state.user);
        console.log(localStorage.getItem("token") + "!!!!!");
      })
      .catch(err => {
        console.log(err);
      });
    var token = localStorage.getItem("token");
    BasePath.get(`/webresources/RetrieveDogs/${token}`)
      .then(result => {
        this.setState({ dogList: result.data });
        const dogz = this.state.dogList.map(dog => dog + "dog");
        // console.log(this.state.dogList);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <div>
              <h1>{this.state.user.username}</h1>
            </div>
            <br />
            <div className="left">
              <div className="row">
                <div className="col-sm">
                  <b>Username: </b>
                </div>
                <div className="col-sm">{this.state.user.username}</div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Email: </b>
                </div>
                <div className="col-sm">{this.state.user.email}</div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm">
                  <b>First Name: </b>
                </div>
                <div className="col-sm">{this.state.user.firstName}</div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Last Name: </b>
                </div>
                <div className="col-sm">{this.state.user.lastName}</div>
              </div>

              <div className="row">
                <div className="col-sm">
                  <b>Address: </b>
                </div>
                <div className="col-sm">
                  {this.state.address.appt} {this.state.address.building}{" "}
                  {this.state.address.street} {this.state.address.city}{" "}
                  {this.state.address.province} {this.state.address.post}
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Phone: </b>
                </div>
                <div className="col-sm">{this.state.user.phone}</div>
              </div>
              <br />
              <br />
              <div className="row">
                <div className="col-sm">
                  <b>Emergency name: </b>
                </div>
                <div className="col-sm">{this.state.user.emergencyName}</div>
              </div>
              <div className="row">
                <div className="col-sm">
                  <b>Emergency phone #: </b>
                </div>
                <div className="col-sm">{this.state.user.emergencyPhone}</div>
              </div>
            </div>
            <br />
            <br />
            <Link
              to="EditCustomer"
              type="button"
              className="btn "
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                width: "50%"
              }}
            >
              Edit customer information
            </Link>
            <br />
            <br />
            <Link
              to="ChangePass"
              type="button"
              className="btn "
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
                width: "50%"
              }}
            >
              Change password
            </Link>
          </div>
        </div>
        <div className="col-sm-8">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <div className="row">
              <div className="col-sm">
                <h1>Your dogs: </h1>
              </div>
              <div className="col-sm">
              <Link 
              to="/AddDog" 
              type="button"
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
              }}
            >
              Add new dog
            </Link>
              </div>
            </div>
            <br />
            <br />
            <div>
              {this.state.dogList.map(dog => (
                <DogProfile key={dog.idNumber} chosenDog={dog} />
              ))}
              {/* <DogProfile /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserAccount;
