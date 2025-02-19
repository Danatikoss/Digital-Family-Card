// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 395 229"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M390.02 139.136L153.78 2.853c-6.604-3.804-17.273-3.804-23.822 0L4.89 75.476c-6.55 3.804-6.518 9.972.086 13.787l236.24 136.282c6.593 3.804 17.251 3.804 23.812 0l125.068-72.622c6.549-3.804 6.528-9.972-.076-13.787z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector3Icon;
/* prettier-ignore-end */
