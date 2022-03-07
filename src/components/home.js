import React from "react";
import "../styles/home.css";
import Button from "./button";
import { makeStyles } from "@material-ui/core/styles";
const Home = () => {
  const usestyles = makeStyles((theme) => ({
    homeHeading: {
      color: "#fd9",
      fontSize: "10rem",
      fontWeight: "100",
      paddingLeft: "2rem",
      [theme.breakpoints.down("sm")]: {
        color: "#fd9",
        fontSize: "5rem",
        fontWeight: "100",
        marginTop: "10rem",
      },
    },
    homePara: {
      color: "#fd9",
      paddingLeft: "2rem",
      fontSize: "4rem",
      fontWeight: "600",
      [theme.breakpoints.down("sm")]: {
        color: "#fd9",
        fontSize: "2rem",
        fontWeight: "600",
      },
    },
  }));
  const classes = usestyles();

  return (
    <div className="homepage">
      <div className="homeContainer">
        <h1 className={classes.homeHeading}>Pizza Hut</h1>
        <p className={classes.homePara}>take a seat grab a treat</p>
        <Button />
      </div>
    </div>
  );
};

export default Home;
