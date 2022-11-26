import React from "react";

const Feedback = ({ image, paragraph }) => {
    return (
        <div className="carousel-item active">
            <div className="card p-2 p-md-5 border-0">
                <div className="mb-3">
                    <img
                        alt="Image"
                        src={image}
                        className="shadow-primary img-fluid rounded-circle d-inline"
                    />
                </div>
                <div className="card-body p-0">
                    <p className="lead font-w-5">{paragraph}</p>
                    <div>
                        <h5 className="text-primary d-inline">Raymond Lee</h5>
                        <small className="text-muted fst-italic">
                            - Founder
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
