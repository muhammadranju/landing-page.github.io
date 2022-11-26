const Colors = ({ color, images }) => {
    return (
        <div className="col-md col-sm-4">
            <div
                className="client-logo py-5 px-3 text-center rounded"
                data-bg-color={color}
            >
                <img className="img-fluid" src={images} alt="" />
            </div>
        </div>
    );
};

export default Colors;
