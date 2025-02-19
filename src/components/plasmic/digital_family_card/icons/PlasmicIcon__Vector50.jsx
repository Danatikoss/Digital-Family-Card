// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector50Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.87.038h-.526c-1.45 0-2.244.632-2.6 1.032V.455A.457.457 0 001.284 0H.46A.457.457 0 000 .455v8.119c0 .252.207.455.46.455h.824c.255 0 .46-.205.46-.455v-5.76c.867-1.454 2.368-1.456 3.079-1.36a.346.346 0 00.394-.342v-.73A.346.346 0 004.87.038z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector50Icon;
/* prettier-ignore-end */
