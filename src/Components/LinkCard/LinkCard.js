import React from 'react';
import {HiOutlineExternalLink} from "react-icons/hi";
import "./LinkCard.scss"

const LinkCard = (props) => {
  return (
    <a
      className="link-card card"
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      <HiOutlineExternalLink className="link-icon"/>
      {props.text}
    </a>
  );
};

export default LinkCard;