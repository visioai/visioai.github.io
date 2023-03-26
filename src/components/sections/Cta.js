import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import Button from "../elements/Button";

import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../constants";

import toast from "react-hot-toast";

import { useTranslation } from "react-i18next";

const toastStyle = {
    background: "linear-gradient(to right, #151719, #25282C)",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    borderRadius: "0.5rem",
    boxShadow: "0 0 0.5rem 0 rgba(0,0,0,0.2)",
    maxWidth: "50rem",
};

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool,
};

const defaultProps = {
    ...SectionProps.defaults,
    split: false,
};

const Cta = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, split, ...props }) => {
    const { t } = useTranslation();

    const outerClasses = classNames(
        "cta section center-content-mobile reveal-from-bottom",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames("cta-inner section-inner", topDivider && "has-top-divider", bottomDivider && "has-bottom-divider", split && "cta-split");

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
            (result) => {
                console.log(result.text);
                toast.success(t("SendSuccessfully"), {
                    duration: 2000,
                    position: "top-center",
                    style: toastStyle,
                });
            },
            (error) => {
                console.log(error.text);
                toast.error(t("SendFailed"), {
                    duration: 2000,
                    position: "top-center",
                    style: toastStyle,
                });
            }
        );
        e.target.reset();
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <div className="cta-slogan">
                        <h3 className="m-0">
                            {t("FeedbackAndQuestions")}
                        </h3>
                    </div>
                    <div className="cta-action">
                        <form onSubmit={sendMail}>
                            <div style={{ marginBottom: 10 }}>
                                <Input id="email" name="email" type="email" labelHidden placeholder={t("YourEmail")} required />
                            </div>
                            <div style={{ marginBottom: 10 }}>
                                <Input id="name" name="name" type="text" labelHidden placeholder={t("YourName")} required />
                            </div>
                            <Input id="newsletter" name="message" size={200} type="textarea" label="Subscribe" labelHidden placeholder={t("YourMessage")} required />
                            <Button type="submit" style={{ marginTop: 20 }}>
                                {t("Send")}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
