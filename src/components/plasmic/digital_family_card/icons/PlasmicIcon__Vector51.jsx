// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector51Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 4.206v.584c0 .217.18.394.399.394h1.545v7.203c0 .217.18.395.399.395h.87c.22 0 .4-.178.4-.395V5.184h3.692v7.224c0 .217.18.395.399.395h.795a.396.396 0 00.398-.389C8.923 10.276 9.034.021 8.893.021h-1.19a.397.397 0 00-.398.394V3.79h-3.77V2.633c0-.015 0-.03.002-.042.02-.167.19-1.235 1.288-1.235h1.05c.22 0 .399-.177.399-.394V.394A.397.397 0 005.875 0H4.467s-2.56-.019-2.56 2.75v1.07L.4 3.81a.397.397 0 00-.401.395z"
        }
        fill={"currentColor"}
        fillOpacity={".25"}
      ></path>
    </svg>
  );
}

export default Vector51Icon;
/* prettier-ignore-end */
