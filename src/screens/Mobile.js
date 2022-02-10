import React from 'react';
import "./Components.scss"
import tinkoff_icon from '../brands/tinkoff_icon.svg'
import {samurai, socials} from "../data/data";
import SocialCard from "../Components/SocialCard/SocialCard";
import LinkCard from "../Components/LinkCard/LinkCard";
import Button from "../Components/Button/Button";

const Computer = () => {
  return (
    <div className="container">
      <div className="media-header">
        <h1>Parzival links</h1>
      </div>
      <div className="media-container">
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
            isDesktop={false}
          />
        )}
      </div>
      <div className="bot-flex-container">
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
      </div>
      <div className="donation-flex-container">
        <div className="donation-header">
          <h2>Donation</h2>
        </div>
        <div className="donation-container">
          <div className="donation-info">
            <h3>Thank you for your donation</h3>
            <p>It helps me to use the best development tools and improve the quality of the content.</p>
          </div>
          <img src={tinkoff_icon} className="tinkoff-icon" alt="Tinkoff Icon"/>
          <Button
            href="//www.tinkoff.ru/sl/N4WrFLpAiu"
            target="_blank"
            rel="noreferrer"
            text="Go to Tinkoff"
          />
        </div>
      </div>
      <div className="portfolio-header">
        <h2>Portfolio</h2>
      </div>
      <Button
        href="//www.michkoff.com"
        target="_blank"
        rel="noreferrer"
        text="Visit my Portfolio"
      />
    </div>
  );
};

export default Computer;