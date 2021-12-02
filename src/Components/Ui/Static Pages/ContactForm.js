import React from "react";
const ContactForm = () => {
    return (
        <div className="row col px-5 my-3 ">
            <form>
                <div className="form-group ">
                    <label for="fname">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fname"
                        placeholder="Enter your Full Name"
                    />
                    <small className="form-text text-muted"> &nbsp;</small>
                </div>

                <div className="form-group  ">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group ">
                    <label for="sub">Subject</label>
                    <input
                        type="text"
                        className="form-control"
                        id="sub"
                        placeholder="Enter Subject"
                    />
                    <small className="form-text text-muted"> &nbsp;</small>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">
                        Example textarea
                    </label>
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                    <small className="form-text text-muted"> &nbsp;</small>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
