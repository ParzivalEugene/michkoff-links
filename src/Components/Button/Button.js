import React from 'react'
import "./Button.scss"
import {Link} from "react-router-dom"

const Button = ({internal, link, text}) => {
  return (
    <>
      {internal ? (
        <Link
          to={link}
          className="button"
        >
          {text}
        </Link>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          {text}
        </a>
      )}
    </>
  );
};

export default Button;