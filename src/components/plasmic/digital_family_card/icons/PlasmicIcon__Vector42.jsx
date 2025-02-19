// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector42Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 21"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.33.263c-.058-.317-.37-.259-.37-.259L6.625 10.41c.2.281.314.507.302.644-.142 1.55-1.962 4.127-6.888 6.499a.766.766 0 01-.04.678c5.418 2.603 8.14 2.323 10.28 2.109 2.143-.217 3.286-1.807 4.237-3.378C17.613 11.858 17.331.261 17.331.261v.002z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector42Icon;
/* prettier-ignore-end */
