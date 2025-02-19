// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector36Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 194 107"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.623 5.432l4.592-2.665c2.194-1.268 5.754-1.268 7.959 0L192.328 105.2c.71.409 1.161.892 1.419 1.419.549-1.107.097-2.354-1.419-3.224L14.174.951c-2.205-1.268-5.765-1.268-7.959 0L1.623 3.616C.128 4.486-.324 5.722.225 6.83c.258-.516.699-1 1.398-1.397z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector36Icon;
/* prettier-ignore-end */
