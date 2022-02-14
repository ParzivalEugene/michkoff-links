import React from 'react';
import "./SocialCard.scss"
import "../../pages/Components.scss"
import {DisplaySizes} from "../../data/data";
import useWindowDimensions from "../WindowDimension";

const SocialCard = ({text, img_src, link}) => {
  const {height, width} = useWindowDimensions();

  if (width > DisplaySizes.desktop) {
    return (
      <a
        className="card social-card"
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        <div>
          <img src={img_src} alt="SOCIAL_IMAGE"/>
          {text}
        </div>
      </a>
    );
  } else {
    return (
      <a
        className="card social-card"
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        <img src={img_src} alt="SOCIAL_IMAGE" className="mobile-icon"/>
        <div>
          <div className="text-container">
            {text}
          </div>
        </div>
      </a>
    );
  }
};

export default SocialCard;