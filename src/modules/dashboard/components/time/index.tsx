import moment from "moment";
import React, {memo, useEffect, useState} from "react";

function Time() {
  const [time, setTime] = useState<string>(moment().format("LLLL"));
  useEffect(() => {
    const date = setInterval(() => {
      setTime(moment().format("LLLL"));
    }, 60000);

    return () => {
      clearInterval(date);
    };
  }, []);
  return <div>{time}</div>;
}

export default memo(Time);
