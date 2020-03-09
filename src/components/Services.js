import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../css/services.css';
import boarding from '../images/boarding.jpg';

class Services extends React.Component {

    render() {
        return (
            <div className="ui segment d-flex justify-content-around p-0 m-0 bg">
                <Card className="cardbg">
                    <CardImg className="images" top width="100%" src={require("../images/boarding.jpg")} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><h1>Boarding</h1></CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button className="button">Book Now</Button>
                    </CardBody>
                </Card>
                <Card className="cardbg">
                    <CardImg className="images" top width="100%" src={require("../images/training.jpg")} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><h1>Training</h1></CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button className="button">Book Now</Button>
                    </CardBody>
                </Card>
                <Card className="cardbg">
                    <CardImg className="images" top width="100%" src={require("../images/day.jpg")} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><h1>Day Care</h1></CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button className="button">Book Now</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Services;