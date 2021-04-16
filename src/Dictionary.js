import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Images from "./Images"

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePixelbayResponse(response) {
    setPhotos(response.data.hits);
    console.log(response.data);
  }

  function errorFunction() {
    alert("Oops! Let's try that again.");
  }

  function search(event) {
    event.preventDefault();

    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse).catch(errorFunction);
  
    let pixelbayApiKey = "21180743-5da6b1505fe49af325faa42d1"
    let pixelbayApiUrl = `https://pixabay.com/api/?key=${pixelbayApiKey}&q=${word}&image_type=all&orientation=horizontal&per_page=12`
  
    axios.get(pixelbayApiUrl).then(handlePixelbayResponse);
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
      <Images photos={photos} />
    </div>
  );
}