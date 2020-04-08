import React from "react";

class TestimonialForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <div className="form-group">
          <textarea
            required
            className="form-control"
            value={this.props.contents}
            onChange={this.props.contentChange}
          ></textarea>
        </div>
        <br></br>
        <button
          type="submit"
          className="btn mb-3"
          style={{
            fontWeight: "bold",
            backgroundColor: "#1D3461",
            color: "#ECEBE7",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default TestimonialForm;
