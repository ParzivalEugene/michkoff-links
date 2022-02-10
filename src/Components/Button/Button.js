import React from 'react';
import {BsBoxArrowInUpRight} from "react-icons/bs";
import "./Button.scss"
import {Link} from "react-router-dom";

const Button = (props) => {
  return (
    <>
      {props.internal ? (
        <Link
          to={props.href}
          className="button"
        >
          {props.text}
          <span
            className="button-icon"
          >
        <BsBoxArrowInUpRight/>
      </span>
        </Link>
      ) : (
        <a
          href={props.href}
          className="button"
        >
          {props.text}
          <span
            className="button-icon"
          >
        <BsBoxArrowInUpRight/>
      </span>
        </a>
      )}
    </>
  );
};

export default Button;