// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector14Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 10"}
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
          "M6.54.032S3.713 2.966 2.659 3.815C1.604 4.653.486 5.685.217 6.458c-.258.774-.237 1.193-.183 1.333.054.15.807 1.16 2.441 1.408 1.635.236 2.452-.237 3.377-.763.936-.516 4.044-2.29 4.711-2.751.667-.473 1.549-.946 1.613-1.709C12.23 3.213 11.714 0 11.714 0L6.53.032h.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector14Icon;
/* prettier-ignore-end */
