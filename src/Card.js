import hero from "./images/illustration-hero.svg";
import music from "./images/icon-music.svg";
import "./Card.scss";

function Card() {
  return (
    <div className="card">
      <img src={hero} alt="girl listening to music" className="card-hero" />
      <h1 className="card-heading">Order Summary</h1>
      <p className="card-description">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="card-sub">
        <img src={music} alt="music note" className="card-sub__img" />
        <div className="card-sub__description">
          <h2 className="card-sub__description-heading">Annual Plan</h2>
          <p className="card-sub__description-price">$59.99/year</p>
        </div>
        <a href="#" className="card-sub-link">
          Change
        </a>
      </div>
      <button className="card-cta">Proceed to Payment</button>
      <button className="card-cancel">Cancel Order</button>
    </div>
  );
}

export default Card;
