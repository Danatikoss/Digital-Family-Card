// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector48Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.286 0H.46A.457.457 0 000 .455v8.121c0 .251.206.455.46.455h.826c.254 0 .46-.204.46-.455V.455A.457.457 0 001.286 0z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector48Icon;
/* prettier-ignore-end */
