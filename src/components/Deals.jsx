import banner from "../assets/main-deal.jpg"

export default function Deals(){

    return(
        <div className="dealsContainer">
            <h1>Deals</h1>
            <div className="deals">
            <div className="deal">
                <img src={banner} alt="" className="dealImg" />
                <div className="dealContent">
                    <h2 className="dealTitle">Combo Deal #1</h2>
                    <p className="dealPara"> Includes 1 Large Pizza (Regular Crust) with any 4 Toppings of your choosing, 10 Chicken Wings and a 2L Pop</p>
                    <p className="dealPrice">$19.99</p>
                </div>
            </div>

            <div className="deal">
                <img src={banner} alt="" className="dealImg" />
                <div className="dealContent">
                    <h2 className="dealTitle">Combo Deal #1</h2>
                    <p className="dealPara"> Includes 1 Large Pizza (Regular Crust) with any 4 Toppings of your choosing, 10 Chicken Wings and a 2L Pop</p>
                    <p className="dealPrice">$19.99</p>
                </div>
            </div>

            <div className="deal">
                <img src={banner} alt="" className="dealImg" />
                <div className="dealContent">
                    <h2 className="dealTitle">Combo Deal #1</h2>
                    <p className="dealPara"> Includes 1 Large Pizza (Regular Crust) with any 4 Toppings of your choosing, 10 Chicken Wings and a 2L Pop</p>
                    <p className="dealPrice">$19.99</p>
                </div>
            </div>
            </div>

        </div>
    )
}