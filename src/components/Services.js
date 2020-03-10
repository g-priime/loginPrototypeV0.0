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
            <div className="ui segment d-flex justify-content-around p-0 m-0 bg card-group">
                <Card className="cardbg">
                    <CardImg className="img-fluid images" top width="100%" src={require("../images/boarding.jpg")} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><h1 style={{ color: "#715d5c" }}>Boarding</h1></CardTitle>
                        <CardText className="left">
                        We board friendly and vaccinated dogs in our home with our own dogs and treat them like a 
                        member of the family! That means plenty of potty breaks, play time in our large fenced 
                        in yard, and lots of cuddle time and cookies!  Raw or dehydrated food, medications, 
                        injections and blind or deaf dogs are no worry for us; we are happy to accommodate 
                        them for no additional charge.
                        </CardText>
                        <CardSubtitle><h4 style={{ color: "#715d5c" }}>Requirements</h4></CardSubtitle><br></br>
                        <CardText className="left">
                        <ul>
                        <li>Dogs must be dog friendly</li>

                        <li>Adults must be house trained and able to be crated, or non-destructive</li>

                        <li>All dogs must be up to date on distemper, bordetella and rabies vaccines for their age</li>

                        <li>We will happily send picture or video updates at your request.</li>

                        </ul>
                        </CardText>
                        <CardSubtitle><h4 style={{ color: "#715d5c" }}>What to bring</h4></CardSubtitle><br></br>
                        <CardText className="left">
                        <ul>
                        <li>Enough food for the duration of your dog’s stay</li>

                        <li>Treats, chews, and cookies you want the dog to have while they are here</li>

                        <li>Any supplements they are on</li>

                        <li>A leash and collar with ID tags</li>

                        <li>No need to bring crates, bowls, or dog beds- we have plenty of those here!</li>
                        </ul>
                        </CardText><br></br>
                        <CardSubtitle><h4 style={{ color: "#715d5c" }}>$50 +5% GST per dog per night</h4></CardSubtitle>
                        <CardText><small className="text-muted">We offer discounts for longer stays</small></CardText><br></br>
                        <Button className="button">Book Now</Button>
                    </CardBody>
                </Card>
                <Card className="cardbg">
                    <CardImg className="img-fluid images" top width="100%" src={require("../images/training.jpg")} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><h1 style={{ color: "#715d5c" }}>Training</h1></CardTitle>
                        <CardText>In the Calgary area and need professional training for your dog(s)? We provide a great training program for dogs inclduing 
                            basic tasks. Just register and book a training appointment.</CardText>
                        <Button className="button">Book Now</Button>
                    </CardBody>
                </Card>
                <Card className="cardbg">
                    <CardImg className="img-fluid images" top width="100%" src={require("../images/day.jpg")} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><h1 style={{ color: "#715d5c" }}>Day Care</h1></CardTitle>
                        <CardText className="left">
                        We look after friendly and vaccinated dogs in our home with our own dogs and treat them like a 
                        member of the family! That means plenty of potty breaks, play time in our large fenced 
                        in yard, and lots of cuddle time and cookies!  Raw or dehydrated food, medications, 
                        injections and blind or deaf dogs are no worry for us; we are happy to accommodate 
                        them for no additional charge.
                        </CardText>
                        <CardSubtitle><h4 style={{ color: "#715d5c" }}>Requirements</h4></CardSubtitle><br></br>
                        <CardText className="left">
                        <ul>
                        <li>Dogs must be dog friendly</li>

                        <li>Adults must be house trained and able to be crated, or non-destructive</li>

                        <li>All dogs must be up to date on distemper, bordetella and rabies vaccines for their age</li>

                        <li>We will happily send picture or video updates at your request.</li>

                        </ul>
                        </CardText>
                        <CardSubtitle><h4 style={{ color: "#715d5c" }}>What to bring</h4></CardSubtitle><br></br>
                        <CardText className="left">
                        <ul>
                        <li>Enough food for the duration of your dog’s stay</li>

                        <li>Treats, chews, and cookies you want the dog to have while they are here</li>

                        <li>Any supplements they are on</li>

                        <li>A leash and collar with ID tags</li>

                        <li>No need to bring crates, bowls, or dog beds- we have plenty of those here!</li>
                        </ul>
                        </CardText><br></br>
                        <CardSubtitle><h4 style={{ color: "#715d5c" }}>$30 +5% GST per dog per day</h4></CardSubtitle><br></br>
                        <Button className="button">Book Now</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Services;