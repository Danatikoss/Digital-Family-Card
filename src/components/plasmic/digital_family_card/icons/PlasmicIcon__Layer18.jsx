// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Layer18Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 66 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#Vu9Coxg2oNkJa)"} fill={"currentColor"}>
        <path
          d={
            "M32.813 34.375c-.407 0-.813-.156-1.094-.469a1.547 1.547 0 010-2.218l12.5-12.5a1.547 1.547 0 012.218 0 1.547 1.547 0 010 2.218l-12.5 12.5a1.57 1.57 0 01-1.093.469h-.032z"
          }
        ></path>

        <path
          d={
            "M59.875 50c-.25 0-.531-.063-.781-.219-.75-.437-1-1.375-.563-2.125 5.282-9.156 5.282-20.531 0-29.687C50.344 3.78 32.125-1.094 17.97 7.094 3.78 15.28-1.094 33.469 7.094 47.656c.437.75.187 1.688-.563 2.125a1.542 1.542 0 01-2.125-.562C-4.656 33.53.72 13.437 16.406 4.375c15.657-9.031 35.782-3.656 44.813 12 5.843 10.125 5.843 22.688 0 32.813-.282.5-.813.78-1.344.78V50z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"Vu9Coxg2oNkJa"}>
          <path fill={"currentColor"} d={"M0 0h65.594v50H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Layer18Icon;
/* prettier-ignore-end */
