import React from "react";
import {CgWebsite, FaCode, FaDiscord, FaGithub, FaHeart, FaInstagram, FaPatreon, FaReact, FaMoneyBillAlt} from "react-icons/all";
import "./main-elements.css"
import avatar from "../../images/avatar.jpg"

function Main() {
  return (
    <>
      <div className="Container">
        <div className="Content">
          <div className="LinksContainer">
            <div className="Background"/>
            <div className="AuthorContainer">
              <div className="AuthorContent">
                <div className="AuthorAvatarWrapper">
                  <img className="AuthorAvatar" src={avatar} alt="avatar"/>
                </div>
                <h1 className="AuthorName">Michkov Eugene</h1>
                <h2 className="AuthorDescription">Young full-stack developer</h2>
              </div>
            </div>
            <div className="SectionHeaderWrapper">
              <h3 className="SectionHeader">Social Media</h3>
            </div>
            <div className="SectionItemWrapper">
              <div className="SectionItem">
                <a
                  href="https://discord.com/invite/WuTaFrker6"
                  target="_blank"
                  rel="noreferrer"
                  className="SectionLink"
                >
                  <FaDiscord/>
                  <p className="SocialText">Discord</p>
                </a>
              </div>
            </div>
            <div className="SectionItemWrapper">
              <div className="SectionItem">
                <a
                  href="https://www.instagram.com/_parzival.eugene_"
                  target="_blank"
                  rel="noreferrer"
                  className="SectionLink"
                >
                  <FaInstagram/>
                  <p className="SocialText">Instagram</p>
                </a>
              </div>
            </div>
            <div className="SectionItemWrapper">
              <div className="SectionItem">
                <a
                  href="https://github.com/ParzivalEugene"
                  target="_blank"
                  rel="noreferrer"
                  className="SectionLink"
                >
                  <FaGithub/>
                  <p className="SocialText">GitHub</p>
                </a>
              </div>
            </div>
            <div className="SectionItemWrapper">
              <div className="SectionItem">
                <a
                  href="https://www.patreon.com/InvincibleWarriors"
                  target="_blank"
                  rel="noreferrer"
                  className="SectionLink"
                >
                  <FaPatreon/>
                  <p className="SocialText">Patreon</p>
                </a>
              </div>
            </div>
            <div className="SectionHeaderWrapper Add">
              <h3 className="SectionHeader">Samurai Discord Bot</h3>
            </div>
            <div className="SectionItemWrapper">
              <div className="SectionItem">
                <a
                  href="https://samuraibot.xyz/"
                  target="_blank"
                  rel="noreferrer"
                  className="SectionLink"
                >
                  <CgWebsite/>
                  <p className="SocialText">Website</p>
                </a>
              </div>
            </div>
            <div className="SectionItemWrapper">
              <div className="SectionItem">
                <a
                  href="https://github.com/ParzivalEugene/Samurai"
                  target="_blank"
                  rel="noreferrer"
                  className="SectionLink"
                >
                  <FaGithub/>
                  <p className="SocialText">GitHub</p>
                </a>
              </div>
            </div>
            <div className="SectionItemWrapper">
              <div className="SectionItem">
                <a
                  href="https://top.gg/bot/825433682205606000"
                  target="_blank"
                  rel="noreferrer"
                  className="SectionLink"
                >
                  <FaDiscord/>
                  <p className="SocialText">Top.gg</p>
                </a>
              </div>
            </div>
            <div className="SectionHeaderWrapper Add">
              <h3 className="SectionHeader">Donation</h3>
            </div>
            <div className="SectionItemWrapper">
              <div className="SectionItem">
                <a
                  href="https://www.tinkoff.ru/sl/N4WrFLpAiu"
                  target="_blank"
                  rel="noreferrer"
                  className="SectionLink"
                >
                  <FaMoneyBillAlt/>
                  <p className="SocialText">INVINCIBLE WARRIORS FUND</p>
                </a>
              </div>
            </div>
          </div>
          <div className="CopyrightWrapper">
            <p className="Copyright"><FaCode/> with <FaHeart/> and <FaReact/> by <a href="https://github.com/ParzivalEugene" target="_blank" rel="noreferrer" className="CopyrightLink">ParzivalEugene</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
