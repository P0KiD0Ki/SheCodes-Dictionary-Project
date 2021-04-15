import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms"
import "./Results.css"


export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
      <h4 className="part-of-speech">
        <strong>
          <em>{props.meaning.partOfSpeech}</em>
        </strong>
      </h4>
     {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <section>
            <p>
              <h5 className="card-definition">{definition.definition}</h5>
              <hr />
              <Example example={definition.example} />
              <Synonyms synonyms={definition.synonyms} />
            </p>
            </section>
          </div>
        );
      })}
      </section>
    </div>
  );
}
