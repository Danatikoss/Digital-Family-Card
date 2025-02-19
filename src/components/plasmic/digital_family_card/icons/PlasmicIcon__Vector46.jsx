// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector46Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.282.643l3.562 3.492c.156.154.301.323.434.509a.728.728 0 01.106.623C6.196 5.92 5.217 8.182.45 10.6c1.777-3.835 1.99-6.2 1.99-7.667 0-.799-.072-1.498-.135-2.115a4.656 4.656 0 00-.021-.175m-.356-.64c.078.262.134.54.164.836.063.61.135 1.306.135 2.094 0 1.52-.236 4.012-2.227 8.121C4.26 9.008 6.162 6.79 6.584 5.326a.941.941 0 00-.135-.801l-.004-.009a3.898 3.898 0 00-.454-.53L1.925 0l.002.002z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector46Icon;
/* prettier-ignore-end */
