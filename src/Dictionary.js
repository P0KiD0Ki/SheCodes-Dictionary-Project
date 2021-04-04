import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  const [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    setWord(event.target.value);
  }

  return (
    <div>
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
      <Results results={results} />
    </div>
  );
}
