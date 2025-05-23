import logo from "../assets/logo.png";
export default function Footer(){

    return(
       <footer>
        <img className="logoImg" src={logo} alt="" />
        <div className="footerRow">
            <div>
                <h3>Opening Hours</h3>
                <p>Monday - Saturday: 8am - 1am</p>
                <p>Sunday: 8am - 1am</p>
            </div>
            <div>
                <h3>Order</h3>
                <p>Menu</p>
                <p>Deals</p>
            </div>
            <div>
                <h3>Address</h3>
                <p>111 Falconridge Dr, Calgary, AB T3J 2E9, Canada</p>
            </div>

            <div>
                <h3>Follow Us</h3>
                <div className="footerSocials">
                <i className="fa-brands fa-instagram fa-2xl"></i>
                <i class="fa-brands fa-square-facebook fa-2xl"></i>
                
                </div>

            </div>
        </div>
        <p>Copyright © 2025 Jasneet Singh </p>
       </footer>
    )
}