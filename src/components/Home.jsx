import banner from "../assets/home-banner.png";
import dealOne from "../assets/deal-one.png";
import dealTwo from "../assets/deal-two.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="homeContainer">
      <picture>
        <source srcSet={banner} media="(min-width: 768px)" />
        <img
          className="mainDealImg"
          src={banner}
          alt="Chicago Deep Dish Pizza restaurant Calgary"
        />
      </picture>

      <Link className="callBtn click" target="_blank" to="https://order.online/store/34964271?slug=~14519068&pickup=true&hideModal=true&redirected=truetel:+14039844800">
        Order Online Now <i class="fa-solid fa-car-side "></i>
      </Link>
      <div style={{ display: "none" }}>
        calgary deep dish, calgary deep dish pizza, best calgary deep dish,
        chicago deep dish calgary, deep dish pizza near me, calgary pizza,
        calgary deep dish delivery, deep dish pizza calgary nw, calgary deep
        dish restaurant, authentic deep dish calgary, deep dish pizza calgary
        se, calgary deep dish takeout, deep dish pizza near me open now, calgary
        pizza near me
      </div>
      <div style={{ display: "none" }}>
        best calgary pizza, pizza calgary, calgary pizza best, deep dish pizza
        calgary, pizza near me calgary, chicago pizza calgary, deep dish pizza
        near me calgary, calgary deep dish location, order deep dish pizza
        calgary, deep dish calgary pickup, deep dish pizza calgary ne, deep dish
        pizza near me delivery, deep dish pizza near me calgary sw, deep dish
        pizza calgary downtown
      </div>
      <div style={{ display: "none" }}>
        deep dish pizza near me, deep dish pizza near me now, deep dish pizza
        near me calgary open late, calgary deep dish menu, deep dish pizza
        calgary delivery, best deep dish calgary, deep dish pizza canada,
        chicago style pizza calgary, calgary pizza deals, calgary deep dish
        crust, calgary pizza delivery near me, deep dish pizza takeout calgary,
        calgary deep dish map, deep dish pizzeria calgary
      </div>
      <div className="homeDealContainer">
        <h2>Our Most Popular Deals</h2>
        <div className="homeDeals">
          <div className="homeDeal">
            <img
              src={dealOne}
              alt="Calgary deep dish roma pizza number 1"
              className="dealImg"
            />
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
            <img
              src={dealTwo}
              alt="Calgary deep dish roma pizza number 2"
              className="dealImg"
            />
            <div className="dealContent">
              <h2 className="dealTitle">Combo Deal #2</h2>
              <p className="dealPara">
                {" "}
                Includes 3 Medium Pizzas (Regular Crust) with any 4 Toppings of
                your choosing and 10 Chicken Wings
              </p>
              <p className="dealPrice">$52.99</p>
            </div>
          </div>
        </div>
        <Link className="homeDealBtn click" to="deals">
          View all deals
        </Link>
      </div>
    </div>
  );
}
