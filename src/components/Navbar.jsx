import { useState } from "react";
import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
export default function NavBar() {
  const [menuClicked, setMenuClicked] = useState(false);

  function clickHandler() {
    menuClicked ? setMenuClicked(false) : setMenuClicked(true);
  }

  const burgerMenu = menuClicked ? (
    <IoMdClose className="BurgerMenu" size="30px" onClick={clickHandler} />
  ) : (
    <IoMdMenu className="BurgerMenu" size="30px" onClick={clickHandler} />
  );
  return (
    <>
      <nav>
        <div>
          <img className="logo-img" src={logo} alt="" />
        </div>
        <h1>Chicago Pizza</h1>
        {burgerMenu}
      </nav>
    </>
  );
}
