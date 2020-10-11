import React from "react";

const ApprovalCard = (props) => {
  console.log(props);
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extraContent">
        <div className="uiTwoButtons">
          <button> Approve </button>
          <button>Reject</button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
