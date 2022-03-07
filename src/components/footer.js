import React from "react";
import "../styles/footer.css";
import { Instagram, Facebook, Twitter, LinkedIn } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
const Footer = () => {
  const usestyle = makeStyles((theme) => ({
    mobItem: {
      margin: "0 2rem",
      color: "#fff",
      [theme.breakpoints.down("sm")]: {
        margin: "0 2rem",
        color: "#fff",
      },
    },
  }));
  const classes = usestyle();
  return (
    <div className="footer">
      <div className="socilaMediaIcons">
        <p id="footerPara">find us on</p>
        <Instagram className={classes.mobItem} />
        <Facebook className={classes.mobItem} />
        <Twitter className={classes.mobItem} />
        <LinkedIn className={classes.mobItem} />
      </div>
      <div className="copyright">
        Responsive website in React &copy; : 2022 bhatnadeem
      </div>
    </div>
  );
};

export default Footer;
