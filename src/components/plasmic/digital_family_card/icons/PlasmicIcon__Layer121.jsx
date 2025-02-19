// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Layer121Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#JhWxny44AXKua)"} fill={"currentColor"}>
        <path
          d={
            "M19 18H3c-1.65 0-3-1.35-3-3V3c0-1.65 1.35-3 3-3h16c1.65 0 3 1.35 3 3v12c0 1.65-1.35 3-3 3zM3 2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3z"
          }
        ></path>

        <path
          d={
            "M11 10.99c-.54 0-1.09-.15-1.56-.44L.46 4.84a.998.998 0 01-.3-1.38c.3-.47.92-.6 1.38-.31l8.97 5.7c.3.19.69.19.99 0l8.96-5.7c.47-.29 1.08-.16 1.38.31.3.47.16 1.08-.31 1.38l-8.97 5.7c-.48.3-1.02.45-1.57.45H11z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"JhWxny44AXKua"}>
          <path fill={"currentColor"} d={"M0 0h22v18H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Layer121Icon;
/* prettier-ignore-end */
