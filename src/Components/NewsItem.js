import React from "react";
import { FiCalendar, FiExternalLink } from "react-icons/fi";

const newsItem = (props) => {
  let { title, description, image, date, link } = props;
  let dummyImg =
    "https://static.tnn.in/thumb/msid-93548563,imgsize-100,width-1280,height-720,resizemode-75/93548563.jpg";
  return (
    <React.StrictMode>
      <div className="newsItem animate__animated animate__fadeIn">
        <img
          src={image != null ? image : "No Title From Server"}
          alt={title != null ? title : "No Title From Server"}
        />
        <p className="title">{title != null ? title : dummyImg}</p>
        <div className="dateSec">
          <FiCalendar />
          <p className="date">
            {new Date(date).toGMTString().replace("GMT", " ")}
          </p>
        </div>
        <p className="description">{description}...</p>
        <a href={link} rel="noreferrer" target="_blank">
          <div className="newsBtn">
            <FiExternalLink />
            Read More
          </div>
        </a>
      </div>
    </React.StrictMode>
  );
};

export default newsItem;
