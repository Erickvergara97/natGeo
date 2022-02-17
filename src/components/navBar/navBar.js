import React from "react";
import "../../styles/navBar/navBar.css"
import chevron from "../../assets/images/chevron.png"
import {IoIosSearch} from "react-icons/io"


function NavBar() {
    return (
        <header className="navBarContainer">
            <img className="smallLogo" src='https://i.natgeofe.com/n/1852daf6-1c8d-4428-8ee2-d9a82bd0401c/ng-border.png?w=33&h=48' alt= "small Nat Geo logo"/>
            <img className="bigLogo" src="https://i.natgeofe.com/n/e76f5368-6797-4794-b7f6-8d757c79ea5c/ng-logo-2fl.png?w=163.5&h=48"alt= "Nat Geo logo"/>
            <ul className="menuContainer">
                <li><a href=".">LOGIN</a></li>
                <li className="hideMobile"><a href="."><IoIosSearch/></a></li>
                <li className="hideMobile"><a href=".">Renew</a></li>
                <li className="subscribe"><a href=".">SUBSCRIBE</a></li>
                <li className="hideMobile"><a href=".">MENU</a></li>
                <li><a href="." ><img src={chevron} alt="chevron" className="chevron"/></a></li>
                
            </ul>
        </header>

    )
}

export default NavBar