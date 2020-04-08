import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import BasePath from "../api/BasePath";
import "../css/reg.css";
import "../css/userAccount.css";
import { Link } from "react-router-dom";
import PopUpConfirm from "./PopUpConfirm";

class DogProfile extends React.Component {
  state = {
    isOpen: false,
    showCon: false,
  };

  toggle = () => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  deleteDog = () => {
    var token = localStorage.getItem("token");
    BasePath.put("/webresources/deleteDog", {
      token: token,
      petID: this.props.chosenDog.idNumber,
    }).then((result) => {
      this.props.updateList();
    });
  };

  showConAndDel = () => {
    this.setState({ showCon: true });
  };

  dontConfirm = () => {
    this.setState({ showCon: false });
  };

  confirm = () => {
    this.setState({ showCon: false });
    this.deleteDog();
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
            marginBottom: "1rem",
            width: "30%",
            marginRight: 15,
          }}
          onClick={this.toggle}
        >
          {this.props.chosenDog.name}
        </Button>

        <Link
          to={{ pathname: "EditDog", state: { dog: this.props.chosenDog } }}
          type="button"
          className="btn mb-3"
          style={{
            fontWeight: "bold",
            backgroundColor: "#1D3461",
            color: "#ECEBE7",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            marginRight: 15,
          }}
        >
          Edit dog
        </Link>

        <div
          type="button"
          className="btn mb-3"
          style={{
            fontWeight: "bold",
            backgroundColor: "#1D3461",
            color: "#ECEBE7",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            marginRight: 15,
          }}
          onClick={this.showConAndDel}
        >
          Delete dog
        </div>

        {this.state.showCon ? (
          <PopUpConfirm
            dontConfirm={this.dontConfirm}
            confirm={this.confirm}
            text={
              "Are you sure you want to delete " +
              this.props.chosenDog.name +
              "?"
            }
            cn="popup3"
          />
        ) : null}

        <Collapse isOpen={this.state.isOpen}>
          <Card style={{ backgroundColor: "#ECEBE7" }}>
            <CardBody>
              <div>
                <div className="row">
                  <div className="col-sm">
                    <div className="row">
                      <div className="col-sm">
                        <div className="left">
                          <b>Breed: </b>
                        </div>
                      </div>
                      <div className="col-sm">{this.props.chosenDog.breed}</div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <div className="left">
                          <b>Date of birth: </b>
                        </div>
                      </div>
                      <div className="col-sm">
                        {this.props.chosenDog.dateOfBirth}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <div className="left">
                          <b>Gender: </b>
                        </div>
                      </div>
                      <div className="col-sm">
                        {this.props.chosenDog.gender}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <div className="left">
                          <b>Weight: </b>
                        </div>
                      </div>
                      <div className="col-sm">
                        {this.props.chosenDog.weight}kg
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm">
                        <div className="left">
                          <b>Spayed or </b>
                          <b>Neutered?:</b>
                        </div>
                      </div>{" "}
                      {this.props.chosenDog.spayedNeutered ? (
                        <div className="col-sm">Yes</div>
                      ) : (
                        <div className="col-sm">No</div>
                      )}
                    </div>
                  </div>
                  <div className="col-sm"></div>
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
                    <div className="left">
                      {this.props.chosenDog.medications}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="left">
                      <b>Allergies: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">{this.props.chosenDog.allergies}</div>
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
                    <div className="left"></div>
                    <div className="left">{this.props.chosenDog.physLimit}</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="left">
                      <b>Veterinarian: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    {this.props.chosenDog.veterinarian != null ? (
                      <div className="left">
                        {this.props.chosenDog.veterinarian.vetName}
                      </div>
                    ) : null}
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
                    {this.props.chosenDog.strangerComfortable ? (
                      <div className="left">Yes</div>
                    ) : (
                      <div className="left">No</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-10">
                    <div className="left">
                      <b>Does your dog get along well with larger dogs?: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    {this.props.chosenDog.largeDogFriendly ? (
                      <div className="left">Yes</div>
                    ) : (
                      <div className="left">No</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-10">
                    <div className="left">
                      <b>Does your dog get along well with smaller dogs?:</b>
                    </div>
                  </div>
                  <div className="col-sm">
                    {this.props.chosenDog.smallDogFriendly ? (
                      <div className="left">Yes</div>
                    ) : (
                      <div className="left">No</div>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-10">
                    <div className="left">
                      <b>Does your dog get along well with puppies?: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    {this.props.chosenDog.puppyFriendly ? (
                      <div className="left">Yes</div>
                    ) : (
                      <div className="left">No</div>
                    )}
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
                    <div className="left">
                      {this.props.chosenDog.vaccines.da2pp}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="left">
                      <b>Rabies: </b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">
                      {this.props.chosenDog.vaccines.rabies}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="left">
                      <b>Bordetella:</b>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div className="left">
                      {this.props.chosenDog.vaccines.bordetella}
                    </div>
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
