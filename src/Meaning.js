import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>
        <strong>
          <em>{props.meaning.partOfSpeech}</em>
        </strong>
      </h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
              
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
