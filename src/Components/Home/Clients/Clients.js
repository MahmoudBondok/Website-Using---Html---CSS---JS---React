import React from "react";
import "./Clients.css";
import Logo1 from "./logo-clients/logo1.png";
import Logo2 from "./logo-clients/logo2.png";
import Logo3 from "./logo-clients/logo3.jpg";
import Logo4 from "./logo-clients/logo4.png";

const Clients = () => {
    return (
        <div className="clients" id="clients">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h6>our clients</h6>
                        <h2>who love to work with us</h2>
                        <hr />
                        <p>ulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor
                            accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellen
                            tesque nec, egestas non nisi. Mauris blandit aliquet elit, eget tincidunt ni dictum porta.</p>
                    </div>
                    <div className="col-lg-3">
                        <img src={Logo1} />
                    </div>
                    <div className="col-lg-3">
                        <img src={Logo2} />
                    </div>
                    <div className="col-lg-3">
                        <img src={Logo3} />
                    </div>
                    <div className="col-lg-3">
                        <img src={Logo4} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Clients;