import React from 'react';
import {Link} from "react-router-dom";
import Header from '../../Common/Header';
import Whatwedo from '../Static Pages/Whatwedo';
import '../../../Assets/style/base.css';
import Service from './Service'
import ImgSlider from "./ImgSlider";
import NavBar from "../../Common/NavBar";
import Footer from '../../Common/Footer';

const Serviceinfo = (props) => {
    return (
        <div className="container-fluid">
                <Header />
        <div className="row ">

            <div className="col-lg-12">
               <Service />
            </div>
            <div className="col-lg-1">
                <NavBar />
            </div>
        </div>
        <Footer />
        </div>
    );
};
export default Serviceinfo;