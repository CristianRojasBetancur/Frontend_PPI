import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faSearch, faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';
import '../css/Navbar.css';


export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <a className="navbar-brand" href="/Home">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/inicionavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end itemsNav" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active ">
                                <a className="nav-link my-2 ml-3 " href="/inicio" style={{fontSize: "1.5em", color:"#252525"}}><FontAwesomeIcon icon={faSearch}/></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link my-2 ml-3" href="/inicio" style={{fontSize: "1.5em", color:"#252525"}}><FontAwesomeIcon icon={faShoppingCart}/></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link my-2 ml-3" href="/inicio"style={{fontSize: "1.5em", color:"#252525"}}><FontAwesomeIcon icon={faHome}/></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link ml-3" href="/inicio" style={{fontSize: "2em", color:"#252525"}}><FontAwesomeIcon icon={faUser}/></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}