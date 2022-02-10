import React from 'react';
import "./Components.scss"
import tinkoff_icon from '../brands/tinkoff_icon.svg'

import {samurai, socials} from "../data/data";
import SocialCard from "../Components/SocialCard/SocialCard";
import Button from "../Components/Button/Button";
import LinkCard from "../Components/LinkCard/LinkCard";

const Desktop = () => {
  return (
    <div className="container">
      <div className="header-flex">
        <h1>Parzival links</h1>
        <a href="//www.michkoff.com" className="link">visit my Portfolio</a>
      </div>
      <div className="media-header">
        <h2>Social Media</h2>
      </div>
      {socials.map((item) =>
        <SocialCard
          key={item.id}
          text={item.text}
          img_src={item.img_src}
          link={item.link}
          grid_id={item.grid_id}
          isDesktop={true}
        />
      )}
      <div className="bot-header">
        <h2>Samurai Discord Bot</h2>
      </div>
      <div className="bot-container">
        {samurai.map((item) =>
          <LinkCard
            kee={item.id}
            link={item.link}
            text={item.text}
          />)}
      </div>
      <div className="donation-header">
        <h2>Donation</h2>
      </div>
      <div className="donation-container">
        <div className="donation-info">
          <h3>Thank you for your donation</h3>
          <p>It helps me to use the best development tools and improve the quality of the content.</p>
        </div>
        <div className="donation-tinkoff-container">
          <img src={tinkoff_icon} className="tinkoff-icon" alt="Tinkoff Icon"/>
          <Button
            href="//www.tinkoff.ru/sl/N4WrFLpAiu"
            target="_blank"
            rel="noreferrer"
            text="Go to Tinkoff"
          />
        </div>
      </div>
    </div>
  );
};

export default Desktop;