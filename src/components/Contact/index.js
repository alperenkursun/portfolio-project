import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useDarkMode } from "../../contexts/DarkModeContext";
import styles from "./styles.module.css";
import "./styles.css";

const Contact = () => {
  setTimeout(() => {
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelector(".login-input").each(function () {
        if (document.querySelector(".login-input").value !== "") {
          document
            .querySelector(".login-input")
            .parentNode.classList.add("animation");
        }
      });
    });
  }, 50);

  const [isInputFocus1, setIsInputFocus1] = useState(false);
  const [isInputFocus2, setIsInputFocus2] = useState(false);
  const [isInputFocus3, setIsInputFocus3] = useState(false);
  const [isInputFocus4, setIsInputFocus4] = useState(false);
  const [isValue1, setIsValue1] = useState(false);
  const [isValue2, setIsValue2] = useState(false);
  const [isValue3, setIsValue3] = useState(false);
  const [isValue4, setIsValue4] = useState(false);

  function focus1() {
    setIsInputFocus1(true);
  }

  function blur1() {
    if (isValue1 !== true) setIsInputFocus1(false);
  }

  function focus2() {
    setIsInputFocus2(true);
  }

  function blur2() {
    if (isValue2 !== true) setIsInputFocus2(false);
  }

  function focus3() {
    setIsInputFocus3(true);
  }

  function blur3() {
    if (isValue3 !== true) setIsInputFocus3(false);
  }

  function focus4() {
    setIsInputFocus4(true);
  }

  function blur4() {
    if (isValue4 !== true) setIsInputFocus4(false);
  }

  const handleChange1 = () => {
    if (document.getElementById("input-name").value !== "") {
      setIsInputFocus1(true);
      setIsValue1(true);
    } else {
      setIsValue1(false);
    }
  };

  const handleChange2 = () => {
    if (document.getElementById("input-email").value !== "") {
      setIsInputFocus2(true);
      setIsValue2(true);
    } else {
      setIsValue2(false);
    }
  };

  const handleChange3 = () => {
    if (document.getElementById("input-telephone").value !== "") {
      setIsInputFocus3(true);
      setIsValue3(true);
    } else {
      setIsValue3(false);
    }
  };

  const handleChange4 = () => {
    if (document.getElementById("input-message").value !== "") {
      setIsInputFocus4(true);
      setIsValue4(true);
    } else {
      setIsValue4(false);
    }
  };

  const { isDarkMode } = useDarkMode();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gcsrqdf",
        "template_b7yxmcn",
        e.target,
        "EjFebQR8_8MwZzd5z"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(`Emailiniz başarıyla gönderildi: ${result.text}`);
        },
        (error) => {
          console.log(error.text);
          alert(`Bir hata oluştu: ${error.text}`);
        }
      );
    e.target.reset();
  }

  return (
    <div
      id="contactme"
      className={`${styles.contact} ${
        isDarkMode ? styles.contactDark : styles.contactLight
      }`}
    >
      <div
        className={`${styles.contactHeader} ${
          isDarkMode ? styles.contactHeaderDark : styles.contactHeaderLight
        }`}
      >
        Contact Me
      </div>
      <div className={styles.contactContainer}>
        <div
          className={`${styles.links} ${
            isDarkMode ? styles.linksDark : styles.linksLight
          }`}
        >
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/alperen-kur%C5%9Fun-616b43213/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={styles.icon}
              style={{ color: "rgb(10,102,194)" }}
            />{" "}
            LinkedIn
          </a>
          <a className={styles.link} href="mailto:alperenkursun96@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={styles.icon}
              style={{ color: "rgb(234, 67, 53)" }}
            />{" "}
            alperenkursun96@gmail.com
          </a>
        </div>
        <form className={styles.form} onSubmit={sendEmail}>
          <p
            className={`input-container + ${
              isInputFocus1 && "animation animation-color"
            }`}
            s
          >
            <input
              type="text"
              name="name"
              id="input-name"
              className="login-input"
              onFocus={focus1}
              onBlur={blur1}
              onChange={handleChange1}
            />
            <label
              className={isDarkMode ? "labelDark" : "labelLight"}
              htmlFor="input-username"
              unselectable="on"
            >
              Name - Surname
            </label>
          </p>
          <p
            className={`input-container + ${
              isInputFocus2 && "animation animation-color"
            }`}
          >
            <input
              type="text"
              name="email"
              id="input-email"
              className="login-input"
              onFocus={focus2}
              onBlur={blur2}
              onChange={handleChange2}
            />
            <label
              className={isDarkMode ? "labelDark" : "labelLight"}
              htmlFor="input-password"
              unselectable="on"
            >
              Email
            </label>
          </p>
          <p
            className={`input-container + ${
              isInputFocus3 && "animation animation-color"
            }`}
          >
            <input
              type="text"
              name="telephone"
              id="input-telephone"
              className="login-input"
              onFocus={focus3}
              onBlur={blur3}
              onChange={handleChange3}
            />
            <label
              className={isDarkMode ? "labelDark" : "labelLight"}
              htmlFor="input-password"
              unselectable="on"
            >
              Telephone
            </label>
          </p>
          <p
            className={`input-container + ${
              isInputFocus4 && "animation2 animation-color"
            }`}
          >
            <textarea
              id="input-message"
              name="message"
              className={`login-input`}
              onFocus={focus4}
              onBlur={blur4}
              onChange={handleChange4}
            />
            <label
              className={isDarkMode ? "labelDark" : "labelLight"}
              htmlFor="input-password"
              unselectable="on"
            >
              Message
            </label>
          </p>

          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={`${styles.button} ${
                isDarkMode ? styles.buttonDark : styles.buttonLight
              }`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Contact);
