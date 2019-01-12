import React from "react";
import classes from "./home.css";
import backgroundimage from "../images/home.jpg";

const home = () => {
  return (
    <div className={classes.bottom_blur}>
      <img className={classes.imageBlur} src={backgroundimage} />
    </div>
  );
};

export default home;
