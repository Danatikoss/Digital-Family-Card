// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector31Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
          "M0 2.635s.602-.86.742-1.064c.15-.215.333-.43.56-.548.225-.118.86-.473 1.021-.602.172-.129.484-.451.57-.419.086.032.269.613-.226 1.032-.495.43-.817.505-.99.71-.171.203-.73 1.203-.73 1.203L0 2.635z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector31Icon;
/* prettier-ignore-end */
