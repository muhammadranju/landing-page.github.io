const Blog = ({ image, text }) => {
    return (
        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            {/* <!-- Blog Card --> */}
            <div className="card border-0 shadow bg-transparent">
                <img className="card-img-top" src={image} alt="Image" />
                <div className="card-body p-4">
                    <div>
                        <div className="d-inline-block bg-light text-center px-2 py-1 rounded me-2">
                            <span className="text-primary">05</span>
                            Sep
                        </div>{" "}
                        <a className="d-inline-block btn-link" href="#">
                            Sass
                        </a>
                    </div>
                    <h2 className="h5 my-3">
                        <a className="link-title" href="blog-single.html">
                            {text}
                        </a>
                    </h2>
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item pe-3">
                            {" "}
                            <a href="#" className="list-group-item-action">
                                <i className="lar la-user-circle me-1 text-primary ic-1x"></i>{" "}
                                Admin
                            </a>
                        </li>
                        <li className="list-inline-item pe-3">
                            {" "}
                            <a href="#" className="list-group-item-action">
                                <i className="las la-eye me-1 text-primary ic-1x"></i>{" "}
                                275
                            </a>
                        </li>
                        <li className="list-inline-item">
                            {" "}
                            <a href="#" className="list-group-item-action">
                                <i className="lar la-comments me-1 text-primary ic-1x"></i>{" "}
                                300
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;
