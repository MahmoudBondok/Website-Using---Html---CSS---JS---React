import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhoneAlt, FaHome } from "react-icons/fa";
import { Button } from "react-bootstrap";

const Contact = () => {
    return (
        <div className="contact" id="contacts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h6>contact us</h6>
                        <h2>where you can find us</h2>
                        <hr />
                        <p>ulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
                            accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen
                            tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <FaHome />
                        <h4>our address</h4>
                        <p>Cairo, Egypt</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <FaEnvelope />
                        <h4>our mail</h4>
                        <p>mahmoudsafwat@gmail.com</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <FaPhoneAlt />
                        <h4>our phone</h4>
                        <p>011-0365-2881</p>
                    </div>
                </div>
            </div>
            <div className="sub">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h6>our services</h6>
                            <h2>what we love to do</h2>
                            <hr />
                            <p>ulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
                                accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen
                                tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</p>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <input type="name" placeholder="Your Name" />
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <input type="email" placeholder="Your Mail" />
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <input type="subject" placeholder="Subject" />
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <input className="desc" type="subject" placeholder="Enter Message Here.." />
                            <Button>Send Message</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;