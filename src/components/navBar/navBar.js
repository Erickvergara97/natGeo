import React from "react";
import "../../styles/navBar/navBar.css"
import chevron from "../../assets/images/chevron.png"


function NavBar() {
    return (
        <header className="navBarContainer">
            <img className="navLogoContainer" src='https://i.natgeofe.com/n/1852daf6-1c8d-4428-8ee2-d9a82bd0401c/ng-border.png?w=33&h=48' alt= "small Nat Geo logo"/>
            <ul className="menuContainer">
                <li><a href=".">LOGIN</a></li>
                <li className="hideContent"><a href=".">(PONER IMAGEN DE LUPA)</a></li>
                <li className="hideContent"><a href=".">Renew</a></li>
                <li className="subscribe"><a href=".">SUBSCRIBE</a></li>
                <li className="hideContent"><a href=".">MENU</a></li>
                <li><a href="." ><img src={chevron} alt="chevron" className="chevron"/></a></li>
                
            </ul>
        </header>

    )
}

export default NavBar