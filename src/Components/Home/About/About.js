import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarMinus, faListCheck, faArrowCircleDown, faMarsStrokeRight } from '@fortawesome/free-solid-svg-icons';
import { CloseButton, ProgressBar } from "react-bootstrap";
import Img1 from "./img/team1.jpg"
import Img2 from "./img/team2.jpg"
import Img3 from "./img/team3.jpg"
import Img4 from "./img/team4.jpg"
import { FaFacebook, FaTwitter } from "react-icons/fa";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 row-md-12">
                        <h6>about us</h6>
                        <h2>who we are</h2>
                        <hr />
                        <p>ulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
                            accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen
                            tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</p>
                    </div>
                    <div className="col-lg-6 col-md-12 abouts">
                        <div className="icon">
                            <FontAwesomeIcon className="active" icon={faCalendarMinus} />
                        </div>
                        <div className="info-title">
                            <h6>ON TIME PROJECTS</h6>
                            <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 abouts">
                        <div className="icon">
                            <FontAwesomeIcon className="active" icon={faArrowCircleDown} />
                        </div>
                        <div className="info-title">
                            <h6>PROFESSIONAL EXPERIENCE</h6>
                            <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 abouts">
                        <div className="icon">
                            <FontAwesomeIcon className="active" icon={faListCheck} />
                        </div>
                        <div className="info-title">
                            <h6>FULLY SUPPORT</h6>
                            <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 abouts">
                        <div className="icon">
                            <FontAwesomeIcon className="active" icon={faMarsStrokeRight} />
                        </div>
                        <div className="info-title">
                            <h6>COMMUNICATIVE TEAM</h6>
                            <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit</p>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 title">
                        <h2>the team</h2>
                        <hr />
                        <p>ulla sit amet nisl tempus convallis quis ac lectus. Vivamus
                            suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit
                            tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincid</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 card">
                        <img src={Img1} />
                        <h3>amelia</h3>
                        <p>CREATIVE DIRECTOR</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 card">
                        <img src={Img2} />
                        <h3>emma</h3>
                        <p>art director</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 card">
                        <img src={Img3} />
                        <h3>john doe</h3>
                        <p>web developer</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 card">
                        <img src={Img4} />
                        <h3>lisa</h3>
                        <p>photographer</p>
                    </div>
                </div>
            </div>
            <div className="desc">
                <div className="container">
                    <div className="client">
                        <div className="text">
                            <h4>jhon deo</h4>
                            <CloseButton />
                        </div>
                        <div className="title-col">
                            <p>ulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
                                accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen
                                tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</p>
                            <div className="icon">
                                <FaTwitter />
                                <FaFacebook />
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <div className="title">
                            <h4>skills?</h4>
                            <p>ulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit</p>
                        </div>
                        <div className="progres">
                            <div className="prog">
                                <span>html&css</span>
                                <ProgressBar now={93} />
                                <span>al&ps</span>
                                <ProgressBar now={75} />
                                <span>js&php</span>
                                <ProgressBar now={85} />
                                <span>photography</span>
                                <ProgressBar now={70} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;