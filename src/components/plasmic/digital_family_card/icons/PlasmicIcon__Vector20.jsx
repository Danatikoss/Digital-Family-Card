// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector20Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 36"}
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
          "M12.487 1.097s4.022 2.353 5.323 3.46c1.883 1.601 2.431 2.977 2.151 6.18-.28 3.202-3.226 11.444-3.473 14.001-.248 2.569.14 7.114-.119 7.77-.269.666-3.527 3.664-8.163 2.643C3.571 34.131.022 31.788 0 29.993c-.02-1.793.915-11.97.915-14.808 0-2.837.3-10.123.989-12.218C2.592.87 3.582-.43 6.131.13c2.538.548 6.345.945 6.345.945l.01.022z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */
