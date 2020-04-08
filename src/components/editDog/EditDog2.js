import React from "react";
import "../../css/addDog.css";
import "../../css/reg.css";

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

class EditDog2 extends React.Component {
  state = {
    strangers: "",
    largerdogs: "",
    smalldogs: "",
    puppies: "",
    train: "",
    da2pp: "",
    rabies: "",
    bordetella: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(
      this.state.strangers,
      this.state.largerdogs,
      this.state.smalldogs,
      this.state.puppies,
      this.state.train,
      this.state.da2pp,
      this.state.rabies,
      this.state.bordetella
    );
  };

  previousStep_onClick = (event) => {
    event.preventDefault();
    this.props.onClickPrev();
  };

  render() {
    return (
      <div
        className="ui segment p-3 mb-2 "
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="container">
            <h1>Edit Dog</h1>
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
                      value={true}
                      checked={this.props.strangers === "true"}
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
                      value={false}
                      checked={this.props.strangers === "false"}
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
                      value={true}
                      checked={this.props.largerdogs === "true"}
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
                      value={false}
                      checked={this.props.largerdogs === "false"}
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
                      value={true}
                      checked={this.props.smalldogs === "true"}
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
                      value={false}
                      checked={this.props.smalldogs === "false"}
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
                      value={true}
                      checked={this.props.puppies === "true"}
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
                      value={false}
                      checked={this.props.puppies === "false"}
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
                    InputLabelProps={{
                      shrink: true,
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
                    InputLabelProps={{
                      shrink: true,
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              onClick={this.previousStep_onClick}
              className="btn mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
              }}
            >
              Previous Step
            </button>
            <button
              className="btn mr-3 mb-3"
              style={{
                fontWeight: "bold",
                backgroundColor: "#1D3461",
                color: "#ECEBE7",
                boxShadow:
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
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

export default EditDog2;
