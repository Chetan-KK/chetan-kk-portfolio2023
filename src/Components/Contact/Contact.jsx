import React, { useState } from "react";
import "./Contact.css";
import Tilt from "react-parallax-tilt";
function Contact() {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [err, setErr] = useState(false);
  const [validEmail, setValidEmail] = useState(true);

  const formSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch(
      "https://chetan-kk-portfolio-default-rtdb.firebaseio.com/feedbacks.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          message: e.target.massage.value,
        }),
      }
    );

    if (res.ok) {
      setSend(true);
    } else {
      setErr(true);
    }
  };

  const handleEmailCheck = (e) => {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
      setValidEmail(false);
    } else {
      setValidEmail(true);
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
            <div className="tip">*required</div>
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
            <div className="tip">*required</div>
            <textarea
              className="input "
              name="massage"
              cols="30"
              rows="10"
              placeholder="👋🏻 Say hellooo..."
              required
            ></textarea>
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
