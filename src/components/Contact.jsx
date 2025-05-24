import MapEmbed from "./MapEmbed"
export default function Contact(){

    return(
        <div className="contactContainer">
            <h1>Contact Us</h1>
            <div>
                <div className="contactInfo">
                <h2>Opening Hours</h2>
                <p>Monday - Saturday: 8am - 1am</p>
                <p>Sunday: 8am - 1am</p>
                </div>
                <div className="contactInfo">
                <h2>Phone</h2>
                <p>587-425-3652</p>
                </div>
                <div className="contactInfo">
                <h2>Address</h2>
                <p>111 Falconridge Dr, Calgary, AB T3J 2E9, Canada</p>
                {<MapEmbed/>}
                </div>
            </div>
        </div>
    )
}