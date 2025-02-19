// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector29Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
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
          "M2.968 8.619l1 2.224s1.872-1.698 2.98-2.547c1.097-.849 4.076-3.6 4.549-4.363.473-.763.688-3.202.774-3.363.076-.161.27-.58.473-.57 1.087.01 2.861 1.44 3.184 1.806 0 .494-.527 1.321-.774 1.837-.258.516-1.13 1.225-1.764 1.558-.635.333-2.377 3.149-3.883 5.352-1.505 2.203-3.42 4.46-4.151 5.233-.731.774-1.248.839-1.936.548-.688-.29-2.27-2.794-3.42-3.922l2.98-3.793h-.012z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector29Icon;
/* prettier-ignore-end */
