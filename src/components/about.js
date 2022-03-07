import React from "react";
import "../styles/about.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./button";
const About = () => {
  const usestyles = makeStyles((theme) => ({
    aboutImg: {
      height: "100vh",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      color: "#fff",
      textAlign: "center",
      padding: "0 14rem",
      [theme.breakpoints.down("sm")]: {
        padding: "1rem 2rem",
      },
    },
  }));
  const classes = usestyles();
  return (
    <div className="about">
      <div className={classes.aboutImg}>
        <h2 className="aboutHeading">we deliver the best quality pizza</h2>
        <p className="aboutPara">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          magni, quidem blanditiis molestiae debitis necessitatibus aliquid
          tempora ducimus doloremque dolor aspernatur cupiditate repellat
          temporibus quas mollitia quisquam quaerat illo recusandae.
        </p>
        <Button />
      </div>
    </div>
  );
};
export default About;
