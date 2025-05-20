import { useState } from "react";
import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
export default function NavBar() {
  const [menuClicked, setMenuClicked] = useState(false);
  const navStyle = {
    boxShadow: menuClicked ? 'none' : '1px 4px 5px rgb(216, 216, 216)'
  }
  function clickHandler() {
    menuClicked ? setMenuClicked(false) : setMenuClicked(true);
  }

  const burgerMenu = menuClicked ? (
    <IoMdClose className="burgerMenu" size="30px" onClick={clickHandler} />
  ) : (
    <IoMdMenu className="burgerMenu" size="30px" onClick={clickHandler} />
  );
  return (
    <>
      <nav style={navStyle}>
        <div>
          <img className="logoImg" src={logo} alt="" />
        </div>
        <h1>Chicago Pizza</h1>
        {burgerMenu}
      </nav>
      {menuClicked ? (<ul class="dropdownMenu visible">
            <li>ITEM 1</li>
            <li>ITEM 2</li>
            <li>ITEM 3</li>
            <li>ITEM 4</li>
            <li>ITEM 5</li>
        </ul>): (<></>)}
    </>
  );
}
