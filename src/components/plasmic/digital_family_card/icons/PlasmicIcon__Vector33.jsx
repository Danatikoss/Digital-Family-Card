// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector33Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 2.23s.764-.785.957-.979c.183-.193.42-.387.667-.462.247-.086.968-.344 1.172-.451.205-.108.581-.376.667-.333.086.043.183.677-.409 1.031-.591.355-.935.387-1.15.57-.215.182-.968 1.117-.968 1.117L.01 2.24 0 2.23z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector33Icon;
/* prettier-ignore-end */
