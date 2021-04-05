import React from "react";

export default function Phonetics(props) {
    return (
        <div className="Phonetics">
            <h5>
          {props.phonetics.text}{" "}
          <a href={props.phonetics.audio} alt="listen to the pronunciation" target="_blank" rel="noreferrer">
            <i class="fas fa-volume-up"></i>
          </a>
        </h5>
        </div>
    )
}