// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Layer120Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#o_jCU1U62vY1a)"}>
        <path
          d={
            "M8 20H4c-.55 0-1-.41-1-.91v-6.363H1c-.55 0-1-.409-1-.909V8.182c0-.5.45-.91 1-.91h2V5.456C3 2.445 5.69 0 9 0h3c.55 0 1 .41 1 .91v3.635c0 .5-.45.91-1 .91H9v1.818h3c.31 0 .6.127.79.345.19.218.26.51.18.782l-1 3.636c-.11.41-.51.691-.97.691H9v6.364c0 .5-.45.909-1 .909zm-3-1.818h2v-6.364c0-.5.45-.909 1-.909h2.22l.5-1.818H8c-.55 0-1-.41-1-.91V5.456c0-1 .9-1.819 2-1.819h2V1.818H9c-2.21 0-4 1.627-4 3.637v2.727c0 .5-.45.909-1 .909H2v1.818h2c.55 0 1 .41 1 .91v6.363z"
          }
          fill={"currentColor"}
          fillOpacity={".6"}
        ></path>
      </g>

      <defs>
        <clipPath id={"o_jCU1U62vY1a"}>
          <path fill={"currentColor"} d={"M0 0h13v20H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Layer120Icon;
/* prettier-ignore-end */
