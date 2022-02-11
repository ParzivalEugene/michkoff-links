import React from 'react';
import "./SocialCard.scss"

const SocialCard = (props) => {
  return (
    <>
      {props.isDesktop ? (
          <a
            className={props.grid_id + " social-card card"}
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="social-icon"
              src={props.img_src}
              alt="Media Icon"
            />
            {props.text}
          </a>
        ) : (
        <a
          className={props.grid_id + " social-card card"}
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="social-icon-container">
            <img
              className="social-icon"
              src={props.img_src}
              alt="Media Icon"
            />
          </div>
          <div className="social-container">
            {props.text}
          </div>
        </a>
        )}
    </>
  );
};

export default SocialCard;