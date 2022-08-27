import React from "react";
import "./Work.css";
import { Button, Carousel, } from "react-bootstrap";
import Img from "./img/1.jpg"
import Img2 from "./img/2.jpg"
import Img3 from "./img/3.jpg"
import Img4 from "./img/4.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Work = () => {
    return (
        <div className="work" id="work">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h6>our works</h6>
                        <h2>what we done so far</h2>
                        <hr />
                        <p>ulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
                            accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen
                            tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</p>
                    </div>
                    <div className="col-lg-12">
                        <li className="active">all</li>
                        <li>web design</li>
                        <li>graphic design</li>
                        <li>photography</li>
                        <li>llustartion</li>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Img}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>What We Done So Far</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Img2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>What We Done So Far</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Img3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>What We Done So Far</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Img4}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>What We Done So Far</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-lg-6 col-md-6 info">
                        <h3>Our Awesome Image</h3>
                        <p>ulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
                            accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen
                            tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</p>
                        <Button>View Image</Button>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <FontAwesomeIcon icon={faArrowDown} />
                        <h2>do you like our portfolio?</h2>
                        <hr />
                        <p>ulla sit amet nisl tempus convallis quis ac lectus. Vivamus
                            suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit
                            tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincid</p>
                        <Button>Contact Us</Button>
                    </div>
                </div>
            </div>
            <div className="numbers">
                <div className="container">
                    <div className="row parant">
                        <div className="col-lg-12 col-md-12">
                            <h2>WE ARE PROUD OF THESE NUMBERS</h2>
                            <p>ulla sit amet nisl tempus convallis quis ac lectus. Vivamus
                                non Mauris blandit aliquet elit, eget tincid</p>
                        </div>
                        <div className="col-lg-3 col-md-4 num">
                            <h2>1600</h2>
                            <p>Happy clients</p>
                        </div>
                        <div className="col-lg-3 col-md-4 num">
                            <h2>3200</h2>
                            <p>cmd projects</p>
                        </div>
                        <div className="col-lg-3 col-md-4 num">
                            <h2>40</h2>
                            <p>awards</p>
                        </div>
                        <div className="col-lg-3 col-md-4 num">
                            <h2>20000</h2>
                            <p>coffee drinks</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Work;