import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [send, setSend] = useState(false);
  const [err, setErr] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("email", e.target[0].value);
    formData.append("message", e.target[1].value);
    formData.append("file", e.target[2].files[0]);
    formData.append("_template", "table");
    formData.append("_captcha", "false");
    formData.append(
      "_autoresponse",
      "thank you for reaching out to chetan through website."
    );
    formData.append("_subject", "New submission on Portfolio!");

    axios
      .post("https://formsubmit.co/ajax/chetankhulage350@gmail.com", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.success == "true") {
          setSend(true);
        }
      })
      .catch((error) => {
        setErr(true);
        console.log(error);
      });
  };

  return (
    <div className="Contact" id="contact">
      <div className="main-title">Contact Me</div>
      <div className="heading">
        <b>let's talk about something...</b>
      </div>
      <div className="middle">
        <form
          encType="multipart/form-data"
          onSubmit={formSubmit}
          method="POST"
          action="https://formsubmit.co/chetankhulage350@gmail.com"
          className="form"
        >
          <div className="tip">*required</div>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <div className="tip">*required</div>
          <textarea
            className="input "
            name="massage"
            cols="30"
            rows="10"
            placeholder="👋🏻Say hellooo..."
            required
          ></textarea>
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
              <b>Something is wrong try again!</b>
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
