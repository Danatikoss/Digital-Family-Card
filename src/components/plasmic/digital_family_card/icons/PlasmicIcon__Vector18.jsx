// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector18Icon(props) {
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
          "M10.587 1.418c-.667.463-3.775 2.236-4.71 2.752-.936.515-1.743.999-3.377.762C1.198 4.74.435 4.062.155 3.718c-.226.602-.15 1.032-.108 1.16.054.151.807 1.161 2.442 1.408 1.635.237 2.452-.247 3.377-.762.935-.516 4.044-2.29 4.71-2.751.667-.473 1.55-.946 1.614-1.71.01-.203-.011-.6-.065-1.063-.226.602-.968 1.02-1.549 1.43l.011-.012z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */
