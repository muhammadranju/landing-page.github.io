import FooterLI from "./FooterLI";

const FooterLinks = ({ title, text1, text2, text3, text4 }) => {
    return (
        <div className="col-12 col-sm-4 navbar-light">
            <h5 className="mb-4">{title}</h5>
            <ul className="list-unstyled mb-0">
                <FooterLI text={text1} url={"#"} />
                <FooterLI text={text2} url={"#"} />
                <FooterLI text={text3} url={"#"} />
                <FooterLI text={text4} url={"#"} />
            </ul>
        </div>
    );
};

export default FooterLinks;
