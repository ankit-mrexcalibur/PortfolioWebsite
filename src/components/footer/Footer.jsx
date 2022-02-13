import "./footer.css";

const Footer=()=> {
    return (
        <div className="footer">
            <div className="footer-content">
                <a href="https://www.linkedin.com/in/ankitkk22/" target="_blank">
                    <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png" className="cn-icon"/>
                </a>
                <a href="https://www.facebook.com/ankitkumarkamat22" target="_blank">
                    <img src="https://img.icons8.com/fluency/48/000000/facebook-new.png" className="cn-icon"/>
                </a>
                <a href="https://www.instagram.com/disintegrated.engineer/" target="_blank">
                    <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" className="cn-icon"/>
                </a>
                <a href="https://github.com/ankit-mrexcalibur" target="_blank">
                    <img src="https://img.icons8.com/color/48/000000/github--v1.png" className="cn-icon"/>
                </a>
                <a href="https://twitter.com/er_ankitkamat" target="_blank">
                    <img src="https://img.icons8.com/color/48/000000/twitter--v1.png" className="cn-icon"/>
                </a>
            </div>
            <div className="footer-text">
                Copyright &copy; 2023 Ankit Kumar Kamat
            </div>
        </div>
    )
};

export default Footer;