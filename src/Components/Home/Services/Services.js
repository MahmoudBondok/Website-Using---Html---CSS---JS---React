import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCameraAlt, faTowerBroadcast, faGift } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id="services" className="services">
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
                    <div className="col-lg-3 col-md-6 last">
                        <FontAwesomeIcon className="active" icon={faTowerBroadcast} />
                        <h3>web design</h3>
                        <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit</p>
                    </div>
                    <div className="col-lg-3 col-md-6 last">
                        <FontAwesomeIcon icon={faCameraAlt} />
                        <h3>graphic design</h3>
                        <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit</p>
                    </div>
                    <div className="col-lg-3 col-md-6 last">
                        <FontAwesomeIcon icon={faEdit} />
                        <h3>photography</h3>
                        <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit</p>
                    </div>
                    <div className="col-lg-3 col-md-6 last">
                        <FontAwesomeIcon icon={faGift} />
                        <h3>developing</h3>
                        <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;