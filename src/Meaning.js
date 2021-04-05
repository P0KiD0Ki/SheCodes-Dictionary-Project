import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <strong>
          <em>{props.meaning.partOfSpeech}</em>
        </strong>
      </h4>
     {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <h5>{definition.definition}</h5>
              <hr />
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
