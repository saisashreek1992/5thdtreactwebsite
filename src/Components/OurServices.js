import React from "react";
import logo from "../logo.svg";
import  ServiceLists from "./data"
import ServiceList from "./ServiceList";

const OurServices = () => {
  
    return (
        <div className="row justify-content-start px-5 my-5 ">
            <center>
                <h2 className="px-3 my-3 card_head">Our Services</h2>
            </center>
            <ServiceList services = {ServiceLists}/>
        </div>
    );
};

export default OurServices;
