import React from "react";

import ServiceItem from "./ServiceItem";

const ServiceList = (props) => {
    return (
        <div className="col-md-4 px-3 my-3">
                <ServiceItem
                    serviceLogo={props.services[0].serviceLogo}
                    serviceTitle={props.services[0].serviceTitle}
                    serviceInfo={props.services[0].serviceInfo}
                />
                <ServiceItem
                    serviceLogo={props.services[1].serviceLogo}
                    serviceTitle={props.services[1].serviceTitle}
                    serviceInfo={props.services[1].serviceInfo}
                />
                <ServiceItem
                    serviceLogo={props.services[2].serviceLogo}
                    serviceTitle={props.services[2].serviceTitle}
                    serviceInfo={props.services[2].serviceInfo}
                />
                <ServiceItem
                    serviceLogo={props.services[3].serviceLogo}
                    serviceTitle={props.services[3].serviceTitle}
                    serviceInfo={props.services[3].serviceInfo}
                />
                <ServiceItem
                    serviceLogo={props.services[4].serviceLogo}
                    serviceTitle={props.services[4].serviceTitle}
                    serviceInfo={props.services[4].serviceInfo}
                />
        </div>
    );
};

export default ServiceList;
