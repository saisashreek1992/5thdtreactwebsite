import React from 'react';
import {Link} from "react-router-dom";

import '../Assets/styles.css';

const Contact_us = () => {
    return (
        <div>
            <div>
                <h3 className='text-center services'>This is contact row</h3>
                <Link className="btn btn-success" to="/home"> Home</Link>
            </div>
        </div>
    );
};

export default Contact_us;