import React from 'react';
import {socials, samurai} from "../data/data";
import "./Components.scss"
import SocialCard from "../Components/SocialCard/SocialCard";
import LinkCard from "../Components/LinkCard/LinkCard";
import tinkoff_logo from "../brands/tinkoff_icon.svg"
import Button from "../Components/Button/Button";

const Main = () => {
  return (
    <main>
      <div className="social-container">
        <h2>Social Media</h2>
        <div className="social-cards-container">
          {socials.map(({text, img_src, link}, key) => (
            <SocialCard key={key} text={text} img_src={img_src} link={link}/>
          ))}
        </div>
      </div>
      <div className="bot-donation-container">
        <div className="bot-container">
          <h2>Samurai Discord Bot</h2>
          <div className="bot-cards-container">
            {samurai.map(({text, link}, key) => (
              <LinkCard key={key} text={text} link={link}/>
            ))}
          </div>
        </div>
        <div className="donation-container">
          <h2>Donation</h2>
          <div className="donation-card card">
            <div className="donation-info-container">
              <h3>Thank you for donating</h3>
              <p>Your support really helps me use the best development tools, which increases the quality and speed of
                development by an order of magnitude</p>
            </div>
            <div className="donation-link-container">
              <img src={tinkoff_logo} alt="TINKOFF_LOGO"/>
              <Button internal={false} text="Go to Tinkoff" link="//www.tinkoff.ru/sl/N4WrFLpAiu"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};

export default Main;