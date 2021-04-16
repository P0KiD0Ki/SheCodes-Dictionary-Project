import React, { useState } from "react";
import axios from "axios";

export default function WodResults(props) {
  const [phonetics, setPhonetics] = useState(props.word);
  const [pronunciation, setPronunciation] = useState(props.word);
  const [partofspeech, setPartofspeech] = useState(props.word);
  const [definition, setDefinition] = useState(props.word);

  function handleWodResponse1(response) {
    setPartofspeech(response.data[0].partOfSpeech);
    setDefinition(response.data[0].text);
  }

  function handleWodResponse2(response) {
    setPhonetics(response.data[0].raw);
  }

  function handleWodResponse3(response) {
    setPronunciation(response.data[0].fileUrl);
  }

  let wordnikApiKey = "qn8bh0l6c1agzsxgijmuazcwxzhh8of8u5ehqpgcvenlev28m";

  let apiPronunciationUrl = `https://api.wordnik.com/v4/word.json/${props.word}/audio?useCanonical=false&limit=50&api_key=${wordnikApiKey}`;
  axios.get(apiPronunciationUrl).then(handleWodResponse3);

  let apiPhoneticUrl = `https://api.wordnik.com/v4/word.json/${props.word}/pronunciations?useCanonical=false&limit=50&api_key=${wordnikApiKey}`;
  axios.get(apiPhoneticUrl).then(handleWodResponse2);

  let apiDefinitionUrl = `https://api.wordnik.com/v4/word.json/${props.word}/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=${wordnikApiKey}`;
  axios.get(apiDefinitionUrl).then(handleWodResponse1);

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