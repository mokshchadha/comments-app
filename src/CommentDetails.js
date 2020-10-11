import React from "react";
import faker from "faker";

const CommentDetails = ({ author, time, text }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <span className="date"> {time}</span>
        <div className="metadata">
          <span className="text">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default CommentDetails;
