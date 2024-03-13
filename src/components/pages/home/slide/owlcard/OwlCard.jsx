import React from "react";
import style from "./OwlCard.module.css";
function OwlCard(props) {
  return (
    <div
      className={style.card}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      <div className="container">
        <h1 className={style.title}>{props.title}</h1>
        <p className={style.text}>{props.text}</p>
        <button className={style.btn}> asdas</button>
      </div>
    </div>
  );
}

export default OwlCard;
