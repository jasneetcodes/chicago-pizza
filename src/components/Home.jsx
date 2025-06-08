import banner from "../assets/main-deal.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="homeContainer">
      <img className="mainDealImg" src={banner} alt="" />
      <Link className="callBtn click" to="tel:+4039844800">
        
          Order Now <i class="fa-solid fa-phone "></i>
        
      </Link>

      <div className="homeDealContainer">
        <h2>Our Most Popular Deals</h2>
        <div className="homeDeals">
          <div className="homeDeal">
            <img className="homeDealImg" src={banner} alt="" />
          </div>
          <div className="homeDeal">
            <img className="homeDealImg" src={banner} alt="" />
          </div>
        </div>
        <Link className="homeDealBtn click" to="deals">
          View all deals
        </Link>
      </div>
    </div>
  );
}
