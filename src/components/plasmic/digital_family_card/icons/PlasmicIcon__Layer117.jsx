// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Layer117Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 22"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#pRrg94fVJqB0a)"} fill={"currentColor"}>
        <path
          d={
            "M8.98 21.99c-.42 0-.84-.13-1.18-.39C5.42 19.55 0 14.3 0 9c0-4.96 4.04-9 9-9s9 4.04 9 9c0 5.3-5.42 10.55-7.75 12.56-.39.29-.83.44-1.27.44v-.01zM9 2C5.14 2 2 5.14 2 9c0 4.55 5.29 9.51 7 11 1.71-1.49 7-6.45 7-11 0-3.86-3.14-7-7-7z"
          }
        ></path>

        <path
          d={
            "M9 13c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"pRrg94fVJqB0a"}>
          <path fill={"currentColor"} d={"M0 0h18v21.99H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Layer117Icon;
/* prettier-ignore-end */
