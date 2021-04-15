import React from "react";
import "./Synonyms.css"

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>{" "}
        {props.synonyms.map(function (synonyms, index) {
          return (
            <ul key={index}>
              <li>{synonyms}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
