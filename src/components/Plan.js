import React from "react";
import planStyles from "./Plan.module.css";

function Plan() {
  return (
    <div className={ planStyles.planContainer }>
      <img src={ process.env.PUBLIC_URL + "/images/icon-music.svg" } className= { planStyles.icon } alt="music symbol"></img>
      <div className={ planStyles.priceContainer }>
        <h2 className={ planStyles.priceTitle }>Annual Plan</h2>
        <h2 className={ planStyles.priceCost }>$59.99/year</h2>
      </div>
      <a href="#" className={ planStyles.priceLink }>Change</a>
    </div>
  )
}

export default Plan;