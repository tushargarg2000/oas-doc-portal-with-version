import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Get the Redoc version here </Link>
      <br />
      <Link to="/Swagger"> Get the Swagger version Here </Link>

      <select>
        <option selected disabled = "true">---Select the version of this file </option>
        <option>--</option>

      </select>
    
    </div>

    

  );
};

export default Navbar;
