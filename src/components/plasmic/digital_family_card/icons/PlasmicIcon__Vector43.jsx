// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector43Icon(props) {
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
          "M5.12.209c.07 0 .14.01.207.029.66.185 2.946 1.153 5.39 5.868C6.841 4.35 4.45 4.139 2.967 4.139c-.808 0-1.514.07-2.138.133l-.177.021L4.182.77c.156-.155.327-.299.514-.43A.748.748 0 015.12.209zm0-.209a.956.956 0 00-.546.171l-.008.004a3.92 3.92 0 00-.536.449L0 4.646a4.63 4.63 0 01.846-.163c.618-.063 1.32-.133 2.117-.133 1.537 0 4.055.233 8.21 2.202C9.104 2.34 6.863.457 5.382.04a.947.947 0 00-.264-.038L5.12 0z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector43Icon;
/* prettier-ignore-end */
