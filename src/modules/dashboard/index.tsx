import {ICTemperature} from "@app/components/icon/ICTemperature";
import React, {useEffect, useState} from "react";
import Box from "./components/box";
import "./index.scss";
import colors from "@app/utils/tailwind/colors";
import moment, {Moment} from "moment";
import {ICHumidity} from "@app/components/icon/ICHumidity";
import {ICLight} from "@app/components/icon/ICLIght";
import {ICGas} from "@app/components/icon/ICGas";
import ChartCustom from "./components/chart";
import Time from "./components/time";
import Controls from "./components/controls";
import { socket } from "@app/config/socket";
import { useSelector } from "react-redux";
import { IRootState } from "@app/redux/store";
import ListBox from "./components/listBox";

export function Dashboard() {
  return (
    <div>
      <div className="text-[16px] pb-10">
        <Time />
      </div>
      <div className="flex">
        <div className="w-9/12 inline-block px-5">
          <ListBox />
          <div className="pt-20 px-3">
            <ChartCustom />
          </div>
        </div>
        <div className="w-3/12 inline-block pr-5">
          <Controls />
        </div>
      </div>
    </div>
  );
}
