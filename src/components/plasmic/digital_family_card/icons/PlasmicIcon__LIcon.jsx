// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LIconIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M10.316 15.39a.736.736 0 00-.632 0l-4.287 2.037a.73.73 0 01-1.034-.797l.875-4.427a.725.725 0 00-.194-.648l-3.17-3.243a.727.727 0 01.434-1.23l4.435-.553a.732.732 0 00.564-.397L9.345 2.07a.734.734 0 011.31 0l2.038 4.062c.11.217.32.367.564.397l4.435.553c.6.075.854.8.433 1.23l-3.17 3.243a.725.725 0 00-.193.648l.875 4.427a.73.73 0 01-1.034.797l-4.287-2.037z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LIconIcon;
/* prettier-ignore-end */
