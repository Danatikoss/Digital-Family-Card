// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector32Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M0 2.755s.742-.924.914-1.15c.183-.226.409-.451.667-.57.258-.118 1-.472 1.204-.601.205-.14.581-.473.678-.43.097.043.269.709-.323 1.15-.591.44-.957.505-1.172.73-.215.215-.925 1.3-.925 1.3L0 2.767v-.011z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector32Icon;
/* prettier-ignore-end */
