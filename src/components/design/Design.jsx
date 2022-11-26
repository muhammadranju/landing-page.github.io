const Design = ({ text, paragraph, icon }) => {
    return (
        <div className="col-lg-4 col-md-7">
            <div className="p-5 feature-hover active position-relative">
                <div className="f-icon">
                    <i className={icon}></i>
                </div>
                <h5 className="mt-4 mb-3">{text}</h5>
                <p className="mb-0">{paragraph}</p>
            </div>
        </div>
    );
};

export default Design;
