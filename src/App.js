import React from "react";
import "./App.css";
import CommentDetails from "./CommentDetails";
function App() {
  return (
    <div className="ui container comments">
      <CommentDetails
        author="Billy"
        time="12:00 PM"
        text="Nice post lads......"
      />
      <CommentDetails
        author="M.M."
        time="12:00 PM"
        text="Nice content my nigger"
      />
      <CommentDetails
        author="Frenchie"
        time="12:00 PM"
        text="Oui Great Content!"
      />
    </div>
  );
}

export default App;
