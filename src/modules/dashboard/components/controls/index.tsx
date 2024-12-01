import {ICFanOff} from "@app/components/icon/ICFanOff";
import {ICHangingLightBulb} from "@app/components/icon/ICHangingLightBulb";
import {ICLight} from "@app/components/icon/ICLIght";
import colors from "@app/utils/tailwind/colors";
import {Switch} from "antd";
import React, {memo, createContext, useState, useMemo} from "react";
import BedRoom from "./bedRoom";
import ControlCommon from "./controlCommon";
import "./index.scss";
import KitchenRoom from "./kitchenRoom";
import LivingRoom from "./livingRoom";

export const ControlContext = createContext({
  isAllLed: false,
  setIsAllLed: (status: boolean): void => {},
  ledOff: [],
  setLedOff: (data : number[]) => {},
});

function Controls() {
  const [isAllLed, setIsAllLed] = useState(false);
  const [ledOff, setLedOff] = useState([]);
  const initialState = useMemo(() => {
      return {
        isAllLed: isAllLed,
        setIsAllLed: setIsAllLed,
        ledOff: ledOff,
        setLedOff: setLedOff,
      }
  },[isAllLed])
  return (
    <ControlContext.Provider value={initialState as any}>
      <div className="bg-white rounded-[20px] h-full p-5">
        <div className="font-bold text-[18px] text-center">Bảng điều khiển</div>
        <LivingRoom />
        <BedRoom />
        <KitchenRoom />
        <ControlCommon />
      </div>
    </ControlContext.Provider>
  );
}

export default memo(Controls);
