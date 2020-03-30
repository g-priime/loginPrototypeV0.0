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
    .then( result => {
      this.setState({testimonialsList: result.data});
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
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
      </div>
        );
      }
    }
    
    export default Testimonials;
