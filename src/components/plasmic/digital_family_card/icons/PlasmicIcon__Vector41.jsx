// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector41Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.692 16.862L10.173 6.64c-.285.198-.512.31-.652.298C7.94 6.797 5.304 4.97 2.89 0a.803.803 0 01-.41.115.722.722 0 01-.212-.034C-.367 5.445-.084 8.136.133 10.255c.22 2.12 1.826 3.25 3.414 4.191 5.16 3.063 16.884 2.783 16.884 2.783.32-.058.261-.367.261-.367z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector41Icon;
/* prettier-ignore-end */
