import React from "react";
import { Link, NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Go Back</Link>
      <br />
    </div>
  );
};

export default NotFound;
