const FooterLI = ({ text, url }) => {
    return (
        <li className="mb-3">
            <a className="list-group-item-action" href={url}>
                {text}
            </a>
        </li>
    );
};

export default FooterLI;
