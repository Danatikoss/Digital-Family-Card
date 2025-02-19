// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector44Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.173.455c-1.775 3.834-1.988 6.2-1.988 7.666a19.758 19.758 0 00.155 2.291L.78 6.92a3.94 3.94 0 01-.435-.51.728.728 0 01-.105-.623C.427 5.134 1.405 2.873 6.17.455M6.621 0C2.36 2.046.457 4.264.035 5.728a.941.941 0 00.135.802l.005.008a3.9 3.9 0 00.453.53l4.066 3.986a4.493 4.493 0 01-.165-.836c-.063-.611-.135-1.306-.135-2.095 0-1.52.237-4.011 2.227-8.12L6.62 0z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector44Icon;
/* prettier-ignore-end */
