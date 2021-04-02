import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./WordofDay.css";

export default function WordofDay() {
  return (
    <div>
      <h1 className="text-center">Dictionary</h1>
      <Container className="word-of-day">
        <Row>
          <Col>
            <h2>WORD OF THE DAY</h2>
          </Col>
          <Col className="wod-container">
            <h2>jocular</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
