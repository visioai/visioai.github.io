import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Image from "../elements/Image";

import { isAndroid, isIOS } from "react-device-detect";
import ModalVideo from "react-modal-video";
import { MdPlayCircle } from "react-icons/md";

import { useTranslation } from "react-i18next";

const propTypes = {
    ...SectionProps.types,
};

const defaultProps = {
    ...SectionProps.defaults,
};

const Hero = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, ...props }) => {
    const { t } = useTranslation("translation");

    const [videoModalActive, setVideomodalactive] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    };

    // const closeModal = (e) => {
    //     e.preventDefault();
    //     setVideomodalactive(false);
    // };

    const outerClasses = classNames(
        "hero section center-content",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames("hero-inner section-inner", topDivider && "has-top-divider", bottomDivider && "has-bottom-divider");

    const iOSUrl = "https://apps.apple.com/app/visio-ai-photo-gallery/id1632735603";
    const AndroidUrl = "https://play.google.com/store/apps/details?id=com.visioai.gallerypro";

    const [imageWidth, setImageWidth] = useState("200");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (isAndroid || isIOS) {
            setImageWidth("150");
            setIsMobile(true);
        }
    }, []);

    return (
        <section {...props} className={outerClasses}>
            <div className="container-sm">
                <div className={innerClasses}>
                    <div className="hero-content">
                        <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                            {t("WelcomeToVisioAI")}
                            <span className="text-color-primary"></span>
                        </h1>
                        <div className="container-xs">
                            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                                {t("YouCanEasilyManage")}
                            </p>
                            {isMobile ? (
                                <div className="reveal-from-bottom" data-reveal-delay="600">
                                    <div style={{ justifyContent: "space-evenly", alignItems: "center", display: "flex", alignContent: "center" }}>
                                        <a href={iOSUrl}>
                                            <img width={imageWidth} alt="Download from the App Store" src={require("../../assets/images/app-store.png")} />
                                        </a>
                                        <a href={AndroidUrl}>
                                            <img width={imageWidth} alt="Get it on Google Play" src={require("../../assets/images/play-store.png")} />
                                        </a>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div
                        className="hero-figure reveal-from-bottom illustration-element-01"
                        data-reveal-value="20px"
                        data-reveal-delay="800"
                        style={{ justifyContent: "center", alignItems: "center", display: "flex", alignContent: "center" }}
                    >
                        {!isMobile ? (
                            <a href={iOSUrl} target="_blank" rel="noopener noreferrer">
                                <img width={imageWidth} alt="Download from the App Store" src={require("../../assets/images/app-store.png")} />
                            </a>
                        ) : null}
                        <a href="#0" aria-controls="video-modal" onClick={openModal}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "relative",
                                    border: "8px solid transparent",
                                    borderRadius: 16,
                                    backgroundColor: "#33363A",
                                    overflow: "hidden",
                                    marginLeft: 40,
                                    marginRight: 40,
                                }}
                            >
                                <Image style={{ display: "block" }} className="has-shadow" src={require("./../../assets/visio_assets/mockup.png")} alt="Hero" width={isMobile ? 200 : 250} />
                                <MdPlayCircle style={{ position: "absolute" }} size={70} />
                            </div>
                        </a>
                        {!isMobile ? (
                            <a href={AndroidUrl} target="_blank" rel="noopener noreferrer">
                                <img width={imageWidth} alt="Get it on Google Play" src={require("../../assets/images/play-store.png")} />
                            </a>
                        ) : null}
                    </div>
                    <div style={{ width: 50 }}>
                        <ModalVideo
                            ratio="9:14"
                            channel="custom"
                            autoplay
                            isOpen={videoModalActive}
                            url={require("./../../assets/visio_assets/App Preview - Home.webm")}
                            onClose={() => setVideomodalactive(false)}
                        />
                    </div>
                    {/* <Modal id="video-modal" show={videoModalActive} handleClose={closeModal} video={require("./../../assets/visio_assets/App Preview - Home.webm")} videoTag="iframe" /> */}
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
