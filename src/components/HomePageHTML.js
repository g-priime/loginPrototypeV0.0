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

class HomePageHTML extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          >
            <Card className="cardbg" >
              <CardImg
                className="images"
                top
                width="100%"
                src={require("../images/welcome.jpg")}
                alt="Card image cap"
              />
              <CardBody>
                
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="col-sm-8">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default HomePageHTML;
