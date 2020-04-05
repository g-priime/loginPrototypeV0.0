import React from "react";
import "../css/foot.css";

var style = {
  backgroundColor: "#366996",
  borderTop: "4px solid #707070",
  textAlign: "center",
  padding: "20px",
  position: "relative",
  left: "0",
  bottom: "0",
  height: "120px",
  width: "100%"
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />
      <div style={style}>
        {children}
        <div className="title mr-3 footLeft">K9 FUN FAMILY</div>
      </div>
    </div>
  );
}

export default Footer;
