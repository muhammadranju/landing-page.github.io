const Discover = ({ number, text }) => {
    return (
        <div className="col-12 col-sm-6 col-lg-3">
            <div className="counter">
                <div className="counter-desc text-dark">
                    <span
                        className="count-number h2"
                        data-to="28"
                        data-speed="2000"
                    >
                        {number}
                    </span>
                    <span className="h2">+</span>
                    <h6 className="text-muted mb-0">{text}</h6>
                </div>
            </div>
        </div>
    );
};

export default Discover;
