// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector35Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 195 112"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M192.36 103.383L14.195.951C11.99-.317 8.43-.317 6.236.951L1.644 3.616c-2.194 1.279-2.194 3.342.01 4.61L179.81 110.658c2.205 1.268 5.786 1.268 7.98 0l4.603-2.665c2.194-1.268 2.162-3.342-.043-4.61h.011z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector35Icon;
/* prettier-ignore-end */
