// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M38.309 5.448l-2.27-1.31 2.259-1.312c1.118-.645 1.108-1.698-.01-2.342-1.12-.645-2.926-.645-4.045 0l-2.258 1.31-2.27-1.31c-1.129-.645-2.936-.645-4.043 0-1.119.644-1.108 1.697.01 2.342l2.27 1.311-2.259 1.311c-1.108.645-1.108 1.698 0 2.343 1.13.645 2.936.645 4.044 0l2.259-1.311 2.269 1.31c1.118.646 2.925.646 4.044 0 1.107-.644 1.097-1.697-.022-2.342h.022zM13.476 19.859l-8.604-4.965c-1.13-.645-2.925-.645-4.044 0-1.108.645-1.108 1.687.022 2.343l8.603 4.965c1.119.644 2.937.644 4.044 0 1.119-.645 1.108-1.698-.01-2.343h-.011z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group7Icon;
/* prettier-ignore-end */
