import React from "react";
import "../styles/menu.css";
import { Data } from "../assets/menuCardData";
const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menuCont">
          <div className="menulist">
            {Data.map((item, key) => {
              return (
                <div className="menucard" id={key}>
                  <img src={item.pizzaImg} alt="not" className="menuimg" />
                  <div className="menuContent">
                    <h2 className="name">{item.pizzaName}</h2>
                    <p className="price">{`$ ${item.price}`}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
