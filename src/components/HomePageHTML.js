import React from "react";
import "../css/reg.css";
import "../css/homePage.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import Carousel from "react-bootstrap/Carousel";

class HomePageHTML extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <Card className="cardbg">
              <CardImg
                className="images img-fluid"
                top
                width="auto"
                height="auto"
                src={require("../images/welcome.jpg")}
                alt="Card image cap"
              />
              <CardBody></CardBody>
            </Card>
          </div>
        </div>

        <div className="col-sm">
          <div className="row">
            <div className="col-sm"></div>
          </div>

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
