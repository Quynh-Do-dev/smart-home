import {ICHangingLightBulb} from "@app/components/icon/ICHangingLightBulb";
import {socket} from "@app/config/socket";
import colors from "@app/utils/tailwind/colors";
import {Switch} from "antd";
import React, {useEffect, useState} from "react";

export default function KitchenRoom() {
  const [statusLed, setStatusLed] = useState(false);
  useEffect(() => {
    socket.on("statusLedKitchen", (data) => {
      if (data === "B0") {
        setStatusLed(false);
      } else {
        setStatusLed(true);
      }
    });
  }, []);

  const handleLedRoom = (status: boolean) => {
    if (status) {
      socket.emit("ledKitchen", "l1");
      setStatusLed(true);
    } else {
      socket.emit("ledKitchen", "l0");
      setStatusLed(false);
    }
  };
  return (
    <div className="">
      <div className="mb-10 font-semibold">Phòng bếp</div>
      <div className="flex box-control justify-between items-center gap-3 bg-gray-50 h-[60px] px-5 mb-5">
        <div className="flex gap-5 items-center">
          <div className="p-2 rounded-full bg-yellow-300">
            <ICHangingLightBulb fillColor={colors.white} />
          </div>
          <div className="font-bold">Đèn phòng</div>
        </div>
        <Switch onChange={handleLedRoom} checked={statusLed} />
      </div>
    </div>
  );
}
