import React from "react";
import {ISvgIcon} from "@app/types";

export function ICDelete({
  width = "20",
  height = "20",
  fillColor = "#1890ff",
  className = "",
}: ISvgIcon) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13 16"
      fill="none"
    >
      <path
        d="M1.66406 4.97583V13.2918C1.66406 14.1269 2.34101 14.8038 3.17606 14.8038H9.22406C10.0591 14.8038 10.7361 14.1269 10.7361 13.2918V4.97583"
        stroke={fillColor}
        strokeWidth="1.188"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.6875 5.73206V11.7801"
        stroke={fillColor}
        strokeWidth="1.188"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.70312 5.73206V11.7801"
        stroke={fillColor}
        strokeWidth="1.188"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.90625 2.70825H11.4903"
        stroke={fillColor}
        strokeWidth="1.188"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.92969 1.1958H8.46569"
        stroke={fillColor}
        strokeWidth="1.188"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
