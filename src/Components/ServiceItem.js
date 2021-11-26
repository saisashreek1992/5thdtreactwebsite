import React from "react";
import logo from "../logo.svg";

const ServiceItem = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={logo} className="card-img-top" alt="logo" />
                <h5 className="card-title">{props.serviceTitle}</h5>
                <p className="card-text">
                    {props.serviceInfo}
                </p>
            </div>
        </div>
    );
};

export default ServiceItem;
