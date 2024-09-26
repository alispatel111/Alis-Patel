import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // Import Email icon

const LinksSection = () => {
  return (
    <div className="links-section">
      <h2 className="link-title">Connect with Me</h2>
      <div className="social-icons">
        <a
          href="https://x.com/alis111patel"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon twitter"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://www.instagram.com/alispatel111?igsh=dWNsbGVtMzYxdGdl"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/alis-patel-221604273/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/alispatel111"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon github"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="mailto:alispatel123098@example.com" // Replace with your email
          className="social-icon email"
        >
          <MdEmail size={30} />
        </a>
      </div>
    </div>
  );
};

export default LinksSection;
