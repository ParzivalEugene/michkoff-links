import React from 'react';
import Button from "../Components/Button/Button";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Not found</h1>
      <Button href="/" text="Back to links" internal={true}/>
    </div>
  );
};

export default NotFound;