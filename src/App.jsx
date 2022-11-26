import { useState } from "react";
import "./App.css";
import Design from "./components/design/Design";
import Blog from "./components/blog/Blog";
import Discover from "./components/discover/Discover";
import Colors from "./components/solidColor/Colors";
import Feedback from "./components/feedback/Feedback";
import FooterLinks from "./components/footer/FooterLinks";

const App = () => {
    window.title = "Winck - Bootstrap 5 Multipurpose Landing Page";
    return (
        <div className="page-wrapper">
            {/* <!-- preloader start --> */}
            <div id="ht-preloader">
                <div className="loader clear-loader">
                    <span>W</span>
                    <span>i</span>
                    <span>n</span>
                    <span>c</span>
                    <span>k</span>
                </div>
            </div>

            {/* <!-- preloader end --> */}

            {/* <!--header start--> */}

            {/* <!--header end--> */}

            {/* <!--hero section start--> */}

            <section className="hero-banner position-relative custom-py-1 hero-shape1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5 col-xl-6 order-lg-1 mb-8 mb-lg-0">
                            {/* <!-- Image --> */}
                            <img
                                src="/src/assets/images/hero/01.png"
                                className="img-fluid"
                                alt="..."
                            />
                        </div>
                        <div className="col-12 col-lg-7 col-xl-6">
                            <h1 className="mb-5">
                                We are here to give the best services
                            </h1>
                            {/* <!-- Buttons --> */}
                            <a href="#" className="btn btn-primary">
                                Start With Your Winck
                            </a>
                            <blockquote className="mt-5 mb-0 ps-3 border-start border-primary">
                                {/* <!-- Text --> */}
                                <p className="lead mb-0">
                                    Build a Beautiful, Clean & Modern Design
                                    website with flexible Bootstrap components.
                                </p>
                            </blockquote>
                        </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
                {/* <!-- / .container --> */}
            </section>

            {/* <!--hero section end--> */}

            {/* <!--body content start--> */}

            <div className="page-content">
                {/* <!--feature start--> */}

                <section>
                    <div className="container">
                        <div className="row justify-content-between align-items-center mb-4 mb-lg-0">
                            <div className="col-lg-6 col-md-5">
                                <div>
                                    <h2>
                                        <span className="font-w-4 d-block">
                                            We focus on your business
                                        </span>
                                        need and provide best
                                    </h2>
                                    <p className="lead">
                                        We use the latest technologies it
                                        voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam.
                                    </p>
                                </div>
                            </div>
                            <Design
                                text={"Design & Creativity"}
                                icon={"flaticon-prototype"}
                                paragraph={
                                    "Taking design from winck design and typography,contemporary page layouts."
                                }
                            />
                        </div>
                        <div className="row mt-lg-n5 align-items-center">
                            <Design
                                text={"Technology Innovation"}
                                icon={"flaticon-knowledge"}
                                paragraph={
                                    "Taking design from winck design and typography, contemporary page layouts."
                                }
                            />
                            <Design
                                text={" Technology Innovation"}
                                icon={"flaticon-thumbs-up"}
                                paragraph={
                                    " Taking design from winck design and typography, contemporary page layouts."
                                }
                            />
                            <div className="col-lg-4 col-12 text-center">
                                {" "}
                                <a href="#" className="btn btn-primary mt-lg-8">
                                    View All Services
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--feature end--> */}

                {/* <!--about start--> */}

                <section className="py-5">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-lg-7 mb-5 mb-lg-0">
                                <img
                                    src="src/assets/images/about/01.png"
                                    alt="Image"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="mb-5">
                                    <h2>
                                        <span className="font-w-4 d-block">
                                            Perfect Solution
                                        </span>
                                        For your Small Business
                                    </h2>
                                    <p className="lead mb-0">
                                        We use the latest technologies it
                                        voluptatem accusantium doloremque
                                        laudantium.
                                    </p>
                                </div>
                                <div className="d-flex align-items-start mb-4">
                                    <div className="me-3">
                                        <span
                                            className="list-dot"
                                            data-bg-color="#01a479"
                                        ></span>
                                    </div>
                                    <div>
                                        <h6 className="mb-2">
                                            Operating Modern Design
                                        </h6>
                                        <p className="mb-0">
                                            Design from winck design and
                                            typography, contemporary page
                                            layouts.
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start">
                                    <div className="me-3">
                                        <span
                                            className="list-dot"
                                            data-bg-color="#ffbe30"
                                        ></span>
                                    </div>
                                    <div>
                                        <h6 className="mb-2">
                                            Easy Multi-usable
                                        </h6>
                                        <p className="mb-0">
                                            Design from winck design and
                                            typography, contemporary page
                                            layouts.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="btn btn-outline-primary mt-5"
                                >
                                    Explore More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--about end--> */}

                {/* <!--multi-sec start--> */}

                <section>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <div className="mb-5">
                                    <h2>
                                        <span className="font-w-4 d-block">
                                            Discover even
                                        </span>
                                        more possibility with Winck
                                    </h2>
                                    <p className="lead mb-0">
                                        We use the latest technologies it
                                        voluptatem accusantium doloremque
                                        laudantium.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <Colors
                                color={"#d0faec"}
                                images={"src/assets/images/client/09.png"}
                            />

                            <Colors
                                color={"#ffeff8"}
                                images={"src/assets/images/client/10.png"}
                            />

                            <Colors
                                color={"#d3f6fe"}
                                images={"src/assets/images/client/11.png"}
                            />

                            <Colors
                                color={"#fff5d9"}
                                images={"src/assets/images/client/12.png"}
                            />

                            <Colors
                                color={"#ffdeeb"}
                                images={"src/assets/images/client/13.png"}
                            />
                        </div>

                        <div className="row align-items-center text-center mt-5">
                            <Discover number={28} text={"Project Completed"} />
                            <Discover number={50} text={"Support Member"} />
                            <Discover number={90} text={"People Love Us"} />
                            <Discover number={120} text={"Happy Customers"} />
                        </div>
                    </div>
                </section>

                {/* <!--multi-sec end--> */}

                {/* <!--testimonial start--> */}

                <section
                    className="bg-pos-r"
                    data-bg-img="./src/assets/images/bg/01.png"
                >
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <div className="mb-5">
                                    <h2>
                                        <span className="font-w-4 d-block">
                                            You can see our clients
                                        </span>
                                        feedback what you say?
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div
                                    id="testimonial"
                                    className="testimonial-carousel carousel slide testimonial z-index-1"
                                    data-bs-ride="carousel"
                                    data-bs-interval="2500"
                                >
                                    {/* <!-- Wrapper for slides --> */}
                                    <div className="row justify-content-center text-center">
                                        <div className="col-md-7">
                                            <div className="carousel-inner">
                                                <Feedback
                                                    paragraph={
                                                        "Winck Amazing Landing Page All-in-one, clean code,                       Crative &amp; Modern design Professional Recommended                        crofessional and great experience, Nam pulvinar vitae                        neque et porttitor, Praesent sed nisieleifend,                        adipisicing elit."
                                                    }
                                                    image={
                                                        "src/assets/images/testimonial/01.jpg"
                                                    }
                                                />
                                                <Feedback
                                                    paragraph={
                                                        "Winck Amazing Landing Page All-in-one, clean code,                       Crative &amp; Modern design Professional Recommended                        crofessional and great experience, Nam pulvinar vitae                        neque et porttitor, Praesent sed nisieleifend,                        adipisicing elit."
                                                    }
                                                    image={
                                                        "src/assets/images/testimonial/02.jpg"
                                                    }
                                                />
                                                <Feedback
                                                    paragraph={
                                                        "Winck Amazing Landing Page All-in-one, clean code,                       Crative &amp; Modern design Professional Recommended                        crofessional and great experience, Nam pulvinar vitae                        neque et porttitor, Praesent sed nisieleifend,                        adipisicing elit."
                                                    }
                                                    image={
                                                        "src/assets/images/testimonial/03.jpg"
                                                    }
                                                />
                                                <Feedback
                                                    paragraph={
                                                        "Winck Amazing Landing Page All-in-one, clean code,                       Crative &amp; Modern design Professional Recommended                        crofessional and great experience, Nam pulvinar vitae                        neque et porttitor, Praesent sed nisieleifend,                        adipisicing elit."
                                                    }
                                                    image={
                                                        "src/assets/images/testimonial/04.jpg"
                                                    }
                                                />

                                                <Feedback
                                                    paragraph={
                                                        "Winck Amazing Landing Page All-in-one, clean code,                       Crative &amp; Modern design Professional Recommended                        crofessional and great experience, Nam pulvinar vitae                        neque et porttitor, Praesent sed nisieleifend,                        adipisicing elit."
                                                    }
                                                    image={
                                                        "src/assets/images/testimonial/05.jpg"
                                                    }
                                                />

                                                <Feedback
                                                    paragraph={
                                                        "Winck Amazing Landing Page All-in-one, clean code,                       Crative &amp; Modern design Professional Recommended                        crofessional and great experience, Nam pulvinar vitae                        neque et porttitor, Praesent sed nisieleifend,                        adipisicing elit."
                                                    }
                                                    image={
                                                        "src/assets/images/testimonial/06.jpg"
                                                    }
                                                />

                                                <Feedback
                                                    paragraph={
                                                        "Winck Amazing Landing Page All-in-one, clean code,                       Crative &amp; Modern design Professional Recommended                        crofessional and great experience, Nam pulvinar vitae                        neque et porttitor, Praesent sed nisieleifend,                        adipisicing elit."
                                                    }
                                                    image={
                                                        "src/assets/images/testimonial/07.jpg"
                                                    }
                                                />

                                                <Feedback
                                                    paragraph={
                                                        "Winck Amazing Landing Page All-in-one, clean code,                       Crative &amp; Modern design Professional Recommended                        crofessional and great experience, Nam pulvinar vitae                        neque et porttitor, Praesent sed nisieleifend,                        adipisicing elit."
                                                    }
                                                    image={
                                                        "src/assets/images/testimonial/08.jpg"
                                                    }
                                                />
                                                {/* <!-- End Item --> */}
                                            </div>
                                            {/* <!-- End Carousel Inner --> */}
                                        </div>
                                    </div>
                                    <div className="controls">
                                        <ul className="nav justify-content-md-between justify-content-center">
                                            <li
                                                data-bs-target="#testimonial"
                                                data-bs-slide-to="0"
                                                className="active"
                                            >
                                                <a href="#">
                                                    <img
                                                        className="img-fluid rounded-circle shadow-primary"
                                                        src="src/assets/images/testimonial/01.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li
                                                className="mt-3"
                                                data-bs-target="#testimonial"
                                                data-bs-slide-to="1"
                                            >
                                                <a href="#">
                                                    <img
                                                        className="img-fluid rounded-circle shadow-primary"
                                                        src="src/assets/images/testimonial/02.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li
                                                data-bs-target="#testimonial"
                                                data-bs-slide-to="2"
                                            >
                                                <a href="#">
                                                    <img
                                                        className="img-fluid rounded-circle shadow-primary"
                                                        src="src/assets/images/testimonial/03.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li
                                                className="mt-3"
                                                data-bs-target="#testimonial"
                                                data-bs-slide-to="3"
                                            >
                                                <a href="#">
                                                    <img
                                                        className="img-fluid rounded-circle shadow-primary"
                                                        src="src/assets/images/testimonial/04.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li
                                                data-bs-target="#testimonial"
                                                data-bs-slide-to="4"
                                            >
                                                <a href="#">
                                                    <img
                                                        className="img-fluid rounded-circle shadow-primary"
                                                        src="src/assets/images/testimonial/05.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li
                                                className="mt-3"
                                                data-bs-target="#testimonial"
                                                data-bs-slide-to="5"
                                            >
                                                <a href="#">
                                                    <img
                                                        className="img-fluid rounded-circle shadow-primary"
                                                        src="src/assets/images/testimonial/06.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li
                                                data-bs-target="#testimonial"
                                                data-bs-slide-to="6"
                                            >
                                                <a href="#">
                                                    <img
                                                        className="img-fluid rounded-circle shadow-primary"
                                                        src="src/assets/images/testimonial/07.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                            <li
                                                className="mt-3"
                                                data-bs-target="#testimonial"
                                                data-bs-slide-to="7"
                                            >
                                                <a href="#">
                                                    <img
                                                        className="img-fluid rounded-circle shadow-primary"
                                                        src="src/assets/images/testimonial/08.jpg"
                                                        alt=""
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- End Carousel --> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--testimonial end--> */}

                {/* <!--blog start--> */}

                <section>
                    <div className="container">
                        <div className="row align-items-end mb-5">
                            <div className="col-12 col-md-12 col-lg-4">
                                <div>
                                    <h2 className="mb-0">
                                        <span className="font-w-4 d-block">
                                            From Our Blog
                                        </span>{" "}
                                        List Latest Feed
                                    </h2>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-5 ps-lg-5 my-3 my-lg-0">
                                <p className="lead mb-0">
                                    Winck Amazing Landing Page of businesses
                                    need access to development resources.
                                </p>
                            </div>
                            <div className="col-12 col-md-12 col-lg-3 text-lg-end">
                                {" "}
                                <a
                                    href="blog-listing.html"
                                    className="btn btn-primary"
                                >
                                    View More Post
                                </a>
                            </div>
                        </div>
                        {/* <!-- / .row --> */}
                        <div className="row">
                            <Blog
                                image={"src/assets/images/blog/01.jpg"}
                                text={"Winck trending landing page 2020"}
                            />
                            <Blog
                                image={"src/assets/images/blog/02.jpg"}
                                text={
                                    "The evolution of landing page creativity"
                                }
                            />
                            <Blog
                                image={"src/assets/images/blog/03.jpg"}
                                text={"How to growth business with Winck"}
                            />
                        </div>
                    </div>
                </section>

                {/* <!--blog end--> */}

                {/* <!--newsletter start--> */}

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div
                                    className="bg-light bg-pos-l py-6 px-4 px-lg-6 text-center rounded"
                                    data-bg-img="src/assets/images/bg/02.png"
                                >
                                    <div className="mb-5">
                                        <h2>
                                            <span className="font-w-4 d-block">
                                                Subscribe newsletter
                                            </span>{" "}
                                            now for a custom built
                                        </h2>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-9">
                                            <div className="subscribe-form text-center">
                                                <form
                                                    id="mc-form"
                                                    className="row mb-3"
                                                >
                                                    <div className="col-md">
                                                        <input
                                                            type="text"
                                                            value=""
                                                            name="NAME"
                                                            className="name form-control border-0 shadow-sm rounded"
                                                            id="mc-name"
                                                            placeholder="Your Name"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="col-md">
                                                        <input
                                                            type="email"
                                                            value=""
                                                            name="EMAIL"
                                                            className="email form-control border-0 shadow-sm rounded mt-3 mt-md-0"
                                                            id="mc-email"
                                                            placeholder="Email Address"
                                                            required=""
                                                        />
                                                    </div>
                                                    <div className="col-md-auto">
                                                        <input
                                                            className="btn btn-dark mt-3 mt-md-0"
                                                            type="submit"
                                                            name="subscribe"
                                                            value="Subscribe Now"
                                                        />
                                                    </div>
                                                </form>
                                                <small className="text-dark">
                                                    Get started for 1 Month free
                                                    trial No Purchace required.
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--newsletter end--> */}
            </div>

            {/* <!--body content end--> */}

            {/* <!--footer start--> */}

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5 col-xl-4 me-auto mb-5 mb-lg-0">
                            <a
                                className="footer-logo h2 text-primary mb-0 font-w-7"
                                href="index.html"
                            >
                                W
                                <span className="text-dark font-w-4">
                                    inck.
                                </span>
                            </a>
                            <p className="my-3">
                                Winck - Bootstrap 5 Multipurpose Landing Page Is
                                fully responsible, Build whatever you like with
                                the Winck.
                            </p>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a
                                        className="border rounded px-2 py-1 text-dark"
                                        href="#"
                                    >
                                        <i className="la la-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        className="border rounded px-2 py-1 text-dark"
                                        href="#"
                                    >
                                        <i className="la la-dribbble"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        className="border rounded px-2 py-1 text-dark"
                                        href="#"
                                    >
                                        <i className="la la-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        className="border rounded px-2 py-1 text-dark"
                                        href="#"
                                    >
                                        <i className="la la-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        className="border rounded px-2 py-1 text-dark"
                                        href="#"
                                    >
                                        <i className="la la-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-6 col-xl-7">
                            <div className="row">
                                <FooterLinks
                                    title={"Pages"}
                                    text1={"About"}
                                    text2={"Shop"}
                                    text3={"Faq"}
                                    text4={"Contact Us"}
                                />

                                <FooterLinks
                                    title={"Service"}
                                    text1={"Content Writing"}
                                    text2={"Documentation"}
                                    text3={"Account"}
                                    text4={"Careers"}
                                />
                                <FooterLinks
                                    title={"Our Address"}
                                    text1={"423B, Road Word Wide Country, USA"}
                                    text2={"themeht23@gmail.com"}
                                    text3={"+91-234-567-8900"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col">
                            <hr className="m-0" />
                        </div>
                    </div>
                    <div className="row align-items-center mb-5">
                        <div className="col-md-6">
                            Copyright ©2020 All rights reserved | Winck is made
                            by{" "}
                            <i className="lar la-heart text-primary heartBeat2"></i>{" "}
                            <u>
                                <a className="text-primary" href="#">
                                    ThemeHt
                                </a>
                            </u>
                        </div>
                        <div className="col-md-6 text-md-end mt-3 mt-md-0">
                            <ul className="list-inline mb-0">
                                <li className="me-3 list-inline-item">
                                    {" "}
                                    <a
                                        className="list-group-item-action"
                                        href="#"
                                    >
                                        Term Of Service
                                    </a>
                                </li>
                                <li className="me-3 list-inline-item">
                                    {" "}
                                    <a
                                        className="list-group-item-action"
                                        href="#"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    {" "}
                                    <a
                                        className="list-group-item-action"
                                        href="#"
                                    >
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!--footer end--> */}

            {/* <!-- page wrapper end --> */}

            {/* <!--back-to-top start--> */}

            <div className="scroll-top">
                <a className="smoothscroll" href="#top">
                    Scroll Top
                </a>
            </div>
        </div>
    );
};

export default App;
