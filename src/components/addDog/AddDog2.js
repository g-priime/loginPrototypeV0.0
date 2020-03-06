import React from "react";
import "../../css/addDog.css";
import "../../css/reg.css";
import AddDog1 from "./AddDog1";
import { Link } from "react-router-dom";

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

class AddDog2 extends React.Component {
  state = {
    strangers: "",
    largerdogs: "",
    smalldogs: "",
    puppies: "",
    da2pp: "",
    rabies: "",
    bordetella: ""
  };

  onFormSubmit = event => {
    //debugger;
    event.preventDefault();

    this.props.onSubmit(
      
      this.state.strangers,
      this.state.largerdogs,
      this.state.smalldogs,
      this.state.puppies,
      this.state.da2pp,
      this.state.rabies,
      this.state.bordetella
      
    );
    
  };

  previousStep_onClick = event => {
    //differents name?
    event.preventDefault();
    this.props.onClick();
  };

  render() {
    return (
      <div
        className="ui segment p-3 mb-2 "
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="container">
            <h1>Add Dog</h1>
            <h2>Step 2</h2>
            <div className="left">
              <div className="row">
                <div className="col-sm-6">
                  <h3>Pet behavior Profile</h3>
                </div>
                <div className="col-sm-3">
                  <h3>Yes</h3>
                </div>
                <div className="col-sm-3">
                  <h3>No</h3>
                </div>
              </div>
              <br />
              
               <div className="row">
                <div className="col-sm-6">
                  Is your dog comfortable with strangers?
                </div>
                <div className="col-sm-3">
                  {" "}
                  <label>
                    <input
                      type="radio"
                      name="strangers"
                      value="yes"
                       //checked={this.props.strangers}
                      onChange={this.props.onChangeStrangers}
                    />
                  </label>
                </div>
                <div className="col-sm-3">
                  {" "}
                  <label>
                    <input
                      type="radio"
                      name="strangers"
                      value="no"
                       //checked={this.props.strangers}
                      onChange={this.props.onChangeStrangers}
                    />
                  </label>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-6">
                  Does your dog get along well with larger dogs?
                </div>
                <div className="col-sm-3">
                  {" "}
                  <label>
                    <input
                      type="radio"
                      name="largerdogs"
                      value="yes"
                       //checked={this.props.largerdogs}
                      onChange={this.props.onChangeLargerdogs}
                    />
                  </label>
                </div>
                <div className="col-sm-3">
                  {" "}
                  <label>
                    <input
                      type="radio"
                      name="largerdogs"
                      value="no"
                       //checked={this.props.largerdogs}
                      onChange={this.props.onChangeLargerdogs}
                    />
                  </label>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-6">
                  Does your dog get along well with smaller dogs?
                </div>
                <div className="col-sm-3">
                  {" "}
                  <label>
                    <input
                      type="radio"
                      name="smalldogs"
                      value="yes"
                      //checked={this.props.smalldogs}
                      onChange={this.props.onChangeSmalldogs}
                    />
                  </label>
                </div>
                <div className="col-sm-3">
                  {" "}
                  <label>
                    <input
                      type="radio"
                      name="smalldogs"
                      value="no"
                       //checked={this.props.smalldogs}
                      onChange={this.props.onChangeSmalldogs}
                    />
                  </label>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-6">
                  Does your dog get along well with puppies?
                </div>
                <div className="col-sm-3">
                  {" "}
                  <label>
                    <input
                      type="radio"
                      name="puppies"
                      value="yes"
                       //checked={this.props.puppies}
                      onChange={this.props.onChangePuppies}
                    />
                  </label>
                </div>
                <div className="col-sm-3">
                  {" "}
                  <label>
                    <input
                      type="radio"
                      name="puppies"
                      value="no"
                       //checked={this.props.puppies}
                      onChange={this.props.onChangePuppies}
                    />
                  </label>
                </div>
              </div> 
              <br />
              <br />
              <h3>Dog must have up to date vaccination Documents from vet</h3>
              
                 <div className="row">
                  
                  <div className="col-sm">
                    {" "}
                    <Hint />
                  </div>
                  <div className="col-sm">DA2PP</div>
                  <div className="col-sm">
                    {" "}
                    <input
                      required
                      type="date"
                      value={this.props.da2pp}
                      onChange={this.props.onChangeDa2pp}
                      inputlabelprops={{
                        shrink: true
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    {" "}
                    <Hint />
                  </div>
                  <div className="col-sm">RABIES</div>
                  <div className="col-sm">
                    {" "}
                    <input
                      required
                      type="date"
                      value={this.props.rabies}
                      onChange={this.props.onChangeRabies}
                      inputlabelprops={{
                        shrink: true
                      }}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    {" "}
                    <Hint />
                  </div>
                  <div className="col-sm">BORDETELLA</div>
                  <div className="col-sm">
                    {" "}
                    <input
                      required
                      type="date"
                      value={this.props.bordetella}
                      onChange={this.props.onChangeBordetella}
                      inputlabelprops={{
                        shrink: true
                      }}
                    />
                  </div>
                </div> 
              </div>
           
          </div>
          <div className="d-flex justify-content-between">
            <Link //creates a link, styled like a button
              to="/AddDog1" //telling to go to home, in adddog it should be accinfo
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
              Previous Step
            </Link>
            <button
              className="btn mr-3 mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
              }}
            >
              Save Information
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddDog2;
