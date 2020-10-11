import React from "react";
import "./App.css";

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            SAM
          </a>
          <div className="metadata">
            <span className="date"> Today at 4</span>
          </div>
          <div className="text">NIce blog post</div>
        </div>
      </div>
    </div>
  );
}

export default App;
