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

  function errorFunction() {
    alert("Oops! Let's try that again.");
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse).catch(errorFunction);
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
            <p className="easter-egg">
              <strong>suggestions:</strong> longing, rusted, seventeen, daybreak,<br />furnace, nine, benign, homecoming, one, freight car.
            </p>
          </Form.Group>
        </form>
      </div>

      <Results results={results} />
    </div>
  );
}
