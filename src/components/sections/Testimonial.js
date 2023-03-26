import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

import { useTranslation } from "react-i18next";

const propTypes = {
    ...SectionTilesProps.types,
};

const defaultProps = {
    ...SectionTilesProps.defaults,
};

const Testimonial = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, pushLeft, ...props }) => {
    const { t } = useTranslation();

    const outerClasses = classNames(
        "testimonial section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames("testimonial-inner section-inner", topDivider && "has-top-divider", bottomDivider && "has-bottom-divider");

    const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

    const sectionHeader = {
        title: t("CustomerTestimonials"),
        paragraph: "",
    };

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={tilesClasses}>
                        <div className="tiles-item reveal-from-right" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <p className="text-sm mb-0">
                                        Visio.AI is a great gallery for Android, there are great tools like grouping by tags organized by Artificial Intelligence. Overall, I really liked the app and I
                                        think it will grow a lot.
                                    </p>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <span className="testimonial-item-name text-color-high">Éderson ...</span>
                                    <span className="text-color-low"> / </span>
                                    <span className="testimonial-item-link">Play Store</span>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-bottom">
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <p className="text-sm mb-0">Visio.AI is a great app, loving it so far. Thanks for the great work on this app!</p>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <span className="testimonial-item-name text-color-high">Michael ...</span>
                                    <span className="text-color-low"> / </span>
                                    <span className="testimonial-item-link">Play Store</span>
                                </div>
                            </div>
                        </div>

                        <div className="tiles-item reveal-from-left" data-reveal-delay="200">
                            <div className="tiles-item-inner">
                                <div className="testimonial-item-content">
                                    <p className="text-sm mb-0">
                                        Some of the core features for a photo gallery are already in Visio.AI, and I haven't seen them on other apps. It could become one of the best photo gallery app
                                        on Android pretty soon.
                                    </p>
                                </div>
                                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                    <span className="testimonial-item-name text-color-high">Justin ...</span>
                                    <span className="text-color-low"> / </span>
                                    <span className="testimonial-item-link">Play Store</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
