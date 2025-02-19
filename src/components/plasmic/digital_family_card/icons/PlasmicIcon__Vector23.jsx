// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector23Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 9"}
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
          "M5.98 0S5.786 3.32 0 5.298l2.495 3.084s2.657-1.805 4.227-4.793c0 0 .591-1.117.494-2.396L5.97 0h.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector23Icon;
/* prettier-ignore-end */
