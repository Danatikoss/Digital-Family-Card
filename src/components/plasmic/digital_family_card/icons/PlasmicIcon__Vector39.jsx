// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector39Icon(props) {
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
          "M18.122 17.123a.79.79 0 01.272.05l.03-.006c2.64-5.37 2.357-8.065 2.137-10.184-.219-2.12-1.826-3.25-3.414-4.191C11.987-.273.266.007.266.007-.054.065.004.376.004.376l10.52 10.222c.284-.198.512-.311.65-.299 1.576.14 4.204 1.96 6.612 6.9a.781.781 0 01.335-.076z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector39Icon;
/* prettier-ignore-end */
