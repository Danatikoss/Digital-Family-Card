// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 395 151"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.877 83.503L129.945 10.88c6.549-3.804 17.218-3.804 23.822 0l236.241 136.283c1.495.86 2.635 1.848 3.452 2.901 2.807-3.599 1.667-7.973-3.452-10.928L153.767 2.853c-6.604-3.804-17.273-3.804-23.822 0L4.877 75.476C-.19 78.42-1.297 82.772 1.5 86.35c.806-1.032 1.914-2 3.377-2.848z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
