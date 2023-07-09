import React, { useState } from "react";
import axios from "axios";
import Tilt from "react-parallax-tilt";

import "./Contact.css";

import helloIcon from "/iconsImg/hello.png";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [err, setErr] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [isEmailRequired, setIsEmailRequired] = useState(true);
  const [isMessageRequired, setIsMessageRequired] = useState(true);

  const formSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();

    formData.append("email", e.target[0].value);
    formData.append("message", e.target[1].value);
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append(
      "_autoresponse",
      "thank you for reaching out to chetan through website."
    );
    formData.append("_subject", "New submission on Portfolio!");

    axios
      .post(import.meta.env.VITE_FORM_SUBMIT_LINK, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.success == "true") {
          setSend(true);
        }
      })
      .catch((error) => {
        setErr(true);
      });
  };

  const handleEmailCheck = (e) => {
    if (e.target.value !== "") {
      setIsEmailRequired(false);
    } else {
      setIsEmailRequired(true);
    }

    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
  };

  const handleMessageCheck = (e) => {
    if (e.target.value !== "") {
      setIsMessageRequired(false);
    } else {
      setIsMessageRequired(true);
    }
  };

  return (
    <div className="Contact" id="contact">
      <div className="main-title">Contact Me</div>
      <div className="heading">
        <b>let's talk about something...</b>
      </div>
      <div className="middle">
        <form onSubmit={formSubmit} method="POST" className="form">
          <Tilt
            className="tilt-img"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={900}
            scale={1}
            tiltReverse={true}
            transitionSpeed={800}
            gyroscope={false}
          >
            <div className={isEmailRequired ? "tip" : "tip hide"}>
              *required
            </div>
            <input
              className={validEmail ? "input " : "input valid"}
              type="email"
              name="email"
              onChange={handleEmailCheck}
              placeholder="Enter your Email"
              required
            />
          </Tilt>
          <Tilt
            className="tilt-img"
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            perspective={900}
            scale={1}
            tiltReverse={true}
            transitionSpeed={800}
            gyroscope={false}
          >
            <div className={isMessageRequired ? "tip" : "tip hide"}>
              *required
            </div>
            <div className="textarea-container">
              <textarea
                className="input "
                name="massage"
                cols="30"
                rows="10"
                placeholder="👋🏻 Say hellooo..."
                onChange={handleMessageCheck}
                required
              ></textarea>
              <img src={helloIcon} alt="" className="imgIcon helloIcon" />
            </div>
          </Tilt>
          {/* <div className="tip">optional</div>
          <input
            type="file"
            className="file-input"
            name="attachment"
            accept="image/png, image/jpeg, text/txt"
          /> */}
          {err ? (
            <div
              className="heading"
              style={{ fontSize: "1.3rem", marginTop: "1rem" }}
            >
              <b>Something is wrong, try again!</b>
            </div>
          ) : send ? (
            <div
              className="heading"
              style={{ fontSize: "1.3rem", marginTop: "1rem" }}
            >
              <b>Sent successful !!</b>
            </div>
          ) : loading ? (
            <div className="small-loader"></div>
          ) : (
            <div>
              <button
                type="submit"
                className="button contactSubmit"
                id="button"
              >
                Send Message <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
