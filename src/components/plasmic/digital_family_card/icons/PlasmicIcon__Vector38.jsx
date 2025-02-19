// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector38Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 147 82"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.893 0L1.398 2.031C.71 2.429.258 2.923 0 3.428c.258.516.71 1 1.409 1.408l133.597 76.813h11.884L4.893 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector38Icon;
/* prettier-ignore-end */
