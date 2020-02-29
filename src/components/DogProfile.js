import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import "../css/reg.css";
import "../css/userAccount.css";
//here receive the dog, in the props

const DogProfile = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="align-items: left">
      <Button
        className="btn "
        style={{
          fontWeight: "bold",
          backgroundColor: "#1D3461",
          color: "#ECEBE7",
          boxShadow:
            "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
            marginBottom: '1rem'
        }}
        onClick={toggle}
        // style={{ marginBottom: "1rem" }}
      >
        DogName
      </Button>
      {/* {this.props.chosenDog.dogname} */}
      <Collapse isOpen={isOpen}>
        <Card           
              style={{ backgroundColor: "#ECEBE7" }}>
          <CardBody >
            {/* <div>{this.props.chosenDog.dogname}</div> */}
            <div
  
            >
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default DogProfile;
