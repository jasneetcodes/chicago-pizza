import banner from "../assets/main-deal.jpg"
import { IoMdCall } from "react-icons/io";
export default function Home(){

    return(
        <div className="homeContainer">
            <img className= "mainDealImg" src={banner} alt="" />
            <button className="callBtn">Order Now<IoMdCall /></button>

            <div className="dealContainer">
                <h2>Our Most Popular Deals</h2>
            </div>
        </div>
    )
}