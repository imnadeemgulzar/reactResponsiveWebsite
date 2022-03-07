import "../styles/navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logopizza.png";
import { makeStyles } from "@material-ui/core/styles";
const Navbar = () => {
  const usestyles = makeStyles((theme) => ({
    mobItem: {
      textTransform: "capitalize",
      color: "rgba(0, 0, 0, 0.932)",
      margin: "0 1rem",
      padding: "0.5rem 1rem",
      fontSize: "1.2rem",
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        textTransform: "capitalize",
        color: "rgba(0, 0, 0, 0.932)",
        margin: "0 .5rem",
        padding: "0.3rem .5rem",
        fontSize: "1rem",
        textDecoration: "none",
      },
    },
  }));
  const classes = usestyles();
  return (
    <>
      <div className={classes.mobNav} id="navbar">
        <div className="navleft">
          <img src={logo} alt="img" className="logo" />
        </div>
        <div className="navright">
          <ul id="list" className={classes.mobList}>
            <Link to={"/home"}>
              <li id="item" className={classes.mobItem}>
                home
              </li>
            </Link>
            <Link to={"/about"}>
              <li id="item" className={classes.mobItem}>
                about
              </li>
            </Link>
            <Link to={"/menu"}>
              <li id="item" className={classes.mobItem}>
                menu
              </li>
            </Link>
            <Link to={"/contact"}>
              <li id="item" className={classes.mobItem}>
                contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
