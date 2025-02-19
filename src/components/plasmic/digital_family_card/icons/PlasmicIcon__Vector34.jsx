// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector34Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 3"}
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
          "M0 1.835s.785-.677.968-.849c.194-.172.42-.333.667-.387.247-.064.935-.247 1.129-.333.194-.086.57-.312.645-.258.076.054.119.656-.462.935-.58.29-.904.29-1.119.44-.215.151-1 .979-1 .979L0 1.835z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector34Icon;
/* prettier-ignore-end */
