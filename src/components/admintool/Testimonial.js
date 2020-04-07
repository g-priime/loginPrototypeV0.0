import React from 'react';

class Testimonial extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm d-flex justify-content-between">
                    <span style={{fontSize:"large"}} className="mr-3">{this.props.chosenTestimonial.content}</span>
                <button  className="btn mr-3 mb-3"
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#1D3461",
                          color: "#ECEBE7",
                          boxShadow:
                            "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                        }}
                        onClick={this.props.approveTestimonial}>
                Approve
                </button>
                </div>
                <div className="col-sm">
                <button  className="btn mr-3 mb-3"
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#1D3461",
                          color: "#ECEBE7",
                          boxShadow:
                            "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"
                        }}
                        onClick={this.props.deleteTestimonial}>
                Delete
                </button>
                </div>
                </div>
            </div>
        );
    }
}

export default Testimonial;