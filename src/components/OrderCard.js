import React from "react";
import Plan from "./Plan";
import Button from "./Button";
import orderCardStyles from "./OrderCard.module.css";

function OrderCard() {
  return (
    <div className={ orderCardStyles.card }>
      <img src={ process.env.PUBLIC_URL + "/images/illustration-hero.svg" } className={ orderCardStyles.cardHero } alt="Dancing woman" />
      <div className={ orderCardStyles.cardContainer }>
        <h1 className={ orderCardStyles.cardHeader }>Order Summary</h1>
        <p className={ orderCardStyles.cardDescription }>You can now listen to millions of songs, audiobooks, and podcasts on any 
            device anywhere you like!
        </p>
        <Plan />
        <Button text="Proceed to Payment" />
        <a href="#" className={ orderCardStyles.cancel }>Cancel Order</a>
      </div>
    </div>
  )
}

export default OrderCard;