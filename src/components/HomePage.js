import React from "react";
import Popup from "./PopUp";

class HomePage extends React.Component {

//   state = { message: "", cn: "", bgColor: 'blue' };


 UNSAFE_componentWillMount() {
    if (typeof this.props.location.state == "undefined" || this.props.location.state === null) {
        this.setState({ message: "" });
      } else {
        this.setState({ message: this.props.location.state.message });
        this.setState({ cn: "popup3" });
        this.togglePopup();
      }
 }

//   togglePopup() {
//     this.setState({
//       showPopup: !this.state.showPopup
//     });
//   }

  render() {
    return (
      <div className="ui segment">
        {/* Homepage
        <div>
          {this.state.showPopup ? (
            <Popup
              cn={this.state.cn}
              text={this.state.message}
              closePopup={this.togglePopup.bind(this)}
              bgColor={this.state.bgColor}
            />
          ) : null}
        </div> */}
      </div>
    );
  }
}

export default HomePage;
