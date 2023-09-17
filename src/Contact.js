import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert("All fields are required");
    } else {
      alert("Form submitted!");
    }
  };

  return (
    <ContactSection>
      <div className="formSection">
        <div className="resizeSection">
          <div className="newletter">
            <span className="news">Newslleter</span>
            <span className="getNews">
              Get news about article and updates in your box
            </span>
          </div>
          <div className="form">
            <input
              type="text"
              className="field"
              placeholder="NAME"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="text"
              className="field"
              placeholder="EMAIL"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="text"
              className="field"
              placeholder="MESSAGE"
              value={message}
              onChange={handleMessageChange}
            />
          </div>
        </div>
        <div className="getInTouch">
          <div className="content">
            <span>GET </span>
            <span>IN TOUCH</span>
          </div>
          <div className="button">
            <Button className="btn" onClick={handleSubmit}>
              SEND
            </Button>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  width: 100%;
  min-height: 60vh;
  background-image: url("../Photo/back.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .formSection {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .resizeSection {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
  .newletter {
    width: 20vw;
    height: 35vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .news {
    font-size: 1.5rem;
    color: #ffffff80;
  }
  .getNews {
    color: #ffffff80;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30vw;
  }
  .field {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid black;
    padding: 10px;
    outline-style: none;
    background-color: rgba(0, 0, 0, 0);
  }
  .getInTouch {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 60%;
    display: flex;
    flex-direction: column;
  }
  .content span {
    font-size: 5rem;
    font-weight: 800;
    color: white;
  }

  .btn {
    border-radius: 50%;
    width: 8rem;
    height: 10rem;
    border: 2px solid #f07e15;
    color: #f07e15;
  }
`;

export default Contact;
