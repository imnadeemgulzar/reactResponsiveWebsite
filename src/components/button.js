import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const usestyles = makeStyles((theme) => ({
  btn: {
    padding: ".6rem 4rem",
    marginTop: "4rem",
    marginLeft: "2rem",
    borderRadius: ".3rem",
    outline: "none",
    border: "none",
    fontSize: "1rem",
    textTransform: "uppercase",
    backgroundColor: "#fd9",
    color: "rgba(0, 0, 0, 0.932)",
    [theme.breakpoints.down("sm")]: {
      padding: ".6rem 2rem",
    },
  },
}));
const Button = () => {
  const classes = usestyles();
  return (
    <>
      <Link to={"/menu"}>
        <button className={classes.btn}>order now</button>;
      </Link>
    </>
  );
};

export default Button;
