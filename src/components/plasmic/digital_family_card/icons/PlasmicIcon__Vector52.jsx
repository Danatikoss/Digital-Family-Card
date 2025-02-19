// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector52Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.642 0h-.958C1.65 0 0 1.631 0 3.644v2.201C0 7.858 1.65 9.49 3.684 9.49h.958c2.035 0 3.684-1.632 3.684-3.645v-2.2C8.326 1.63 6.676 0 4.642 0zm1.98 5.6c0 1.343-1.101 2.43-2.457 2.43-1.356 0-2.457-1.09-2.457-2.43V3.888c0-1.344 1.101-2.43 2.457-2.43 1.356 0 2.457 1.088 2.457 2.43v1.71z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector52Icon;
/* prettier-ignore-end */
