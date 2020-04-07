import React from "react";
import Testimonial from "./Testimonial";
import BasePath from "../../api/BasePath";
import PopUpConfirm from "../PopUpConfirm";

class ManageTestimonials extends React.Component {
  state = {
    testimonialsList: [],
    testDel: "",
    contents: "",
    showCon: false
  };

  componentWillMount = () => {
    this.updateTestimonials();
  };

  updateTestimonials() {
    var token = localStorage.getItem("token");
    BasePath.get(`/webresources/PendingTestimonials/${token}`)
      .then(result => {
        this.setState({testimonialsList: result.data}); 
      })
      .catch(err => {
        console.log(err);
      });
  }

  approveTestimonial = testimonial => {
    var token = localStorage.getItem('token');
    var id = testimonial.id;
    BasePath.put(`/webresources/ApproveTestimonial/${token}/${id}`).then(result => {
      console.log(result.data);
      this.updateTestimonials();
    });
  };

  deleteTest = () => {
    var token = localStorage.getItem('token');
    console.log(token);
    var id = this.state.testDel.id;
    BasePath.put(`/webresources/DeleteTestimonial/${token}/${id}`).then(result => {
      console.log(result.data);
      this.updateTestimonials();
    });
  };

  deleteTestimonial = testimonial => {
    this.setState({ testDel: testimonial });
    this.setState({ showCon: true });
  };

  dontConfirm = () => {
    this.setState({ showCon: false });
  }

  confirm = () => {
    this.setState({ showCon: false });
    this.deleteTest();
  }

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
              chosenTestimonial={testimonial}
              approveTestimonial={this.approveTestimonial.bind(this, testimonial)}
              deleteTestimonial={this.deleteTestimonial.bind(this, testimonial)}
            />
          ))}
        </div>
        {this.state.showCon && this.state.testDel != null ? (
            <PopUpConfirm dontConfirm={this.dontConfirm} confirm={this.confirm} text={'Are you sure you want to delete ' + this.state.testDel.content + '?'} cn="popup3" />
          ) : null}
      </div>
    );
  }
}

export default ManageTestimonials;
