import { useState } from "react";
import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [menuClicked, setMenuClicked] = useState(false);
  const navStyle = {
    boxShadow: menuClicked ? 'none' : '0 4px 2px -2px rgba(0,0,0,.2)'
  }
  function clickHandler() {
    menuClicked ? setMenuClicked(false) : setMenuClicked(true);
  }

  const burgerMenu = menuClicked ? (
    <IoMdClose className="burgerMenu" style={{cursor: "pointer"}} size="30px" onClick={clickHandler} />
  ) : (
    <IoMdMenu className="burgerMenu" style={{cursor: "pointer"}} size="30px" onClick={clickHandler} />
  );
  return (
    <div className="navContainer">
      <nav style={navStyle}>
        <div>
          <Link to="/"><img className="logoImg" src={logo} alt="" /></Link>
        </div>
        <Link to="/"><h1>Chicago Pizza</h1></Link>
        {burgerMenu}
        <ul className="navLinks">
          <li><Link className="linkHoverEffect LinkHoverEffectBlack"  to="/" onClick={clickHandler}>Home</Link></li>
          <li><Link className="linkHoverEffect LinkHoverEffectBlack" to="menu" onClick={clickHandler}>Menu</Link></li>
          <li><Link className="linkHoverEffect LinkHoverEffectBlack" to="deals" onClick={clickHandler}>Deals</Link></li>
          <li><Link className="linkHoverEffect LinkHoverEffectBlack" to="contact" onClick={clickHandler}>Contact</Link></li>
      </ul>
      </nav>

      {menuClicked ? (<ul className="dropdownMenu visible">
          <li><Link className="linkHoverEffect LinkHoverEffectBlack"  to="/" onClick={clickHandler}>Home</Link></li>
          <li><Link className="linkHoverEffect LinkHoverEffectBlack" to="menu" onClick={clickHandler}>Menu</Link></li>
          <li><Link className="linkHoverEffect LinkHoverEffectBlack" to="deals" onClick={clickHandler}>Deals</Link></li>
          <li><Link className="linkHoverEffect LinkHoverEffectBlack" to="contact" onClick={clickHandler}>Contact</Link></li>
        </ul>): (<></>)}
    </div>
  );
}
