import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <Link to="/">
        <img className="logoImg" src={logo} alt="Chicago Deep Dish Pizza restaurant Calgary" />
      </Link>
      <div className="footerRow">
      <div>
          <h3>Order</h3>
          <Link className="linkHoverEffect LinkHoverEffectWhite" to="menu">
            <p>Menu</p>
          </Link>
          <Link className="linkHoverEffect LinkHoverEffectWhite" to="deals">
            <p>Deals</p>
          </Link>
        </div>
        <div>
          <h3>Opening Hours</h3>
          <p>Monday - Saturday: 11am - 1am</p>
          <p>Sunday: 11am - 1am</p>
        </div>

        <div>
          <h3>Address</h3>
          <p>273 Falshire Dr NE, Calgary, AB T3J 2T9, Canada</p>
        </div>

        <div>
        <h3>Follow Us</h3>
        <div className="footerSocials">
          <Link to="https://www.instagram.com/chicagopizzaroma?igsh=bHp3ZTJ2eTdwcHg4" target="_blank"><i className="fa-brands fa-instagram fa-2xl"></i></Link>
          <Link to="https://www.facebook.com/ChicagoPizzaRomaYYC"  target="_blank"><i class="fa-brands fa-square-facebook fa-2xl"></i></Link>
        </div>
      </div>
      </div>

      

      <p className="footerCopyright">Copyright © 2025 <Link className="footerCopyright" to="https://www.jasneetcodes.dev/"><u>Jasneetcodes.dev</u></Link>. All rights reserved. </p>
    </footer>
  );
}
