import {ICGas} from "@app/components/icon/ICGas";
import {ICHumidity} from "@app/components/icon/ICHumidity";
import {ICLight} from "@app/components/icon/ICLIght";
import {ICTemperature} from "@app/components/icon/ICTemperature";
import {socket} from "@app/config/socket";
import colors from "@app/utils/tailwind/colors";
import React, {useEffect, useState} from "react";
import Box from "../box";

export default function ListBox() {
    const [temperature, setTemperature] = useState(0);
    const  [humidity, setHumidity] = useState(0);
    const  [light, setLight] = useState(0);
    const  [fire, setFire] = useState(0);
  useEffect(() => {
    // Lắng nghe sự kiện 'connect'
    socket.on("getDHT11", (data) => {
      console.log("DataDHT11",  data);
      setTemperature(data[0] ?? 0);
      setHumidity(data[1] ?? 0);
    });
    socket.on("getBH1750", (data) => {
      console.log("DataBH1750", data);
      setLight(data);
    });
    socket.on("getFire", (data) => {
        console.log("DataFire", data);
        setFire(data);
      });
  }, [socket]);
  console.log(temperature, humidity)
  return (
    <div className="flex gap-4">
      <Box
        icon={
          <div className="bg-red-300 w-fit px-1 py-1 rounded-full">
            <ICTemperature width="40" height="40" fillColor={colors.white} />
          </div>
        }
        title="Temperature"
        content={`${Math.round(temperature)} C`}
        className="w-1/3"
      />
      <Box
        icon={
          <div className="bg-blue-500 w-fit px-2 py-2 rounded-full">
            <ICHumidity width="40" height="40" fillColor={colors.white} />
          </div>
        }
        title="Humidity"
        content={`${Math.round(humidity)} %`}
        className="w-1/3"
      />
      <Box
        icon={
          <div className="bg-yellow-300 w-fit px-2 py-2 rounded-full">
            <ICLight width="40" height="40" fillColor={colors.white} />
          </div>
        }
        title="Light"
        content={`${light} Lux`}
        className="w-1/3"
      />
    </div>
  );
}
