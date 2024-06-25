// AboutMe.js
import React, { useState, useEffect, useMemo } from "react";
import "./AboutMe.css";
import headshot from "./headshot.png"; // Import the headshot image
import useFadeInSection from "./UseFadeInSection";
const AboutMe = () => {
  const fadeInRef = useFadeInSection();
  const roles = useMemo(
    () => [
      "a developer.",
      "empathetic.",
      "dependable.",
      "a leader.",
      "team player.",
      "a teammate.",
      "proactive.",
      "a strategist.",
      "a motivator.",
      "a learner.",
      "a catalyst.",
      "resilient.",
      "a coder.",
      "adaptable.",
    ],
    []
  );

  const [currentRole, setCurrentRole] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const fullText = roles[index % roles.length];
      const cursor = isDeleting ? "" : "|";

      if (isDeleting) {
        setCurrentRole(fullText.substring(0, roleIndex) + cursor);
        setRoleIndex((prevIndex) => prevIndex - 1);
      } else {
        setCurrentRole(fullText.substring(0, roleIndex + 1) + cursor);
        setRoleIndex((prevIndex) => prevIndex + 1);
      }

      if (!isDeleting && roleIndex === fullText.length) {
        setIsDeleting(true);
        setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }

      if (isDeleting && roleIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setRoleIndex(0);
      }
    };

    const timeoutId = setTimeout(type, 175);
    return () => clearTimeout(timeoutId);
  }, [roles, index, roleIndex, isDeleting]);

  return (
    <div ref={fadeInRef} className="fade-in-section">
      <div className="page-container">
        <div className="section">
          <div className="big-text">
            <div className="intro">
              <span className="hello">Hello, my name is </span>
              <span className="eli-chen-name">Eli Chen.</span>
            </div>
            <div>
              <span className="static-text">I am </span>{" "}
              <span className="dynamic-text">&nbsp;{currentRole}</span>
            </div>
            <br />
            <div className="small-intro">
              {" "}
              Aspiring to be a software engineer, I am currently a student @
              Georgia Tech 🐝!
            </div>
          </div>
        </div>
        <div className="center-content">
          <span className="title">About Me</span>
          <div className="about-me-section">
            <span className="about-me-text">
              <p>
                Hello! My name is Eli Chen and I am a fourth-year Computer
                Science major at Georgia Institute of Technology. With a keen
                interest in software development, I am passionate about
                leveraging technology to drive positive change. When I'm not
                buried in lines of code, you'll find me reading great books,
                experimenting in the kitchen, or jamming out on my guitar.
              </p>
            </span>
            <img src={headshot} alt="Eli Chen" className="headshot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
