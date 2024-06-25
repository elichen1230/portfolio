import React from "react";
import Footer from "./Footer";
import useFadeInSection from "./UseFadeInSection";

function Contacts() {
  const fadeInRef = useFadeInSection();

  const handleEmailClick = () => {
    window.location.href =
      "mailto:elichen1230@gmail.com?subject=Contact%20from%20Website";
  };

  return (
    <div ref={fadeInRef} className="fade-in-section">
      <div className="contacts-container">
        <h1 className="title">Come Say Hi! 👋</h1>
        <p className="contacts-description">
          I'm always looking for new opportinuties to learn and grow! If you'd
          like to get in touch, feel free to reach out to me!
        </p>
        <button className="contact-button" onClick={handleEmailClick}>
          Contact Me
        </button>
        <Footer />
      </div>
    </div>
  );
}

export default Contacts;
