import React from "react";
import {ISvgIcon} from "@app/types";

export function ICHangingLightBulb({
  width = "24",
  height = "24",
  fillColor = "#000000",
}: ISvgIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      fill={fillColor}
    >
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <path d="M13,6.06V3h-2v3.06c-4.5,0.5-8,4.31-8,8.93C3,16.1,3.9,17,5.01,17H8c0,2.21,1.79,4,4,4s4-1.79,4-4h2.99 C20.1,17,21,16.1,21,14.99C21,10.37,17.5,6.56,13,6.06z M12,15H5c0-3.86,3.14-7,7-7s7,3.14,7,7H12z" />
      </g>
    </svg>
  );
}
