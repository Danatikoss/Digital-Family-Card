// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.981 7.5c1.635-.945 4.28-.945 5.926 0 1.645.946 1.645 2.483.021 3.429-1.634.945-4.29.945-5.925 0-1.646-.957-1.646-2.483-.022-3.428zM1.215.71c1.635-.946 4.292-.946 5.926 0 1.646.945 1.646 2.482.022 3.427-1.635.946-4.291.946-5.926 0C-.41 3.192-.41 1.655 1.215.71zm23.543 13.572c1.634-.946 4.28-.957 5.926 0 1.645.945 1.645 2.482.021 3.428-1.635.945-4.291.945-5.926 0-1.645-.946-1.645-2.483-.021-3.428zm11.765 6.791c1.635-.945 4.28-.956 5.926 0 1.646.946 1.646 2.482.022 3.428-1.635.946-4.291.946-5.926 0-1.656-.956-1.656-2.482-.022-3.428z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
