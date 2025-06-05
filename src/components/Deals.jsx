import banner from "../assets/main-deal.jpg"

export default function Deals(){

    return(
        <div className="deals">
            <div className="deal">
                <img src={banner} alt="" className="dealImg" />
                <div className="dealContent">
                    <h2 className="dealTitle">Combo Deal #1</h2>
                    <p className="dealPara">1 Large Pizza (Regular Crust) Any 4 Toppings 10 Chicken Wings (Free 2L Pop)</p>
                    <p className="dealPrice">$19.99</p>
                </div>
            </div>
        </div>
    )
}