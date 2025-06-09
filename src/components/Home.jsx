import banner from "../assets/home-banner.jpg";
import smallViewBanner from "../assets/home-banner-mobile.webp";
import deal from "../assets/main-deal.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="homeContainer">
      <picture>
        <source srcSet={banner} media="(min-width: 768px)" />
        <img className="mainDealImg" src={smallViewBanner} alt="" />
      </picture>

      <Link className="callBtn click" to="tel:+14039844800">
        Order Now <i class="fa-solid fa-phone "></i>
      </Link>

      <div className="homeDealContainer">
        <h2>Our Most Popular Deals</h2>
        <div className="homeDeals">
          {/* <div className="homeDeal">
            <img className="homeDealImg" src={deal} alt="" />
          </div> */}
          <div className="homeDeal">
            <img src={deal} alt="" className="dealImg" />
            <div className="dealContent">
              <h2 className="dealTitle">Combo Deal #1</h2>
              <p className="dealPara">
                {" "}
                Includes 1 Large Pizza (Regular Crust) with any 4 Toppings of
                your choosing, 10 Chicken Wings and a 2L Pop
              </p>
              <p className="dealPrice">$29.99</p>
            </div>
          </div>
            <div className="homeDeal">
                <img src={deal} alt="" className="dealImg" />
                <div className="dealContent">
                    <h2 className="dealTitle">Combo Deal #2</h2>
                    <p className="dealPara"> Includes 3 Medium Pizzas (Regular Crust) with any 4 Toppings of your choosing and 10 Chicken Wings</p>
                    <p className="dealPrice">$52.99</p>
                </div>
            </div>
          {/* <div className="homeDeal">
            <img className="homeDealImg" src={deal} alt="" />
          </div> */}
        </div>
        <Link className="homeDealBtn click" to="deals">
          View all deals
        </Link>
      </div>
    </div>
  );
}
