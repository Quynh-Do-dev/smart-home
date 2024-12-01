import { ICBell } from "@app/components/icon/ICBell";
import {ICHangingLightBulb} from "@app/components/icon/ICHangingLightBulb";
import {socket} from "@app/config/socket";
import colors from "@app/utils/tailwind/colors";
import {Switch} from "antd";
import React, {useEffect, useState} from "react";

export default function ControlCommon() {
  const [statusAllLed, setStatusAllLed] = useState(false);
  const [statusCoi, setStatusCoi] = useState(true);
  useEffect(() => {
    socket.on("statusLedKitchen", (data) => {
      if (data === "B0") {
        setStatusAllLed(false);
      }
    });
    socket.on("statusLedBed", (data) => {
      if (data === "A0") {
        setStatusAllLed(false);
      }
    });
    socket.on("statusLedLiv", (data) => {
      if (data === "A0") {
        setStatusAllLed(false);
      }
    });
  }, []);

  const handleAllLed = (status: boolean) => {
    if (status) {
      socket.emit("ledKitchen", "l1");
      socket.emit("ledBed", "l1");
      socket.emit("ledLiv", "l1");
      setStatusAllLed(true);
    } else {
      socket.emit("ledKitchen", "l0");
      socket.emit("ledBed", "l0");
      socket.emit("ledLiv", "l0");
      setStatusAllLed(false);
    }
  };

  const handleCoi = (status: boolean) => {
    if (status) {
      socket.emit("coi","l1");
      setStatusCoi(true);
    } else {
        socket.emit("coi","l0");
        setStatusCoi(false);
    }
  };

  return (
    <div className="">
      <div className="mb-10 font-semibold">Điều khiển chung</div>
      <div className="flex box-control justify-between items-center gap-3 bg-gray-50 h-[60px] px-5 mb-5">
        <div className="flex gap-5 items-center">
          <div className="p-2 rounded-full bg-yellow-300">
            <ICHangingLightBulb fillColor={colors.white} />
          </div>
          <div className="font-bold">Tất cả đèn phòng</div>
        </div>
        <Switch checked={statusAllLed} onChange={handleAllLed}/>
      </div>
      <div className="flex box-control justify-between items-center gap-3 bg-gray-50 h-[60px] px-5 mb-5">
        <div className="flex gap-5 items-center">
          <div className="p-2 rounded-full bg-red-300">
            <ICBell fillColor={colors.white} />
          </div>
          <div className="font-bold">Còi báo động</div>
        </div>
        <Switch checked={statusCoi} onChange={handleCoi}/>
      </div>
    </div>
  );
}
