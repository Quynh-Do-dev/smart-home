import {ICHangingLightBulb} from "@app/components/icon/ICHangingLightBulb";
import {ICRemote} from "@app/components/icon/ICRemote";
import {socket} from "@app/config/socket";
import { IRootState } from "@app/redux/store";
import colors from "@app/utils/tailwind/colors";
import {Switch} from "antd";
import React, {useContext, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {ControlContext} from "..";

export default function BedRoom() {
  const [statusLed, setStatusLed] = useState(false);
  const [statusDHT, setStatusDHT] = useState(true);
  const user = useSelector((state: IRootState) => state.user.user?.email)
  useEffect(() => {
    socket.on("statusLedBed", (data) => {
      if (data === "A0") {
        setStatusLed(false);
      } else {
        setStatusLed(true);
      }
    });
  }, []);

  const handleLedRoom = (status: boolean) => {
    if (status) {
      socket.emit("ledBed", "l1");
      setStatusLed(true);
    } else {
      socket.emit("ledBed", "l0");
      setStatusLed(false);
    }
  };

  const handleDHT = (status: boolean) => {
    if (status) {
      socket.emit("dht11", "l1");
      setStatusDHT(true);
    } else {
      socket.emit("dht11", "l0");
      setStatusDHT(false);
    }
  };

  return (
    <div className="">
      <div className="mb-10 font-semibold">Phòng ngủ</div>
      <div className="flex box-control justify-between items-center gap-3 bg-gray-50 h-[60px] px-5 mb-5">
        <div className="flex gap-5 items-center">
          <div className="p-2 rounded-full bg-yellow-300">
            <ICHangingLightBulb fillColor={colors.white} />
          </div>
          <div className="font-bold">Đèn phòng</div>
        </div>
        <Switch onChange={handleLedRoom} checked={statusLed} />
      </div>
      <div className="flex box-control justify-between items-center gap-3 bg-gray-50 h-[60px] px-5 mb-5">
        <div className="flex gap-5 items-center">
          <div className="p-2 rounded-full bg-green-200">
            <ICRemote fillColor={colors.white} />
          </div>
          <div className="font-bold">DHT11</div>
        </div>
        <Switch onChange={handleDHT} checked={statusDHT} />
      </div>
    </div>
  );
}
