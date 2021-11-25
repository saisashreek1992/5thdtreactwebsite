import React from "react";

const Header = () => {
    return (
        <div className="row align-items-start">
            <div className="col px-5 my-3 align-self-start">
                <div className="row position-relative align-items-start">
                    <Link to="/home">
                        <div className="col position-absolute align-self-start">
                            <img src={Logo} className="img-fluid w-5 order-first" alt="5thdtlogo" />
                        </div>
                    </Link>
                </div>
                 
            </div>
        </div>
    );
};

export default Header;
