import React from "react";
import Testimonial from "./Testimonial";
import BasePath from "../../api/BasePath";
import PopUpConfirm from "../PopUpConfirm";

class ManageTestimonials extends React.Component {
  state = {
    testimonialsList: [],
    test_id: {},
    testDel: "",
    username: {},
    contents: "",
    showCon: false
  };

  componentWillMount = () => {
    this.updateTestimoials();
  };

  updateTestimoials() {
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
      this.updateTestimoials();
    });
  };

  deleteTest = () => {
    var token = localStorage.getItem('token');
    var id = this.state.testDel.id;
    BasePath.put(`/webresources/DeleteTestimonial/${token}/${id}`).then(result => {
      console.log(result.data);
      this.updateTestimoials();
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
          {this.state.showCon && this.state.testDels != null ? (
            <PopUpConfirm dontConfirm={this.dontConfirm} confirm={this.confirm} text={'Are you sure you want to delete ' + this.state.testDel.contents + '?'} cn="popup3" />
          ) : null}
          {this.state.testimonialsList.map(testimonial => (
            <Testimonial
              chosenTestimonial={testimonial}
              approveTestimonial={this.approveTestimonial.bind(this, testimonial)}
              deleteTestimonial={this.deleteTestimonial.bind(this, testimonial)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ManageTestimonials;
