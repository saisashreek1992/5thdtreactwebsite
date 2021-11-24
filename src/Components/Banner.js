import React from "react";

import ImgSlider from "./ImgSlider";
import NavBar from "./NavBar";

const Banner = () => {
    return (
        <div className="row">
            <h3>This is Banner row</h3>
            <div className="col">
                <ImgSlider />
            </div>
            <div className="col">
                <NavBar />
            </div>
        </div>
    );
};

export default Banner;
