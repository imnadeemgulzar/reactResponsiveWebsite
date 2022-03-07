import React from "react";
import "../styles/contact.css";
import { Data } from "../assets/menuCardData";
function Contact() {
  return (
    <>
      <div className="contactCont">
        <form action="#" className="form">
          <input
            type="text"
            className="yourname"
            placeHolder="write your name"
          />
          <input
            type="email"
            className="youremail"
            placeHolder="write your email"
          />
          <select name="choose" id="pizza">
            {Data.map((item, key) => {
              return (
                <option value="pizzaA" id={key}>
                  {item.pizzaName}
                </option>
              );
            })}
          </select>
          <button
            className="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
