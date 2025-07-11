import MapEmbed from "./MapEmbed"
export default function Contact(){

    return(
        <div className="contactContainer">
            <h1 className="sectionTitle">Contact Us</h1>
            <div className="contactContent">
                <div >
                    <div className="contactInfo">
                    <h2>Opening Hours</h2>
                    <p>Monday - Saturday: 11am - 1am</p>
                    <p>Sunday: 11am - 1am</p>
                    </div>
                    <div className="contactInfo">
                    <h2>Phone</h2>
                    <p>+1 403-984-4800</p>
                    </div>
                    <div className="contactInfo">
                    <h2>Address</h2>
                    <p>273 Falshire Dr NE, Calgary, AB T3J 2T9, Canada</p>
                    </div>

                </div>
                <div>
                    {<MapEmbed/>}
                </div>
            </div>
        </div>
    )
}