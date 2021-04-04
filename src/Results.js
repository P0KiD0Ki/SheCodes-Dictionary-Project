import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
//   console.log(props.results.phonetics[0].text);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <h5>{props.results.phonetics[0].text}</h5>
        <br />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
