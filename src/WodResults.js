import React, { useState } from "react";
import axios from "axios";

export default function WodResults(props) {
  const [phonetics, setPhonetics] = useState(props.word);
  const [pronunciation, setPronunciation] = useState(props.word);
  const [partofspeech, setPartofspeech] = useState(props.word);
  const [definition, setDefinition] = useState(props.word);

  function handleWodResponse1(response) {
    setTimeout(function () {
      setPhonetics(response.data[0].phonetics[0].text);
      setPronunciation(response.data[0].phonetics[0].audio);
      setPartofspeech(response.data[0].meanings[0].partOfSpeech);
      setDefinition(response.data[0].meanings[0].definitions[0].definition);
    }, 3000);
  }

  let apiUrl1 = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${props.word}`;
  axios.get(apiUrl1).then(handleWodResponse1);

  return (
    <div>
      <h4>
        {phonetics}{" "}
        <a
          href={pronunciation}
          alt="listen to the pronunciation"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fas fa-volume-up"></i>
        </a>
      </h4>
      <h6>{partofspeech}</h6>
      <h5>{definition}</h5>
    </div>
  );
}

//definition: response.data[0].meanings[0].definitions[0].definition
//phonetics: response.data[0].phonetics[0].text
//partofspeech: response.data[0].meanings[0].partOfSpeech

// setTimeout(function () {

//     }, 4000);
