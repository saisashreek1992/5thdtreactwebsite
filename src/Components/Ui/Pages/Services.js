import React from 'react';
import {Link} from "react-router-dom";
import Header from '../../Common/Header';
import Whatwedo from '../Static Pages/Whatwedo';
import '../../../Assets/style/base.css';
import Servicesitem from './Servicesitem'
import ImgSlider from "./ImgSlider";
import NavBar from "../../Common/NavBar";
import Footer from '../../Common/Footer';
const Services = (props) => {
    return (
        <div className="container-fluid">
            <Header />
            <div className="row col px-5 my-3 ">
                <div className="col-lg-11 col px-5 my-3">
                    <Whatwedo />
                    <Servicesitem />
                </div>
                <div className="col-lg-1">
                    <NavBar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Services;
