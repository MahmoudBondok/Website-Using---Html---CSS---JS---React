import React from "react";
import './Header.css';
import { Button } from "react-bootstrap";
import Img from '../Header/img/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="header">
            <div className="overly"></div>
            <div className="navbar">
                <div className="container">
                    <img src={Img} />
                    <div className="links">
                        <a href="#home" className="active">home</a>
                        <a href="#services">services</a>
                        <a href="#work">work</a>
                        <a href="#about">about</a>
                        <a href="#clients">clients</a>
                        <a href="#contacts">contacts</a>
                    </div>
                </div>
            </div>
            <div className="container" id="home">
                <div className="info">
                    <h1>branding have another<br /> definition</h1>
                    <Button>buy this theme</Button>
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
            </div>
        </div>
    );
}
export default Header;