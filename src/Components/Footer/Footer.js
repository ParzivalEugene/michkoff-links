import React from 'react';
import {FaReact} from "react-icons/fa";
import "./Footer.scss"

const Footer = () => {
  return (
    <footer>
      <p>
        Coded with <FaReact/> by <a
        href="//github.com/ParzivalEugene"
        rel="noreferrer"
        target="_blank"
      >
        ParzivalEugene
      </a>
      </p>
      <h1>© 2023 Michkov Eugene. All Rights Reserved.</h1>
    </footer>
  );
};

export default Footer;
