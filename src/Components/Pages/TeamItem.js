import React from 'react';
import '../../Assets/styles.css'
import logo from '../../logo.svg';

const TeamItem = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={logo} className="card-img-top team-img mx-auto" alt="logo" />
                <h5 className="card-title">{props.teamName}</h5>
                <p className="card-text">
                    {props.teamTag}
                </p>
            </div>
        </div>
    );
};

export default TeamItem;