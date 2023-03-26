import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
// import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";
import Button from "../elements/Button";

import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { openInNewTab } from "../../util";

const propTypes = {
    topOuterDivider: PropTypes.bool,
    topDivider: PropTypes.bool,
};

const defaultProps = {
    topOuterDivider: false,
    topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
    const { i18n } = useTranslation("translation");
    const classes = classNames("site-footer center-content-mobile", topOuterDivider && "has-top-divider", className);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("i18nextLng") || "en");

    const handleSelect = (e) => {
        e.preventDefault();
        setSelectedLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    };

    return (
        <footer {...props} className={classes}>
            <div className="container">
                <div className={classNames("site-footer-inner", topDivider && "has-top-divider")}>
                    <div className="footer-top space-between text-xxs">
                        <Logo style={{ cursor: "pointer" }} scrollToTop={scrollToTop} />
                        <FooterSocial />
                    </div>
                    <div className="footer-bottom space-between text-xxs invert-order-desktop">
                        {/* <FooterNav /> */}
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <select
                                value={selectedLanguage}
                                onChange={(e) => handleSelect(e)}
                                style={{ backgroundColor: "transparent", border: "1px solid #bbb", borderRadius: 4, fontSize: 14, color: "white", padding: 2, height: 36 }}
                            >
                                <option value="en">English</option>
                                <option value="tr">Türkçe</option>
                            </select>
                        </div>
                        <div className="footer-copyright">
                            &copy;{new Date().getFullYear()}{" "}
                            <Button
                                style={{ cursor: "pointer", color: "white", background: "transparent", paddingLeft: 0, paddingRight: 0, fontSize: 14 }}
                                onClick={() => openInNewTab("https://www.linkedin.com/in/frhtas/")}
                            >
                                Ferhat Taş
                            </Button>
                            . {t("AllRightsReserved")}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
