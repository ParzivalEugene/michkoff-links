import React from 'react';
import {HiOutlineExternalLink} from "react-icons/hi";
import "./LinkCard.scss"

const LinkCard = ({text, link}) => {
  return (
    <a
      className="link-card card"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <HiOutlineExternalLink className="link-icon"/>
      <div className="link-card-text-container">
        {text}
      </div>
    </a>
  );
};

export default LinkCard;