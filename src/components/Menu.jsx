import menuOne from "../assets/menuOne-one.png";
import menuOneTwo from "../assets/menuOne-two.png";

import menuTwo from "../assets/menuTwo-one.png";
import menuTwoTwo from "../assets/menuTwo-two.png";

import menuThree from "../assets/menuThree-one.png";
import menuThreeTwo from "../assets/menuThree-two.png";
import menuThreeThree from "../assets/menuThree-three.png";
export default function Menu() {
  return (
    <div className="menuContainer">
      <h1 className="sectionTitle">Menu</h1>
      <div className="menuWrapper">
        <div className="menu menuOne">
          <div>
            <img src={menuOne} alt="Calgary deep dish pizza menu online" />
          </div>
          <div>
            <img src={menuOneTwo} alt="Calgary deep dish pizza menu online" />
          </div>
        </div>

        <div className="menu menuTwo">
          <div>
            <img src={menuTwo} alt="Calgary deep dish pizza menu online" />
          </div>
          <div>
            <img src={menuTwoTwo} alt="Calgary deep dish pizza menu online" />
          </div>
        </div>

        <div className="menu menuOne">
          <div>
            <img src={menuThree} alt="Calgary deep dish pizza menu online" />
          </div>
          <div>
            <img src={menuThreeTwo} alt="Calgary deep dish pizza menu online" />
          </div>
        </div>

        <div className="menu menuTwo">
          <div>
            <img src={menuThreeThree} alt="Calgary deep dish pizza menu online" />
          </div>
        </div>
      </div>
    </div>
  );
}
