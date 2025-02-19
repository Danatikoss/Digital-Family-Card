// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector40Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.456 2.844a.777.777 0 01-.14-.614C11.911-.363 9.196-.083 7.056.132 4.915.349 3.772 1.938 2.82 3.509-.276 8.614.007 20.21.007 20.21c.059.317.37.26.37.26l10.334-10.406c-.2-.282-.314-.507-.301-.645.143-1.567 1.997-4.183 7.043-6.575h.003z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector40Icon;
/* prettier-ignore-end */
