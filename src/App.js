import React from "react";
import "./App.css";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          author="Billy"
          time="12:00 PM"
          text="Nice post lads......"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="M.M."
          time="12:00 PM"
          text="Nice content my nigger"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Frenchie"
          time="12:00 PM"
          text="Oui Great Content!"
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
