import React from "react";
import "../css/foot.css";

var style = {
  backgroundColor: "#366996",
  borderTop: "4px solid #707070",
  textAlign: "center",
  padding: "20px",
  position: "sticky",
  left: "0",
  bottom: "0",
  height: "100px",
  width: "100%"
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "100px",
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
