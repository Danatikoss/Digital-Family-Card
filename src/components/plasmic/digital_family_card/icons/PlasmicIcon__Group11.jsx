// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group11Icon(props) {
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
          "M2.377 3.396C1.592 2.32.506 2.3.506 2.3L0 2.783s1.14.054 1.925 1.118l.452-.505zm.753-.774c-.775-1.075-1.86-1.096-1.86-1.096l-.506.484s1.14.053 1.925 1.128l.451-.505-.01-.01zm.763-.762C3.108.783 2.033.762 2.033.762l-.506.484s1.14.053 1.925 1.117l.452-.505h-.01zm.753-.764C3.861.022 2.786 0 2.786 0L2.28.473S3.42.527 4.205 1.6l.452-.505h-.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group11Icon;
/* prettier-ignore-end */
