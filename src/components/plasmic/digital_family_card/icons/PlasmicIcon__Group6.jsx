// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 285 166"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M97.79 0L0 57.304l.136.232L97.926.232 97.79 0zM31.165 75.416l-.129-.236L128.895 18l.129.236-97.859 57.18zM62.247 93.34l-.14-.236 97.858-57.18.14.237-97.858 57.18zm31.071 17.925l-.14-.225 97.858-57.191.14.236-97.858 57.18zm31.07 17.925l-.129-.226 97.848-57.19.14.236-97.859 57.18zm31.082 17.925l-.14-.226 97.858-57.18.129.225-97.847 57.181zm31.071 17.935l-.14-.237 97.858-57.18.14.226-97.858 57.191z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
