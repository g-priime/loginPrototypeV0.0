import React from "react";
import "../css/reg.css";
import "../css/homePage.css";
import CarouselHome from "./CarouselHome";
import Popup from "./PopUp";

import {
  Card,
  CardImg,
  //CardText,
  CardBody,
  //CardTitle,
  //CardSubtitle,
  //Button
} from "reactstrap";

class HomePageHTML extends React.Component {
  state = { message: "", cn: "", bgColor: 'blue' };

 UNSAFE_componentWillMount() {
    if (typeof this.props.location.state == "undefined" || this.props.location.state === null) {
        this.setState({ message: "" });
      } else {
        this.setState({ message: this.props.location.state.message });
        this.setState({ cn: "popup3" });
        this.togglePopup();
      }
 }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
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
            <Card
              className="cardbg "
              style={{
                borderColor: "#827153",
                borderWidth: "4px",
                margin: "35px"
              }}
            >
              <CardImg
                top
                width="auto"
                height="auto"
                src={require("../images/welcome.jpg")}
                alt="Card image cap"
              />
              <CardBody className="card-bodyHome"></CardBody>
            </Card>
            <h1 style={{ color: "#715d5c" }}>Welcome to our fun family!</h1>
            {/* <p style={{ width: "70%", margin: "45px" }}> */}
            <div style={{ width: "100%", display:"flex",flexDirection:"column"}}>
            <p className="par" style={{ width: "80%", alignSelf: "center"}}>
              We have everything you need for the day to day care of your canine
              friend. We offer progressive training methods to help you get
              through the toughest problems and shape your pal into the perfect
              companion. For those times when you’re away, we offer boarding in
              our home. We understand how important your dog is to you, and we
              want to be a part of your adventure together!
            </p>
            </div>
          </div>
        </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <CarouselHome />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm">
              <div
                className="ui segment p-3 mb-2 "
                style={{ backgroundColor: "#ECEBE7" }}
              >
                <h1 style={{ color: "#715d5c" }}>Features and benefits</h1>
                <br />
                <div className="bolder">
                  <ul>
                    <li>
                      Daycare and overnight boarding are both available, in a
                      loving home environment!{" "}
                    </li>
                    <li>
                      Private Dog Training gives you the exact solution you need
                    </li>
                    <li>
                      Board and train options are one of the most popular
                      methods of dog training on the market right now
                    </li>
                    <li>Huge variety of the skills and behaviors we tackle</li>
                    <li>Schedule at your convenience</li>
                    <li>
                      No need to bring crates, bowls, or dog beds- we have
                      plenty of those here!
                    </li>
                    <li>
                      We understand how important your dog is to you, and we
                      want to be a part of your adventure together!
                    </li>
                    <li>
                    After the private consultation, you can purchase the training bundle that’s right for you.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {this.state.showPopup ? (
            <Popup
              cn={this.state.cn}
              text={this.state.message}
              closePopup={this.togglePopup.bind(this)}
              bgColor={this.state.bgColor}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default HomePageHTML;
