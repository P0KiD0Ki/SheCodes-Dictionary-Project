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
    let wodApiUrl = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${wodApiKey}
    `;
    axios.get(wodApiUrl).then(displayWordOfDay);
  }
  window.onload = generateWordOfDay;
  
  return (
    <div>
      <h1 className="text-center">Dictionary</h1>
      <Container className="word-of-day">
        <Row>
          <Col>
            <h2>RANDOM WORD GENERATOR</h2>
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
