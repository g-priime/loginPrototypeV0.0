import React from "react";
import "../css/reg.css";
import "../css/homePage.css";

class HomePageHTML extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div
            className="ui segment p-3 mb-2 "
            style={{ backgroundColor: "#ECEBE7" }}
          ></div>
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
