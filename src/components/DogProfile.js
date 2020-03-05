import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import BasePath from "../api/BasePath";
import "../css/reg.css";
import "../css/userAccount.css";
//here receive the dog, in the props

class DogProfile extends React.Component {
  // const DogProfile = props => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => setIsOpen(!isOpen);

  state = {
    userList: [],
    dogList: [],
    dog: "",
    user: {},
    isOpen: false,

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
    strangers: "",
    largerdogs: "",
    smalldogs: "",
    puppies: "",
    da2pp: "",
    rabies: "",
    bordetella: ""
  };

  // UNSAFE_componentWillMount() {
  //   var token = localStorage.getItem('token');
  //   BasePath.get(`/webresources/RetrieveDogs/${token}`)
  //     .then(result => {
  //       console.log(result.data);
  //       this.setState({ dogList: result.data });
  //       console.log(this.state.dogList);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  toggle = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    return (
      <div className="align-items: left">
        <Button
          className="btn "
          style={{
            fontWeight: "bold",
            backgroundColor: "#ECEBE7",
            color: "#0D0000",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            marginBottom: "1rem"
          }}
          onClick={this.toggle}
        >
          {this.props.chosenDog.name}
        </Button>
        {/* 2 buttons. for Edit onClick goes to function that Edit willgo to edit dog ....in edit dog=>(Put method....BasePath.put(chosenDog.idNumber, {})) Edit would onClick sets boolean and if Edit is true - display the other HTML */}
        {/* {this.props.chosenDog.dogname} */}
        <Collapse isOpen={this.state.isOpen}>
          {/* <Collapse isOpen={true}> */}
          <Card style={{ backgroundColor: "#ECEBE7" }}>
            <CardBody>
              <div>
                {/* <div>{this.props.chosenDog.dogname}</div> */}

                <div className="row">
                  <div className="col-sm">
                    <div className="row">
                      <div className="col-sm">
                        <div className="left">
                          <b>Breed: </b>
                        </div>
                      </div>
                      <div className="col-sm">---</div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <div className="left">
                          <b>Date of birth: </b>
                        </div>
                      </div>
                      <div className="col-sm">---</div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <div className="left">
                          <b>Gender: </b>
                        </div>
                      </div>
                      <div className="col-sm">---</div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <div className="left">
                          <b>Weight: </b>
                        </div>
                      </div>
                      <div className="col-sm">---</div>
                    </div>
                    <div className="left">
                      <b>neuteredSpayed</b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="center">picture goes here</div>
                  </div>
                </div>
                <br />
                <h2>Care</h2>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="left">
                      <b>Medication: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">---</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="left">
                      <b>Allergies: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">---</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="left">
                      <b>Physical limitations</b>
                      <br />
                      <b>or health problems: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">---</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="left">
                      <b>Veterinarian: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">---</div>
                  </div>
                </div>
                <br />
                <h2>Pet behavior profile</h2>
                <div className="row">
                  <div className="col-sm-10">
                    <div className="left">
                      <b>Is your dog comfortable with strangers?: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">---</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-10">
                    <div className="left">
                      <b>Does your dog get along well with larger dogs?: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">---</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-10">
                    <div className="left">
                      <b>Does your dog get along well with smaller dogs?</b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">---</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-10">
                    <div className="left">
                      <b>Does your dog get along well with puppies?: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">---</div>
                  </div>
                </div>
                <br />
                <h2>Vaccination list</h2>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="left">
                      <b>DA2PP: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">---</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="left">
                      <b>Rabies: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">---</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="left">
                      <b>Bordetella</b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">---</div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default DogProfile;
