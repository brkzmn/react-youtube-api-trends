import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="copyright-wrapper">
        <span>{"\u00a9"} Copyright 2022 - brkzmn</span>
      </div>

      <ul className="contact-wrapper">
        <li>
          <a
            href="https://www.linkedin.com/in/burak-%C3%B6zmen/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon color="primary" />
          </a>
        </li>
        <li>
          <a href="https://github.com/brkzmn" target="_blank" rel="noreferrer">
            <GitHubIcon color="primary" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
