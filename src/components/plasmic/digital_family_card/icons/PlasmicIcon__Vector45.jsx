// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector45Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 7"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.46.446c3.876 1.757 6.267 1.968 7.75 1.968a20.515 20.515 0 002.315-.154l-3.53 3.523a3.96 3.96 0 01-.514.43.748.748 0 01-.631.102C5.19 6.129 2.904 5.16.46.446zM0 .002c2.069 4.214 4.31 6.096 5.79 6.513a.947.947 0 00.81-.134l.01-.004c.191-.133.37-.283.535-.448l4.03-4.022a4.63 4.63 0 01-.846.162c-.618.063-1.32.134-2.117.134-1.537 0-4.055-.234-8.21-2.203L0 .002z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector45Icon;
/* prettier-ignore-end */
