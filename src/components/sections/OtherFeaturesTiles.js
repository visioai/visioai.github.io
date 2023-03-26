import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

import { AiOutlineCompress } from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { MdDateRange, MdShare, MdDelete } from "react-icons/md";
import { FaImages } from "react-icons/fa";

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

const OtherFeaturesTiles = ({ className, topOuterDivider, bottomOuterDivider, topDivider, bottomDivider, hasBgColor, invertColor, pushLeft, ...props }) => {
    const { t } = useTranslation();

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
        title: t("OtherFeatures"),
    };

    const sectionContent = [
        {
            imgSrc: <AiOutlineCompress style={iconStyle} />,
            title: t("ImageCompressing"),
            subTitle: t("ImageCompressingDescription"),
            dataRevealDelay: "0",
        },
        {
            imgSrc: <TbListDetails style={iconStyle} />,
            title: t("DetailsOfPhotos"),
            subTitle: t("DetailsOfPhotosDescription"),
            dataRevealDelay: "200",
        },
        {
            imgSrc: <MdDateRange style={iconStyle} />,
            title: t("GroupByDate"),
            subTitle: t("GroupByDateDescription"),
            dataRevealDelay: "400",
        },
        {
            imgSrc: <FaImages style={iconStyle} />,
            title: t("CreateAlbumsFavorites"),
            subTitle: t("CreateAlbumsFavoritesDescription"),
            dataRevealDelay: "0",
        },
        {
            imgSrc: <MdShare style={iconStyle} />,
            title: t("SharePhotos"),
            subTitle: t("SharePhotosDescription"),
            dataRevealDelay: "200",
        },
        {
            imgSrc: <MdDelete style={iconStyle} />,
            title: t("DeletePhotos"),
            subTitle: t("DeletePhotosDescription"),
            dataRevealDelay: "400",
        },
    ];

    return (
        <section {...props} className={outerClasses}>
            <div className="container">
                <div className={innerClasses}>
                    <SectionHeader style={{ paddingTop: 50 }} data={sectionHeader} className="center-content" />
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

OtherFeaturesTiles.propTypes = propTypes;
OtherFeaturesTiles.defaultProps = defaultProps;

export default OtherFeaturesTiles;
