import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

import { TbWorld } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { SiFastlane } from "react-icons/si";

import { useTranslation } from "react-i18next";

const iconStyle = {
    height: 64,
    width: 64,
    padding: 17,
    color: "white",
};

const propTypes = {
    ...SectionTilesProps.types,
};

const defaultProps = {
    ...SectionTilesProps.defaults,
};

const FeaturesTiles = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, pushLeft, ...props }) => {
    const { t } = useTranslation("translation");

    const outerClasses = classNames(
        "features-tiles section",
        topOuterDivider && "has-top-divider",
        bottomOuterDivider && "has-bottom-divider",
        hasBgColor && "has-bg-color",
        invertColor && "invert-color",
        className
    );

    const innerClasses = classNames("features-tiles-inner section-inner pt-0", topDivider && "has-top-divider", bottomDivider && "has-bottom-divider");

    const tilesClasses = classNames("tiles-wrap center-content", pushLeft && "push-left");

    const sectionHeader = {
        title: "",
        paragraph: "",
    };

    const sectionContent = [
        {
            imgSrc: <SiFastlane style={iconStyle} />,
            title: t("FastAndModern"),
            subTitle: t("FastAndModernDescription"),
            dataRevealDelay: "0",
        },
        {
            imgSrc: <FaUsers style={iconStyle} />,
            title: t("UserFriendly"),
            subTitle: t("UserFriendlyDescription"),
            dataRevealDelay: "200",
        },
        {
            imgSrc: <TbWorld style={iconStyle} />,
            title: t("MultipleLanguageSupport"),
            subTitle: t("MultipleLanguageSupportDescription"),
            dataRevealDelay: "400",
        },
        // {
        //     imgSrc: require("./../../assets/images/feature-tile-icon-02.svg").default,
        //     title: "Robust Workflow",
        //     subTitle: "",
        //     dataRevealDelay: "0",
        // },
        // {
        //     imgSrc: require("./../../assets/images/feature-tile-icon-05.svg").default,
        //     title: "Robust Workflow",
        //     subTitle: "",
        //     dataRevealDelay: "200",
        // },
        // {
        //     imgSrc: require("./../../assets/images/feature-tile-icon-06.svg").default,
        //     title: "Robust Workflow",
        //     subTitle: "",
        //     dataRevealDelay: "400",
        // },
    ];

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader data={sectionHeader} className="center-content" />
                    <div className={tilesClasses}>
                        {sectionContent.map(({ imgSrc, title, subTitle, dataRevealDelay }, index) => {
                            return (
                                <div key={index} className="tiles-item reveal-from-bottom" data-reveal-delay={dataRevealDelay}>
                                    <div className="tiles-item-inner">
                                        <div className="features-tiles-item-header">
                                            <div className="features-tiles-item-image mb-16">{imgSrc}</div>
                                        </div>
                                        <div className="features-tiles-item-content">
                                            <h4 className="mt-0 mb-8">{title}</h4>
                                            <p className="m-0 text-sm">{subTitle}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
