import React from "react";
import faker from "faker";

const CommentDetails = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          SAM
        </a>
        <span className="date"> Today at 4:00</span>
        <div className="metadata">
          <span className="text">NIce blog post</span>
        </div>
      </div>
    </div>
  );
};

export default CommentDetails;
