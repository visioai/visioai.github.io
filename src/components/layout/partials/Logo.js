import React from "react";
import classNames from "classnames";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
    const classes = classNames("brand", className);

    const imgSrc = props.isHeader ? require("./../../../assets/images/logo_header.png") : require("./../../../assets/images/logo_footer.png");

    return (
        <div {...props} className={classes}>
            <h1 className="m-0">
                <Image onClick={props.scrollToTop} src={imgSrc} alt="Open" width={props.isHeader ? 200 : 60} height={props.isHeader ? 200 : 60} />
            </h1>
        </div>
    );
};

export default Logo;
