import React from 'react-bootstrap';
import "./Services2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCameraAlt, faTowerBroadcast, faGift } from '@fortawesome/free-solid-svg-icons';

const Services2 = () => {
    return (
        <div className='services2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 info-head'>
                        <h2>how we do it</h2>
                        <p>sit amet nisl tempus convallis quis ac lectus. Praesent
                            sapien massa, convallis a pellen tesque nec
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6 last">
                        <FontAwesomeIcon className="active" icon={faTowerBroadcast} />
                        <h3>web design</h3>
                        <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id</p>
                    </div>
                    <div className="col-lg-2 col-md-6 last">
                        <FontAwesomeIcon icon={faCameraAlt} />
                        <h3>graphic design</h3>
                        <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id</p>
                    </div>
                    <div className="col-lg-2 col-md-6 last">
                        <FontAwesomeIcon icon={faEdit} />
                        <h3>photography</h3>
                        <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id</p>
                    </div>
                    <div className="col-lg-2 col-md-6 last">
                        <FontAwesomeIcon icon={faGift} />
                        <h3>developing</h3>
                        <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id</p>
                    </div>
                    <div className="col-lg-2 col-md-6 last">
                        <FontAwesomeIcon icon={faGift} />
                        <h3>developing</h3>
                        <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id</p>
                    </div>
                    <div className="col-lg-2 col-md-6 last">
                        <FontAwesomeIcon icon={faGift} />
                        <h3>developing</h3>
                        <p>ec sollicitudin molestie malesuada. Curabitur aliquet quam id</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Services2;