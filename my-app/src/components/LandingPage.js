import React from "react";
import AboutMe from "./AboutMe";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Contacts from "./Contacts";
import "./LandingPage.css";
import SocialMediaIcons from "./SocialMediaIcons";
import "./SocialMediaIcons.css";

const LandingPage = () => {
  return (
    <div>
      <SocialMediaIcons />

      <div id="about">
        <AboutMe />
      </div>
      <div id="work">
        <WorkExperience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contacts />
      </div>
    </div>
  );
};

export default LandingPage;
