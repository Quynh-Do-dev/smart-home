import React from "react";
import {ISvgIcon} from "@app/types";

export function ICHome({
  width = "24",
  height = "24",
  fillColor = "#000000",
}: ISvgIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      fill={fillColor}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}
