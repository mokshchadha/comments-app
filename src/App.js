import React from "react";
import "./App.css";
import CommentDetails from "./CommentDetails";
function App() {
  return (
    <div className="ui container comments">
      <CommentDetails />
      <CommentDetails />
      <CommentDetails />
    </div>
  );
}

export default App;
