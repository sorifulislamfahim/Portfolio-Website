import React from "react";
import CV from "../../assets/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download Resume
      </a>
      <a href="https://wa.me/8801839321600" className="btn btn-primary" target="_blank" rel="noreferrer">
        WhatsApp Chat
      </a>
    </div>
  );
};

export default CTA;
