import {ICFanOff} from "@app/components/icon/ICFanOff";
import {ICHangingLightBulb} from "@app/components/icon/ICHangingLightBulb";
import {ICLight} from "@app/components/icon/ICLIght";
import { ICRemote } from "@app/components/icon/ICRemote";
import {socket} from "@app/config/socket";
import colors from "@app/utils/tailwind/colors";
import {Switch} from "antd";
import React, {useEffect, useState} from "react";

export default function LivingRoom() {
  const [statusLed, setStatusLed] = useState(false);
  const [statusDoor, setStatusDoor] = useState(false);
  const [statusBH1750, setStatusBH1750] = useState(true);

  useEffect(() => {
    socket.on("statusLedLiv", (data) => {
      if (data === "A0") {
        setStatusLed(false);
      } else {
        setStatusLed(true);
      }
    });
    socket.on("statusDoor", (data) => {
      if (data === "A0") {
        setStatusDoor(false);
      } else {
        setStatusDoor(true);
      }
    });
  }, []);

  const handleLedRoom = (status: boolean) => {
    if (status) {
      socket.emit("ledLiv", "l1");
      setStatusLed(true);
    } else {
      socket.emit("ledLiv", "l0");
      setStatusLed(false);
    }
  };

  const handleDoor = (status: boolean) => {
    if (status) {
      socket.emit("door", "l1");
      setStatusDoor(true);
    } else {
      socket.emit("door", "l0");
      setStatusDoor(false);
    }
  };

  const handleBh1750 = (status: boolean) => {
    if (status) {
      socket.emit("BH1750", "l1");
      setStatusBH1750(true);
    } else {
      socket.emit("BH1750", "l0");
      setStatusBH1750(false);
    }
  };

  return (
    <div className="">
      <div className="mb-10 font-semibold">Phòng khách</div>
      <div className="flex box-control justify-between items-center gap-3 bg-gray-50 h-[60px] px-5 mb-5">
        <div className="flex gap-5 items-center">
          <div className="p-2 rounded-full bg-yellow-300">
            <ICLight fillColor={colors.white} />
          </div>
          <div className="font-bold">Đèn Phòng</div>
        </div>
        <Switch checked={statusLed} onChange={handleLedRoom} />
      </div>
      <div className="flex box-control justify-between items-center gap-3 bg-gray-50 h-[60px] px-5 mb-5">
        <div className="flex gap-5 items-center">
          <div className="p-2 rounded-full bg-yellow-300">
            <ICHangingLightBulb fillColor={colors.white} />
          </div>
          <div className="font-bold">Cửa nhà</div>
        </div>
        <Switch checked={statusDoor} onChange={handleDoor} />
      </div>
      <div className="flex box-control justify-between items-center gap-3 bg-gray-50 h-[60px] px-5 mb-5">
        <div className="flex gap-5 items-center">
          <div className="p-2 rounded-full bg-gray-800">
            <ICRemote fillColor={colors.gray[200]} />
          </div>
          <div className="font-bold">BH1750</div>
        </div>
        <Switch checked={statusBH1750} onChange={handleBh1750} />
      </div>
    </div>
  );
}
