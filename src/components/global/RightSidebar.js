import React from "react";
import { Link } from "react-router-dom";
import classes from "./RightSidebar.module.css";
function RightSidebar() {
  return (
    <div className="App">
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RightSidebar;
