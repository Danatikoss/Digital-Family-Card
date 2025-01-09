// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconLeftIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.667 13.333h2.666V2.667H6.667v10.666zm-4 0h2.666V8H2.667v5.333zm8-7.333v7.333h2.666V6h-2.666z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLeftIcon;
/* prettier-ignore-end */
