// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector30Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.763 5.195l-4.85 4.138L7.44 8a66.675 66.675 0 00-1.076-4.481C5.374-.038 3.998-.2 2.675.102c-1.312.3-2.99 1.74-2.624 4.513.215 1.709 1.925 8.317 4.904 11.133.645.612 1.549 1.02 2.786.42 1.548-.753 7.28-8.963 7.28-8.963-.29-2.096-2.269-2.02-2.269-2.02l.011.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector30Icon;
/* prettier-ignore-end */
