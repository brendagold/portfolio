import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer-head">Let's Be Internet BFFs</h4>
      <ul className="social-list">
        <li className="social-list__item">
          <a className="social-list__link" href="https://t.me/charmingbrenda">
            <i className="fab fa-telegram-plane"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="http://linkedin.com/in/mary-brenda-chukwuma-14a933141"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://twitter.com/charmingbrenda"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a className="social-list__link" href="https://github.com/brendagold">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>

      <h5 id="copyright">Mary &copy; 2020</h5>
    </footer>
  );
};

export default Footer;
