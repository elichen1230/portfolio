// SocialMediaIcons.js
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <a
        href="https://www.linkedin.com/in/eli-chen-814171226/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/elichen1230"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/elichen1230/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
