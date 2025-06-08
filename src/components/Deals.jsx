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
                    <p className="dealPrice">$29.99</p>
                </div>
            </div>

            <div className="deal">
                <img src={banner} alt="" className="dealImg" />
                <div className="dealContent">
                    <h2 className="dealTitle">Combo Deal #2</h2>
                    <p className="dealPara"> Includes 3 Medium Pizzas (Regular Crust) with any 4 Toppings of your choosing and 10 Chicken Wings</p>
                    <p className="dealPrice">$52.99</p>
                </div>
            </div>

            <div className="deal">
                <img src={banner} alt="" className="dealImg" />
                <div className="dealContent">
                    <h2 className="dealTitle">Combo Deal #3</h2>
                    <p className="dealPara"> Includes 3 Large Pizza (Regular Crust) with any 4 Toppings of your choosing</p>
                    <p className="dealPrice">$49.99</p>
                </div>
            </div>

            <div className="deal">
                <img src={banner} alt="" className="dealImg" />
                <div className="dealContent">
                    <h2 className="dealTitle">Combo Deal #4</h2>
                    <p className="dealPara"> Includes 2 Pastas (Lasagna, Penne or Spaghetti) with 2 Garlic Toasts and 10 Chicken Wings</p>
                    <p className="dealPrice">$31.99</p>
                </div>
            </div>

            <div className="deal">
                <img src={banner} alt="" className="dealImg" />
                <div className="dealContent">
                    <h2 className="dealTitle">Combo Deal #5</h2>
                    <p className="dealPara"> Includes 1 Large Pizza (Deep Dish Crust) with any 4 Toppings of your choosing and 10 Chicken Wings</p>
                    <p className="dealPrice">$38.99</p>
                </div>
            </div>

            <div className="deal">
                <img src={banner} alt="" className="dealImg" />
                <div className="dealContent">
                    <h2 className="dealTitle">Combo Deal #6</h2>
                    <p className="dealPara"> Includes 2 Large Pizza (Regular Crust) with any 4 Toppings of your choosing, 10 Chicken Wings and 1 Large Fries</p>
                    <p className="dealPrice">$44.99</p>
                </div>
            </div>
            </div>

        </div>
    )
}