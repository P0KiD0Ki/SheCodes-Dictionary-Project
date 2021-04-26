import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./WordofDay.css";
import axios from "axios";
import WodResults from "./WodResults"

export default function WordofDay() {
  const [wod, setWod] = useState(null);

  function displayWordOfDay(response) {
    setWod(response.data.word);
  }

  function generateWordOfDay() {
    let wodApiKey = "qn8bh0l6c1agzsxgijmuazcwxzhh8of8u5ehqpgcvenlev28m";
    let wodApiUrl = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&api_key=${wodApiKey}
    `;
    axios.get(wodApiUrl).then(displayWordOfDay);
  }
  window.onload = generateWordOfDay;
  
  return (
    <div>
      <h1>Dictionary App</h1>
      <Container className="word-of-day">
        <Row>
          <Col className="word-generator">
            <h2 className="random-heading">RANDOM WORD <br />GENERATOR</h2>
            <p>
              Build your vocabulary with new words and definitions every day of the week!
            </p>
          </Col>
          <Col className="wod-container">
            <h2 className="the-word"> {wod} </h2>
            <WodResults word={wod} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}