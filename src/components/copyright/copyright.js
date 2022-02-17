import React from "react";
import '../../styles/copyright/copyright.css'



function Copyright() {
    return(
        <div className="copyrightContainer">
            <img src="https://i.natgeofe.com/n/4da26b5c-18ee-413f-96dd-4cf3fb4a68a0/2fl-white.png?w=205.5&h=60" alt="Logo Nat Geo" className="copyrightLogo"/>
            <div className="innerContainer">
                <p>Copyright © 1996-2015 National Geographic Society</p>
                <p>Copyright © 2015-2022 National Geographic Partners, LLC. All rights reserved</p>
            </div>
        </div>
    )
}

export default Copyright