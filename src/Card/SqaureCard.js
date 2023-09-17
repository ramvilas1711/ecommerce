import React from "react";
import Card from "@mui/material/Card";
import styled from "styled-components";
import { FiArrowUpRight } from "react-icons/fi";

const SqaureCard = (props) => {
  return (
    <CardSection>
      <Card className="card">
        <div className="imageCard">
          <img src={props.imageSrc} />
          <button className="squareButton">
            <FiArrowUpRight />
          </button>
        </div>
        <div className="tagName">
          <div className="dressName">
            <span>{props.productName}</span>
          </div>
          <div className="description">
            <span>{props.productDescription}</span>
          </div>
          <div className="dressName">
            <span>${props.productPrice}</span>
          </div>
        </div>
      </Card>
    </CardSection>
  );
};

const CardSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  min-width: 25vw;

  .card {
    display: flex;
    border: 1px solid #ccc;
    flex-direction: column;
    border-radius: 10px;
    max-width: 300px;
  }

  .imageCard {
    position: relative;
    flex: 1;
  }

  .imageCard img {
    width: 100%;
    height: 30vh;
    display: block;
  }

  .squareButton {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: black;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .tagName {
    padding: 10px;
  }

  .dressName span {
    font-weight: bold;
    font-size: 1.2em;
  }

  .description span {
    display: block;
    margin-top: 5px;
    font-size: 0.9em;
    white-space: nowrap;
  }

  .dressName,
  .description {
    margin-bottom: 5px;
  }
  @media (max-width: 576px) {
    min-width: 55vw;
  }
`;

export default SqaureCard;
