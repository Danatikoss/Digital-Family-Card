// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 4"}
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
          "M2.366 3.385C1.581 2.31.506 2.29.506 2.29L0 2.773s1.14.053 1.925 1.128l.452-.505-.011-.01zm.753-.763c-.785-1.075-1.871-1.096-1.871-1.096l-.506.484s1.14.053 1.925 1.117l.452-.505zm.763-.762C3.097.783 2.012.762 2.012.762l-.506.484s1.14.053 1.925 1.128l.451-.505v-.01zm.753-.764C3.861.021 2.764 0 2.764 0l-.505.484s1.14.053 1.925 1.128l.451-.505v-.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
