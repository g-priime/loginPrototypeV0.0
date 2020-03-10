import React from "react";
import "../css/reg.css";
import "../css/homePage.css";
import CarouselHome from "./CarouselHome";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";




class HomePageHTML extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <Card
              className="cardbg"
              style={{
                padding: "0rem",
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
              <CardBody></CardBody>
            </Card>
            <h1 style={{ color: "#715d5c" }}>Welcome to our fun family!</h1>
            <p style={{ width: "70%", margin: "45px" }}>
              We have everything you need for the day to day care of your canine
              friend. We offer progressive training methods to help you get
              through the toughest problems and shape your pal into the perfect
              companion. For those times when you’re away, we offer boarding in
              our home. We understand how important your dog is to you, and we
              want to be a part of your adventure together!
            </p>
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
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageHTML;
