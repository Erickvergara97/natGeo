import React from "react";
import '../../styles/footer/footer.css'

function Footer() {
    return(
        <div className="footerContainer">
            <img src="https://i.natgeofe.com/n/4da26b5c-18ee-413f-96dd-4cf3fb4a68a0/2fl-white.png?w=205.5&h=60" alt="Logo Nat Geo" className="footerLogo"/>
            <div className="sectionsContainer">
                <section>
                    <h4>LEGAL</h4>
                    <ul>
                        <li><a href=".">Term os Use</a></li>
                        <li><a href=".">Privacy Policy</a></li>
                        <li><a href=".">Your California Privacy Rights</a></li>
                        <li><a href=".">Children's Online Privacy Policy</a></li>
                        <li><a href=".">Interest-Based Ads</a></li>
                        <li><a href=".">About Nielsen Measurement</a></li>
                        <li><a href=".">Do Not Sell My Info</a></li>
                    </ul>
                </section>

                <section>
                    <h4>OUR SITES</h4>
                    <ul>
                        <li><a href=".">Nat Geo Home</a></li>
                        <li><a href=".">Attend a Live Event</a></li>
                        <li><a href=".">Book a Trip</a></li>
                        <li><a href=".">Buy Maps</a></li>
                        <li><a href=".">Inspire Your Kids</a></li>
                        <li><a href=".">Shop Nat Geo</a></li>
                        <li><a href=".">Visit the D.C. Museum</a></li>
                        <li><a href=".">Watch TV</a></li>
                        <li><a href=".">Learn About Our Impact</a></li>
                        <li><a href=".">Support Our Mission</a></li>
                        <li><a href=".">Nat Geo Partners</a></li>
                        <li><a href=".">Masthead</a></li>
                        <li><a href=".">Press Room</a></li>
                        <li><a href=".">Advertise With Us</a></li>
                    </ul>
                </section>

                <section>
                    <h4>JOIN US</h4>
                    <ul>
                        <li><a href=".">Subscribe</a></li>
                        <li><a href=".">Customer Service</a></li>
                        <li><a href=".">Renew Subscription</a></li>
                        <li><a href=".">Manage Your Subscription</a></li>
                        <li><a href=".">Work at Nat Geo</a></li>
                        <li><a href=".">Sign up for Our Newsletters</a></li>
                        <li><a href=".">Contribute to Protect the Planet</a></li>
                        <li><a href=".">Pitch a Story</a></li>
                    </ul>
                </section>

                <section>
                    <h4>FOLOW US</h4>

                    <div className="followUsButtons">
                        <button className="facebookButton">facebook</button>
                        <button className="twitterButton">twitter</button>
                        <button className="instagramButton">instagram</button>
                    </div>
                </section>

                <section>United States (Change)</section>
            </div>
        </div>
    )
}

export default Footer