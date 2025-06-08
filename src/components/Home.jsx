import banner from "../assets/main-deal.jpg"
export default function Home(){

    return(
        <div className="homeContainer">
            <img className= "mainDealImg" src={banner} alt="" />
            <button className="callBtn click"><a style={{color: 'white'}} href="tel:+4039844800">Order Now <i class="fa-solid fa-phone "></i></a></button>

            <div className="dealContainer">
                <h2>Our Most Popular Deals</h2>
                <div className="homeDeals">
                    <div className="homeDeal">
                        <img className="homeDealImg" src={banner} alt="" />
                    </div>
                    <div className="homeDeal">
                        <img className="homeDealImg" src={banner} alt="" />
                    </div>
                </div>
                <button className="homeDealBtn click">View all deals</button>
            </div>
        </div>
    )
}