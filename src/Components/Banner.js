import React from "react";

import ImgSlider from "./ImgSlider";
import NavBar from "./NavBar";

const Banner = () => {
    return (
        <div className="row">
            <h3 className="text-center">This is Banner row</h3>
            <div className="col-9">
                <ImgSlider />
            </div>
            <div className="col-3">
                <NavBar />
            </div>
        </div>
    );
};

export default Banner;
