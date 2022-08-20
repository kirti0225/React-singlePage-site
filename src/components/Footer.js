import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="back">
          <ArrowBackIcon style={{ color: "black" }} />
          <h4>Back</h4>
        </div>
        <div className="button1">
          <button className="btn2">CONTINUE SHOPPING</button>
          <button className="btn3">PROCEED TO PAYMENT</button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
