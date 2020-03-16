import React from "react";
import "../css/popup.css";

class PopUpConfirm extends React.Component {
  state = { cn: "" };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className={this.props.cn}>
            <div className="popup\_inner">
              <h1>{this.props.text}</h1>
              <button
                className="btn"
                style={{
                  fontWeight: "bold",
                  backgroundColor: this.props.bgColor,
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}
                onClick={this.props.confirm}
              >
                Yes
              </button>
              <button
                className="btn"
                style={{
                  fontWeight: "bold",
                  backgroundColor: this.props.bgColor,
                  color: "#ECEBE7",
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                }}
                onClick={this.props.dontConfirm}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUpConfirm;
