import React from "react";
import "./App.css"

export default function GithubLink() {
    return (
        <div className="GithubLink">
        <div title="Link to GitHub Repository" className="text-center">
          <a
            href="https://github.com/P0KiD0Ki/Weather-App-React"
            target="_blank"
            rel="noreferrer"
            className="foot"
          >
            <i class="fab fa-github"></i> {""}
            Coded by Perla Oki
          </a>
        </div>
      </div>
    )
}