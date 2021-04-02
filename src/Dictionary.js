import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Dictionary.css";
// import axios from "axios";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <Form.Group>
        <Form.Control
          size="lg"
          type="search"
          placeholder="Which word do you want to look up?"
          className="textbox"
        />
        <Button variant="info" className="btn">
          Search
        </Button>
      </Form.Group>
    </div>
  );
}
