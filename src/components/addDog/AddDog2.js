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

            <div className="row">
              <table>
                <tr>
                  <th>Pet behavior Profile</th>
                  <th>Yes</th>
                  <th>No</th>
                </tr>
                <tr>
                  <td>Is your dog comfortable with strangers?</td>
                  <td>
                    {" "}
                    <label>
                      <input
                        type="radio"
                        name="strangers"
                        value="yes"
                        checked={this.props.strangers === "yes"}
                        onChange={this.props.onChangeStrangers}
                      />
                    </label>
                  </td>
                  <td>
                    {" "}
                    <label>
                      <input
                        type="radio"
                        name="strangers"
                        value="no"
                        checked={this.props.strangers === "no"}
                        onChange={this.props.onChangeStrangers}
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Does your dog get along well with larger dogs?</td>
                  <td>
                    {" "}
                    <label>
                      <input
                        type="radio"
                        name="largerdogs"
                        value="yes"
                        checked={this.props.largerdogs === "yes"}
                        onChange={this.props.onChangeLargerdogs}
                      />
                    </label>
                  </td>
                  <td>
                    {" "}
                    <label>
                      <input
                        type="radio"
                        name="largerdogs"
                        value="no"
                        checked={this.props.largerdogs === "no"}
                        onChange={this.props.onChangeLargerdogs}
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Does your dog get along well with smaller dogs?</td>
                  <td>
                    {" "}
                    <label>
                      <input
                        type="radio"
                        name="smalldogs"
                        value="yes"
                        checked={this.props.smalldogs === "yes"}
                        onChange={this.props.onChangeSmalldogs}
                      />
                    </label>
                  </td>
                  <td>
                    {" "}
                    <label>
                      <input
                        type="radio"
                        name="smalldogs"
                        value="no"
                        checked={this.props.smalldogs === "no"}
                        onChange={this.props.onChangeSmalldogs}
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Does your dog get along well with puppies?</td>
                  <td>
                    {" "}
                    <label>
                      <input
                        type="radio"
                        name="puppies"
                        value="yes"
                        checked={this.props.puppies === "yes"}
                        onChange={this.props.onChangePuppies}
                      />
                    </label>
                  </td>
                  <td>
                    {" "}
                    <label>
                      <input
                        type="radio"
                        name="puppies"
                        value="no"
                        checked={this.props.puppies === "no"}
                        onChange={this.props.onChangePuppies}
                      />
                    </label>
                  </td>
                </tr>
              </table>
            </div>
            <br />
            <label>
              <h2>Dog must have up to date vaccination Documents from vet</h2>
            </label>

            <table>
              <tr>
                <td>
                  <Hint />
                </td>
                <td>DA2PP</td>
                <td>
                  <input
                    required
                    type="date"
                    value={this.props.da2pp}
                    onChange={this.props.onChangeDa2pp}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Hint />
                </td>
                <td>RABIES</td>
                <td>
                  <input
                    required
                    type="date"
                    value={this.props.rabies}
                    onChange={this.props.onChangeRabies}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Hint />
                </td>
                <td>BORDETELLA</td>
                <td>
                  <input
                    required
                    type="date"
                    value={this.props.bordetella}
                    onChange={this.props.onChangeBordetella}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </td>
              </tr>
            </table>
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
                  "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
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
