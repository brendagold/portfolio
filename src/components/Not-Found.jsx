import React from "react";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Not Found</h1>
      <p>Sorry, there is nothing to see here.</p>
      <p>Please Click this button below</p>
      <button className="btnn">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
