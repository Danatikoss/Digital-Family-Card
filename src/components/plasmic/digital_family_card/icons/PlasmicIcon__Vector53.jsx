// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector53Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.008.371l2.63 8.412c.036.112.14.19.26.19h1.19a.27.27 0 00.258-.186L6.43 2.434l2.083 6.334c.036.11.142.186.258.186h1.286c.12 0 .228-.08.261-.194L12.764.342A.269.269 0 0012.5 0h-1.006a.27.27 0 00-.26.19L9.23 6.774 7.147.207a.271.271 0 00-.26-.188H5.84a.269.269 0 00-.26.192L3.575 6.813 1.607.23a.271.271 0 00-.258-.191L.274.025a.269.269 0 00-.262.348L.008.371z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector53Icon;
/* prettier-ignore-end */
