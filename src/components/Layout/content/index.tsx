import React from "react";
import "./_content.scss";
import {CommonReactProps} from "@app/types";

export default function Content({children}: CommonReactProps) {
  return <div className="wrap-content">{children}</div>;
}