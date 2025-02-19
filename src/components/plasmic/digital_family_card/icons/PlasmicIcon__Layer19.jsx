// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Layer19Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#UUK49EQ6IdCUa)"} fill={"currentColor"}>
        <path
          d={
            "M43.421 50H6.58A6.581 6.581 0 010 43.421V6.58A6.581 6.581 0 016.579 0H43.42A6.581 6.581 0 0150 6.579V43.42A6.581 6.581 0 0143.421 50zM6.58 2.632a3.942 3.942 0 00-3.947 3.947V43.42a3.942 3.942 0 003.947 3.947h36.84a3.942 3.942 0 003.947-3.947V6.58a3.942 3.942 0 00-3.947-3.947H6.58z"
          }
        ></path>

        <path
          d={
            "M48.684 18.421H1.316A1.303 1.303 0 010 17.105c0-.737.579-1.316 1.316-1.316h47.368c.737 0 1.316.58 1.316 1.316 0 .737-.579 1.316-1.316 1.316z"
          }
        ></path>

        <path
          d={
            "M17.105 50a1.303 1.303 0 01-1.316-1.316V17.105c0-.737.58-1.316 1.316-1.316.737 0 1.316.58 1.316 1.316v31.58c0 .736-.579 1.315-1.316 1.315z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"UUK49EQ6IdCUa"}>
          <path fill={"currentColor"} d={"M0 0h50v50H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Layer19Icon;
/* prettier-ignore-end */
