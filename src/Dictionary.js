import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Dictionary.css";
// import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Oh haaaaaayyyyy! Here's what ${word} means:`);
  }

  function handleSubmit(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <Form.Group role="form">
          <Form.Control
            size="lg"
            type="search"
            placeholder="Which word do you want to look up?"
            className="textbox"
            onChange={handleSubmit}
          />
        </Form.Group>
      </form>
    </div>
  );
}
