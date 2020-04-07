import React from "react";
import BasePath from "../api/BasePath";
import '../css/testimonials.css';
import Popup from "./PopUp";
import TestimonialForm from "./TestimonialForm";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class Testimonials extends React.Component {
    state = {
        testimonialsList: [],
        test_id: {},
        username: {},
        contents: "",
        showPopup: false,
        message: "",
        cn: "",
        bgColor: "red",
        images: []
    };

    togglePopup() {
        //just for the popup for validation
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    UNSAFE_componentWillMount = () => {
        BasePath.get('/webresources/Testimonials')
            .then(result => {
                this.setState({ testimonialsList: result.data });
            }).catch(err => {
                console.log(err);
            });
    }

    submit = () => {
        console.log(this.state.contents);
        var token = localStorage.getItem('token');
        BasePath.put('webresources/SubmitTestimonial',
            {
                token: token,
                contents: this.state.contents
            }).then(result => {
                this.setState({ cn: "popup3", bgColor: "grey", images: "Testimonial was sent for approval" });
                this.togglePopup();
            }).catch(err => {
                this.setState({ cn: "popup6", bgColor: "red", images: "There was an error with submitting testimonial" });
                this.togglePopup();
            });
    }

    contentChange = event => {
        this.setState({ contents: event.target.value });
    }

    render() {
        var token = localStorage.getItem('token');
        return (
            <div
                className="gallery-container ui segment cont "
                style={{ backgroundColor: "#ECEBE7" }}
            >
                <h1 className="txt">Testimonials</h1>
                <ListGroup>
                    {this.state.testimonialsList.map(testimonial => (
                        <ListGroupItem>
                            <ListGroupItemHeading>{testimonial.username}</ListGroupItemHeading>
                            <ListGroupItemText>
                                <span className="wrap">
                                    {testimonial.content}
                                </span>
                            </ListGroupItemText>
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <div>
                    {this.state.showPopup ? (
                        <Popup
                            cn={this.state.cn}
                            text={this.state.images}
                            closePopup={this.togglePopup.bind(this)}
                            bgColor={this.state.bgColor}
                        />
                    ) : null}
                </div>
                {token != null ? (
                    <div>
                        <h3 className="subHeader">Add Testimonial</h3>
                        <TestimonialForm
                            onSubmit={this.submit}
                            contentChange={this.contentChange}
                            content={this.contents}>
                        </TestimonialForm></div>)
                    : null}
            </div>
        );
    }
}

export default Testimonials;
