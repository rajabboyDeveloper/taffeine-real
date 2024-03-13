import React, { useState, useEffect } from "react";
import l from "./Navbar.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [val, setval] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/menu").then((res) => {
      const data = res.data.data;
      setval(data);
    });
  }, []);
  console.log(val);
  return (
    <div className={l.navbar}>
      <div className="container">
        <nav className={l.nav}>
          <a href="" className={l.logo}>
            <img
              src="https://taffeine.com/_nuxt/img/logo.6335003.svg"
              className={l.logo_photo}
              alt=""
            />
          </a>
          <ul className={l.item}>
            {val.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink className={l.link} to={item.slug}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className={l.btnBox}>
            <button className={l.btn}>Buy product </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
