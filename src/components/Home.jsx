import banner from "../assets/main-deal.jpg"
export default function Home(){

    return(
        <div className="homeContainer">
            <img className= "mainDealImg" src={banner} alt="" />
            <button className="callBtn">Order Now   <i class="fa-solid fa-phone "></i></button>

            <div className="dealContainer">
                <h2>Our Most Popular Deals</h2>
                <div className="deals">
                    <div className="deal">
                        <img className="dealImg" src={banner} alt="" />
                    </div>
                    <div className="deal">
                        <img className="dealImg" src={banner} alt="" />
                    </div>
                </div>
                <button className="dealBtn">View all deals</button>
            </div>
        </div>
    )
}