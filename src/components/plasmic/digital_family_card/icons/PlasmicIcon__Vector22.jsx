// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector22Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 22"}
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
          "M8.292 0h-4.57S.096 10.961 0 21.46c3.076-.355 5.098-2.289 5.302-2.805.269-.666-.129-5.212.118-7.77C5.603 8.953 7.335 3.794 8.281.012L8.292 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector22Icon;
/* prettier-ignore-end */
