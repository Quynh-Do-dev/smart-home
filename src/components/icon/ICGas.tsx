import React from "react";
import {ISvgIcon} from "@app/types";

export function ICGas({
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
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <path d="M4,15v3c0,2.21,1.79,4,4,4h8c2.21,0,4-1.79,4-4v-3H4z" />
          <path d="M20,13v-3c0-1.86-1.28-3.41-3-3.86V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v2.14c-1.72,0.45-3,2-3,3.86v3H20z M9,4h6v2h-2 c0-0.55-0.45-1-1-1s-1,0.45-1,1H9V4z" />
        </g>
      </g>
    </svg>
  );
}
