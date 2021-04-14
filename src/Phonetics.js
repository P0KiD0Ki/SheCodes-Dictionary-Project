import React from "react";
import "./Results.css"

export default function Phonetics(props) {
    return (
        <div>
            <h5 className="Phonetics">
          {props.phonetics.text}{" "}
          <a href={props.phonetics.audio} alt="listen to the pronunciation" target="_blank" rel="noreferrer">
            <i class="fas fa-volume-up"></i>
          </a>
        </h5>
        </div>
    )
}