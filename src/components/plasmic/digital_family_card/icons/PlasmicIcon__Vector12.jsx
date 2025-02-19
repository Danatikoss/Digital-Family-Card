// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 7"}
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
          "M10.598 1.418c-.667.473-3.775 2.246-4.71 2.762-.936.516-1.743 1-3.388.763C1.198 4.75.435 4.073.155 3.73c-.226.602-.15 1.032-.108 1.16.054.15.807 1.161 2.442 1.408 1.645.237 2.452-.247 3.388-.763.935-.516 4.043-2.289 4.71-2.761.667-.463 1.56-.946 1.613-1.71.022-.203-.01-.6-.064-1.063-.226.602-.968 1.02-1.549 1.43l.01-.012z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
