// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Layer110Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g clipPath={"url(#Uq1YHO4821Eha)"} fill={"currentColor"}>
        <path
          d={
            "M48.684 50H6.58A6.581 6.581 0 010 43.421V1.316C0 .579.579 0 1.316 0c.737 0 1.316.579 1.316 1.316V43.42a3.942 3.942 0 003.947 3.947h42.105c.737 0 1.316.58 1.316 1.316 0 .737-.579 1.316-1.316 1.316z"
          }
        ></path>

        <path
          d={
            "M40.79 39.474H14.473a3.942 3.942 0 01-3.948-3.948V22.921c0-.71.264-1.368.764-1.868l5.263-5.264c.5-.5 1.157-.763 1.868-.763.71 0 1.369.264 1.869.764l8.657 8.657 11.29-11.29c.5-.5 1.158-.762 1.868-.762a2.605 2.605 0 012.632 2.631v20.5a3.942 3.942 0 01-3.948 3.948zM13.157 22.92v12.605c0 .737.579 1.316 1.316 1.316h26.315c.737 0 1.316-.579 1.316-1.316v-20.5l-11.29 11.29c-.5.5-1.157.763-1.868.763-.71 0-1.368-.263-1.868-.763l-8.658-8.658-5.263 5.263z"
          }
        ></path>
      </g>

      <defs>
        <clipPath id={"Uq1YHO4821Eha"}>
          <path fill={"currentColor"} d={"M0 0h50v50H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Layer110Icon;
/* prettier-ignore-end */
