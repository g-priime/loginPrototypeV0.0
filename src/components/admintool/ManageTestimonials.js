import React from "react";
import Testimonial from "./Testimonial";
import BasePath from "../../api/BasePath";

class ManageTestimonials extends React.Component {
  state = {
    testimonialsList: [],
    test_id: {},
    username: {},
    contents: ""
  };

  componentWillMount = () => {
    BasePath.get("/webresources/Testimonials")
      .then(result => {
        this.setState({ testimonialsList: result.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  approveTestimonial = testimonial => {

  };

  deleteTestimonial = testimonial => {};

  render() {
    return (
      <div
        className="ui segment p-3 mb-2 "
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <div>
          <div>
            <h3>Manage Testimonials</h3>
            <br />
          </div>
          {this.state.testimonialsList.map(testimonial => (
            <Testimonial
              chosenTestimonial={testimonial.contents}
              approveTestimonial={this.approveTestimonial}
              deleteTestimonial={this.deleteTestimonial}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ManageTestimonials;
