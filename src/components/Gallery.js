import React from "react";
import "../css/gallery.css";

const imgUrls = [
  require("../images/gallery/1_1.jpg"),
  require("../images/gallery/2_2.jpg"),
  require("../images/gallery/3_3.jpg"),
  require("../images/gallery/4_4.jpg"),
  require("../images/gallery/5_5.jpg"),
  require("../images/gallery/6_6.jpg"),
  require("../images/gallery/7_7.jpg"),
  require("../images/gallery/8_8.jpg"),
  require("../images/gallery/9_9.jpg"),
  require("../images/gallery/10_10.jpg"),
  require("../images/gallery/11_11.jpg"),
  require("../images/gallery/12_12.jpg"),
  require("../images/gallery/13_13.jpg"),
  require("../images/gallery/14_14.jpg"),
  require("../images/gallery/15_15.jpg"),
  require("../images/gallery/16_16.jpg"),
  require("../images/gallery/17_17.jpg"),
  require("../images/gallery/18_18.jpg"),
  require("../images/gallery/19_19.jpg"),
  require("../images/gallery/20_20.jpg"),
  require("../images/gallery/21_21.jpg"),
  require("../images/gallery/22_22.jpg"),
  require("../images/gallery/23_23.jpg"),
  require("../images/gallery/24_24.jpg"),
]; //all the images are taken from the client's Facebook page with her permission https://www.facebook.com/photo.php?fbid=10203843200676363&set=a.10203838093188679&type=3&theater

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return (
      <div onClick={(e) => this.openModal(e, index)}>
        <img src={src} key={src} />
      </div>
    );
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
    }));
  }
  findNext(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
    }));
  }
  render() {
    return (
      <div
        className="gallery-container ui segment cont "
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <h1 className="txt">Check out our safe space!</h1>
        <div className="gallery-grid">
          {imgUrls.map(this.renderImageContent)}
        </div>
        <GalleryModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < imgUrls.length}
          src={imgUrls[this.state.currentIndex]}
        />
      </div>
    );
  }
}

class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.body.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27) this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev) this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext) this.props.findNext();
  }
  render() {
    const {
      closeModal,
      hasNext,
      hasPrev,
      findNext,
      findPrev,
      src,
    } = this.props;
    if (!src) {
      console.log("whut");
      return null;
    }
    return (
      <div>
        <div className="modal1-overlay" onClick={closeModal}></div>
        <div isOpen={!!src} className="modal1">
          <div className="modal1-body">
            <a
              href="#"
              className="modal1-close"
              onClick={closeModal}
              onKeyDown={this.handleKeyDown}
            >
              &times;
            </a>
            {hasPrev && (
              <a
                href="#"
                className="modal1-prev"
                onClick={findPrev}
                onKeyDown={this.handleKeyDown}
              >
                &lsaquo;
              </a>
            )}
            {hasNext && (
              <a
                href="#"
                className="modal1-next"
                onClick={findNext}
                onKeyDown={this.handleKeyDown}
              >
                &rsaquo;
              </a>
            )}
            <img src={src} />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
