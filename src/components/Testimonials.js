import React from "react";
import BasePath from "../api/BasePath";
import '../css/testimonials.css';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class Testimonials extends React.Component {
    state = {
        testimonialsList: [],
        test_id: {},
        username: {},
        contents: ""
    };

    componentWillMount = () => {
        BasePath.get('/webresources/Testimonials')
            .then(result => {
                this.setState({ testimonialsList: result.data });
            }).catch(err => {
                console.log(err);
            });
    }

    submit = () => {
        var token = localStorage.getItem('token');
        BasePath.put('webresources/SubmitTestimonial',
            {
                token: token,
                content: this.state.contents
            }).catch(err => {
                console.log(err);
            });
    }

    contentChange = event => {
        this.setState({contents: event.target.value});
    }

    render() {
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
                <h2>Add Testimonial</h2>
                <form
                onSubmit={this.submit}>
                    <div className="form-group">
                    <textarea className="form-control" value={this.state.contents} onChange={this.changeContent}>
                    </textarea>
                    </div>
                    <br></br>
                    <button
                     className="btn mb-3"
                     style={{
                       fontWeight: "bold",
                       backgroundColor: "#1D3461",
                       color: "#ECEBE7",
                       boxShadow:
                         "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                     }}
                      >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Testimonials;
