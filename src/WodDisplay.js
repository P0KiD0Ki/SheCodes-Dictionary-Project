import React from "react";

export default function WodDisplay(props) {
  function pageDelay() {
    setTimeout(function () {
      
    }, 4000);
  }
  window.onload = pageDelay

  return (
    <div>
      <h4>
        {props.data.phonetics}
        {props.data.pronunciation}
      </h4>
      <h6>{props.data.partOfSpeech}</h6>
      <h5>{props.data.definition}</h5>
    </div>
  );
}
