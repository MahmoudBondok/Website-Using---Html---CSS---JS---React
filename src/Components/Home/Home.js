import React, { Fragment } from "react";
import About from "./About/About";
import Clients from "./Clients/Clients";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Services2 from "./Services2/Services2";
import Work from "./Work/Work";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Services />
            <Services2 />
            <Work />
            <About />
            <Clients />
            <Contact />
        </Fragment>
    );
}

export default Home;