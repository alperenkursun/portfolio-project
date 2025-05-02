import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <a
          href="https://github.com/alperenkursun"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alperen-kur%C5%9Fun-616b43213/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin icon"></i>
        </a>
      </div>
      <span className="footer-right">&copy; 2025 Tüm hakları saklıdır.</span>
    </div>
  );
}

export default Footer;
