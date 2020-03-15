import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
  //Button
} from "reactstrap";
import "../css/services.css";
//import boarding from '../images/boarding.jpg';
import { Link } from "react-router-dom";
import Popup from "./PopUp";
import BasePath from "../api/BasePath";

class Services extends React.Component {
  state = {
    initialStates: false,
    message: "",
    cn: "",
    bgColor: "blue",
    daycareLink: "/Register",
    boardingLink: "/Register",
    trainingLink: "/Register"
  };

  getCustomerInfo = async () => {
    var token = localStorage.getItem("token");

    const customerInfo = await BasePath.get(
      `/webresources/RetrieveUser/${token}`
    );

    if (
      this.state.initialStates === false &&
      customerInfo.data !== "Authentication error, bad token" &&
      customerInfo.data !== ""
    ) {
      this.setState({
        initialStates: true,
        daycareLink: "/BookDaycare",
        boardingLink: "/BookBoarding",
        trainingLink: "/BookTraining"
      });
    }
  };

  UNSAFE_componentWillMount() {
    if (
      typeof this.props.location.state == "undefined" ||
      this.props.location.state === null
    ) {
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
    this.getCustomerInfo();

    return (
      <div className="ui segment d-flex justify-content-around p-0 m-0 bg card-group">
        <Card className="cardbg">
          <CardImg
            className="img-fluid images"
            top
            width="100%"
            src={require("../images/boarding.jpg")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <h1 style={{ color: "#715d5c" }}>Boarding</h1>
            </CardTitle>
            <CardText className="left">
              We board friendly and vaccinated dogs in our home with our own
              dogs and treat them like a member of the family! The Day Care
              appointment is for dogs who need to be looked after for the hours
              between 9am and 9pm in the day. That means plenty of potty breaks,
              play time in our large fenced in yard, and lots of cuddle time and
              cookies! Raw or dehydrated food, medications, injections and blind
              or deaf dogs are no worry for us; we are happy to accommodate them
              for no additional charge.
            </CardText>
            <CardSubtitle>
              <h4 style={{ color: "#715d5c" }}>Requirements</h4>
            </CardSubtitle>
            <br></br>
            <CardText className="left">
              <ul>
                <li>Dogs must be dog friendly</li>

                <li>
                  Adults must be house trained and able to be crated, or
                  non-destructive
                </li>

                <li>
                  All dogs must be up to date on distemper, bordetella and
                  rabies vaccines for their age
                </li>

                <li>
                  We will happily send picture or video updates at your request.
                </li>
              </ul>
            </CardText>
            <CardSubtitle>
              <h4 style={{ color: "#715d5c" }}>What to bring</h4>
            </CardSubtitle>
            <br></br>
            <CardText className="left">
              <ul>
                <li>Enough food for the duration of your dog’s stay</li>

                <li>
                  Treats, chews, and cookies you want the dog to have while they
                  are here
                </li>

                <li>Any supplements they are on</li>

                <li>A leash and collar with ID tags</li>

                <li>
                  No need to bring crates, bowls, or dog beds- we have plenty of
                  those here!
                </li>
              </ul>
            </CardText>
            <br></br>
            <CardSubtitle>
              <h4 style={{ color: "#715d5c" }}>
                $50 +5% GST per dog per night
              </h4>
            </CardSubtitle>
            <CardText>
              <small className="text-muted">
                We offer discounts for longer stays
              </small>
            </CardText>
            <br></br>
            {/*<Button className="button">Book Now</Button>*/}
            <Link
              to={this.state.boardingLink}
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
              Book Now
            </Link>
          </CardBody>
        </Card>
        <Card className="cardbg">
          <CardImg
            className="img-fluid images"
            top
            width="100%"
            src={require("../images/training.jpg")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <h1 style={{ color: "#715d5c" }}>Training</h1>
            </CardTitle>
            <CardText className="left">
              Most of the problems you’re having with your dog can be solved by
              understanding the underlying cause of the behaviour. That’s why
              our Private Training sessions are so valuable. You get one-on-one
              help to zero in on the issue, so you can solve it a lot faster.
              <br></br>
              <br></br>We start all of our Private Training options with an in
              person private consultation. That way we can meet you and your
              dog, and give you the opportunity to tell us exactly what’s been
              going on. Once we get all the information, we start the behaviour
              modifying protocol and develop a personalized training program to
              give you both the perfect solution.
              <br></br>
              <br></br>After the private consultation, you can purchase the
              training bundle that’s right for you.
            </CardText>
            <br></br>
            <CardSubtitle>
              <h4 style={{ color: "#715d5c" }}>$70/hour +5% GST</h4>
            </CardSubtitle>
            <CardText>
              <small className="text-muted">
                Initial 90 min sessions are $130+5% GST
              </small>
            </CardText>
            <br></br>
            {/*<Button className="button">Book Now</Button>*/}
            <Link
              to={this.state.trainingLink}
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
              Book Now
            </Link>
          </CardBody>
        </Card>
        <Card className="cardbg">
          <CardImg
            className="img-fluid images"
            top
            width="100%"
            src={require("../images/day.jpg")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <h1 style={{ color: "#715d5c" }}>Day Care</h1>
            </CardTitle>
            <CardText className="left">
              We look after friendly and vaccinated dogs in our home with our
              own dogs and treat them like a member of the family! The Boarding
              appointment is for dogs who need to be looked after for overnight
              and multiple days. That means plenty of potty breaks, play time in
              our large fenced in yard, and lots of cuddle time and cookies! Raw
              or dehydrated food, medications, injections and blind or deaf dogs
              are no worry for us; we are happy to accommodate them for no
              additional charge.
            </CardText>
            <CardSubtitle>
              <h4 style={{ color: "#715d5c" }}>Requirements</h4>
            </CardSubtitle>
            <br></br>
            <CardText className="left">
              <ul>
                <li>Dogs must be dog friendly</li>

                <li>
                  Adults must be house trained and able to be crated, or
                  non-destructive
                </li>

                <li>
                  All dogs must be up to date on distemper, bordetella and
                  rabies vaccines for their age
                </li>

                <li>
                  We will happily send picture or video updates at your request.
                </li>
              </ul>
            </CardText>
            <CardSubtitle>
              <h4 style={{ color: "#715d5c" }}>What to bring</h4>
            </CardSubtitle>
            <br></br>
            <CardText className="left">
              <ul>
                <li>Enough food for the duration of your dog’s stay</li>

                <li>
                  Treats, chews, and cookies you want the dog to have while they
                  are here
                </li>

                <li>Any supplements they are on</li>

                <li>A leash and collar with ID tags</li>

                <li>
                  No need to bring crates, bowls, or dog beds- we have plenty of
                  those here!
                </li>
              </ul>
            </CardText>
            <br></br>
            <CardSubtitle>
              <h4 style={{ color: "#715d5c" }}>$30 +5% GST per dog per day</h4>
            </CardSubtitle>
            <br></br>
            <br></br>
            <Link
              to={this.state.daycareLink}
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
              Book Now
            </Link>
          </CardBody>
        </Card>
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

export default Services;
