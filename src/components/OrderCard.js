import React from "react";

function OrderCard() {
  return (
    <div className="card">
      <img src={ process.env.PUBLIC_URL + "/images/illustration-hero.svg" } className="card--hero" alt="Dancing woman" />
      <div className="card--container">
        <h1 className="card--header">Order Summary</h1>
        <p className="card--description">You can now listen to millions of songs, audiobooks, and podcasts on any 
            device anywhere you like!
        </p>
        <div className="plan-container">
          <img src={ process.env.PUBLIC_URL + "/images/icon-music.svg" } className="icon" alt="music symbol"></img>
          <div className="price-container">
            <h2 className="price--title">Annual Plan</h2>
            <h2 className="price--cost">$59.99/year</h2>
          </div>
          <a href="#" className="price--link" alt="Change plan">Change</a>
        </div>
        <button className="payment-btn">Proceed to Payment</button>
        <a href="#" className="cancel">Cancel Order</a>
      </div>
    </div>
  )
}

export default OrderCard;