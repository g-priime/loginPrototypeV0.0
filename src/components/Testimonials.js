import React from "react";

class Testimonials extends React.Component {
  state = {
    testimonialsList: [],
    test_id: {},
    username: {},
    contents: ""
  };

  render() {
    return (
      <div
        className="gallery-container ui segment cont "
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <h1 className="txt">Testimonials</h1>
        <div>
        {this.state.testimonialsList.map(testimonial => (
            <Testimonials
            key={testimonial.test_id}
              testimonial={testimonial}
              testimonialUsername={testimonial.username}
              testimonialContent={testimonial.contents}
            />
            ))}
        </div>
      </div>
    );
  }
}

export default Testimonials;
