// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 283 64"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M141 16c-11 0-19 7.2-19 18s9 18 20 18c6.7 0 12.6-2.6 16.2-7l-7.6-4.5c-2 2.2-5.1 3.5-8.6 3.5-4.8 0-8.8-2.5-10.3-6.5h28c.2-1.1.3-2.3.3-3.5 0-10.8-8-18-19-18zm-9.4 14.5c1.2-4 4.6-6.5 9.4-6.5 4.8 0 8.2 2.5 9.5 6.5h-19zM248.7 16c-11 0-19 7.2-19 18s9 18 20 18c6.7 0 12.6-2.6 16.2-7l-7.6-4.5c-2 2.2-5.1 3.5-8.6 3.5-4.8 0-8.8-2.5-10.3-6.5h28c.2-1.1.3-2.3.3-3.5 0-10.8-8-18-19-18zm-9.4 14.5c1.2-4 4.6-6.5 9.4-6.5 4.8 0 8.2 2.5 9.5 6.5h-19zm-39 3.5c0 6 3.9 10 10 10 4 0 7.1-1.9 8.7-5l7.7 4.5a18.5 18.5 0 01-16.5 8.5c-11 0-19-7.2-19-18s8-18 19-18c7.4 0 13.3 3.2 16.5 8.5l-7.7 4.4c-1.5-3-4.6-4.9-8.8-4.9-6 0-10 4-10 10zm82.4-29v46h-9V5h9zM37 0l37 64H0L37 0zm92.4 5l-27.7 48L74 5h10.4l17.3 30L119 5h10.4zm59 12v9.7c-1-.3-2.1-.5-3.3-.5-5.8 0-10 4-10 10V51h-9V17h9v9.2c0-5 6-9.2 13.2-9.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */
