import React from 'react';
import "./Components.scss"
import github_icon from '../brands/github_icon.png'
import spotify_icon from '../brands/spotify_icon.png'
import instagram_icon from '../brands/174855.png'
import discord_icon from '../brands/discord_icon.svg'
import vk_icon from '../brands/vk_icon.svg'
import tinkoff_icon from '../brands/tinkoff_icon.svg'

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
        <a className="github-card card link" href="//github.com/ParzivalEugene" target="_blank" rel="noreferrer">
          <img src={github_icon} className="social-icon" alt="Media Icon"/>
          <div className="media-center">
            <p>Github</p>
          </div>
        </a>
        <a className="spotify-card card link" href="//open.spotify.com/user/x0ylhxxeb1yun9lhnfjl2pyln" target="_blank" rel="noreferrer">
          <img src={spotify_icon} className="social-icon" alt="Media Icon"/>
          <div className="media-center">
            <p>Spotify</p>
          </div>
        </a>
        <a className="discord-card card link" href="//discord.com/invite/WuTaFrker6" target="_blank" rel="noreferrer">
          <img src={discord_icon} className="social-icon" alt="Media Icon"/>
          <div className="media-center">
            <p>Discord</p>
          </div>
        </a>
        <a className="instagram-card card link" href="//www.instagram.com/_parzival.eugene_" target="_blank" rel="noreferrer">
          <img src={instagram_icon} className="social-icon" alt="Media Icon"/>
          <div className="media-center">
            <p>Instagram</p>
          </div>
        </a>
        <a className="vk-card card link" href="//vk.com/parzival_eugene" target="_blank" rel="noreferrer">
          <img src={vk_icon} className="social-icon" alt="Media Icon"/>
          <div className="media-center">
            <p>VK</p>
          </div>
        </a>
      </div>
      <div className="bot-flex-container">
        <div className="bot-header">
          <h2>Samurai Discord Bot</h2>
        </div>
        <div className="bot-container">
          <a href="//samuraibot.michkoff.com/" target="_blank" rel="noreferrer" className="bot-link link">Website</a>
          <hr className="bot-line"/>
          <a href="//github.com/ParzivalEugene/Samurai" target="_blank" rel="noreferrer" className="bot-link link">Github</a>
          <hr className="bot-line"/>
          <a href="//top.gg/bot/825433682205606000" target="_blank" rel="noreferrer" className="bot-link link">Top.gg</a>
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
          <a href="//www.tinkoff.ru/sl/N4WrFLpAiu" target="_blank" rel="noreferrer" className="donation-button">
            Go to Tinkoff
          </a>
        </div>
      </div>
      <div className="portfolio-header">
        <h2>Portfolio</h2>
      </div>
      <a href="//www.michkoff.com" target="_blank" rel="noreferrer" className="donation-button">
        Visit my Portfolio
      </a>
    </div>
  );
};

export default Computer;