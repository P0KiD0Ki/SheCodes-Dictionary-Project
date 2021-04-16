import React from "react";
import "./Results.css";
import "./Images.css";

export default function Images(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section>
      <div className="row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-3" key={index}>
              <span>
                <a href={photo.largeImageURL} target="_blank" rel="noreferrer">
                  <img
                    src={photo.largeImageURL}
                    alt={photo.tags}
                    className="img-fluid"
                  ></img>
                </a>
              </span>
            </div>
          );
        })}
      </div>
      </section>
    );
  } else {
    return null;
  }
}
