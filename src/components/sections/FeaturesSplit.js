import React, { useState } from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
// import Modal from "../elements/Modal";
import Button from "../elements/Button";

import ModalVideo from "react-modal-video";

import { useTranslation } from "react-i18next";

const paddingTop = { paddingTop: 75 };

const outerDivStyle = {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
};

const imageDivStyle = (transform) => ({
    border: "8px solid #33363A",
    borderRadius: "20px",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    transform: transform,
    msTransform: transform,
});

const imageStyle = {
    border: "1px solid #33363A",
    borderRadius: "10px",
};

const propTypes = {
    ...SectionSplitProps.types,
};

const defaultProps = {
    ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, invertMobile, invertDesktop, alignTop, imageFill, ...props }) => {
    const { t } = useTranslation("translation");

    const outerClasses = classNames(
        "features-split section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames("features-split-inner section-inner", topDivider && "has-top-divider", bottomDivider && "has-bottom-divider");

    const splitClasses = classNames("split-wrap", invertMobile && "invert-mobile", invertDesktop && "invert-desktop", alignTop && "align-top");

    const sectionHeader = {
        title: t("ExploreTheFeatures"),
        paragraph: t("ExploreTheFeaturesDescription"),
    };

    const [videoModalActive, setVideomodalactive] = useState(false);
    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    };

    const [videoModalActiveStats, setVideoModalActiveStats] = useState(false);
    const openModalStats = (e) => {
        e.preventDefault();
        setVideoModalActiveStats(true);
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={splitClasses}>
                        {/* Advanced Photo Search */}
                        <div className="split-item" style={paddingTop}>
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <div style={{ paddingBottom: 10 }}>
                                    <Button onClick={openModal}>{t("WatchTheFeatureVideo")}</Button>
                                </div>
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">{t("AdvancedPhotoSearch")}</div>
                                <h3 className="mt-0 mb-12">{t("AdvancedPhotoSearchTitle")}</h3>
                                <p className="m-0">{t("AdvancedPhotoSearchDescription")}</p>
                            </div>
                            <div
                                className={classNames("split-item-image center-content-mobile reveal-from-bottom", imageFill && "split-item-image-fill")}
                                data-reveal-container=".split-item"
                                style={outerDivStyle}
                            >
                                <div style={imageDivStyle("rotate(0deg)")}>
                                    <Image style={imageStyle} src={require("./../../assets/visio_assets/onboarding_search_dark.webp")} alt="Features split 01" />
                                </div>
                            </div>
                        </div>

                        {/* Photo Statistics */}
                        <div className="split-item" style={paddingTop}>
                            <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                                <div style={{ paddingBottom: 10 }}>
                                    <Button onClick={openModalStats}>{t("WatchTheFeatureVideo")}</Button>
                                </div>
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">{t("PhotoStatistics")}</div>
                                <h3 className="mt-0 mb-12">{t("PhotoStatisticsTitle")}</h3>
                                <p className="m-0">{t("PhotoStatisticsDescription")}</p>
                            </div>
                            <div
                                className={classNames("split-item-image center-content-mobile reveal-from-bottom", imageFill && "split-item-image-fill")}
                                data-reveal-container=".split-item"
                                style={outerDivStyle}
                            >
                                <div style={imageDivStyle("rotate(0deg)")}>
                                    <Image style={imageStyle} src={require("./../../assets/visio_assets/onboarding_stats_dark.webp")} alt="Features split 01" />
                                </div>
                            </div>
                        </div>

                        {/* Photo Map */}
                        <div className="split-item" style={paddingTop}>
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">{t("PhotoMap")}</div>
                                <h3 className="mt-0 mb-12">{t("PhotoMapTitle")}</h3>
                                <p className="m-0">{t("PhotoMapDescription")}</p>
                            </div>
                            <div
                                className={classNames("split-item-image center-content-mobile reveal-from-bottom", imageFill && "split-item-image-fill")}
                                data-reveal-container=".split-item"
                                style={outerDivStyle}
                            >
                                <div style={imageDivStyle("rotate(0deg)")}>
                                    <Image style={imageStyle} src={require("./../../assets/visio_assets/onboarding_map.webp")} alt="Features split 01" />
                                </div>
                            </div>
                        </div>

                        {/* Similar Photos */}
                        <div className="split-item" style={paddingTop}>
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">{t("SimilarPhotos")}</div>
                                <h3 className="mt-0 mb-12">{t("SimilarPhotosTitle")}</h3>
                                <p className="m-0">{t("SimilarPhotosDescription")}</p>
                            </div>
                            <div
                                className={classNames("split-item-image center-content-mobile reveal-from-bottom", imageFill && "split-item-image-fill")}
                                data-reveal-container=".split-item"
                                style={outerDivStyle}
                            >
                                <div style={imageDivStyle("rotate(0deg)")}>
                                    <Image style={imageStyle} src={require("./../../assets/visio_assets/onboarding_similarphotos_dark.webp")} alt="Features split 01" />
                                </div>
                            </div>
                        </div>

                        {/* Image Editor */}
                        <div className="split-item" style={paddingTop}>
                            <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">{t("ImageEditor")}</div>
                                <h3 className="mt-0 mb-12">{t("ImageEditorTitle")}</h3>
                                <p className="m-0">{t("ImageEditorDescription")}</p>
                            </div>
                            <div
                                className={classNames("split-item-image center-content-mobile reveal-from-bottom", imageFill && "split-item-image-fill")}
                                data-reveal-container=".split-item"
                                style={outerDivStyle}
                            >
                                <div style={imageDivStyle("rotate(0deg)")}>
                                    <Image style={imageStyle} src={require("./../../assets/visio_assets/onboarding_edit.webp")} alt="Features split 01" />
                                </div>
                            </div>
                        </div>

                        {/* Video Player */}
                        <div className="split-item" style={paddingTop}>
                            <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">{t("VideoPlayer")}</div>
                                <h3 className="mt-0 mb-12">{t("VideoPlayerTitle")}</h3>
                                <p className="m-0">{t("VideoPlayerDescription")}</p>
                            </div>
                            <div
                                className={classNames("split-item-image center-content-mobile reveal-from-bottom", imageFill && "split-item-image-fill")}
                                data-reveal-container=".split-item"
                                style={outerDivStyle}
                            >
                                <div style={imageDivStyle("rotate(0deg)")}>
                                    <Image style={imageStyle} src={require("./../../assets/visio_assets/onboarding_video_dark.webp")} alt="Features split 01" />
                                </div>
                            </div>
                        </div>

                        {/* Fullscreen Photo View */}
                        <div className="split-item" style={paddingTop}>
                            <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">{t("FullScreenPhotoView")}</div>
                                <h3 className="mt-0 mb-12">{t("FullScreenPhotoViewTitle")}</h3>
                                <p className="m-0">{t("FullScreenPhotoViewDescription")}</p>
                            </div>
                            <div
                                className={classNames("split-item-image center-content-mobile reveal-from-bottom", imageFill && "split-item-image-fill")}
                                data-reveal-container=".split-item"
                                style={outerDivStyle}
                            >
                                <div style={imageDivStyle("rotate(0deg)")}>
                                    <Image style={imageStyle} src={require("./../../assets/visio_assets/onboarding_pg_dark.webp")} alt="Features split 01" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ width: 50 }}>
                    <ModalVideo
                        ratio="9:14"
                        channel="custom"
                        autoplay
                        isOpen={videoModalActive}
                        url={require("./../../assets/visio_assets/App Preview - Search.webm")}
                        onClose={() => setVideomodalactive(false)}
                    />
                </div>

                <div style={{ width: 50 }}>
                    <ModalVideo
                        ratio="9:14"
                        channel="custom"
                        autoplay
                        isOpen={videoModalActiveStats}
                        url={require("./../../assets/visio_assets/App Preview - Stats.webm")}
                        onClose={() => setVideoModalActiveStats(false)}
                    />
                </div>
            </div>
        </section>
    );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
