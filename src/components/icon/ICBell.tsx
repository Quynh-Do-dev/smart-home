import React from "react";
import {ISvgIcon} from "@app/types";

export function ICBell({
  width = "15",
  height = "16",
  fillColor = "#1890ff",
}: ISvgIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15 16"
      fill="none"
    >
      <path
        d="M12.7891 9.1895V6.5C12.7891 4.08725 11.1503 2.05475 8.93031 1.4435C8.71056 0.89 8.17356 0.5 7.53906 0.5C6.90456 0.5 6.36756 0.89 6.14781 1.4435C3.92781 2.0555 2.28906 4.08725 2.28906 6.5V9.1895L1.00881 10.4697C0.939031 10.5393 0.88369 10.6219 0.845977 10.7129C0.808263 10.8039 0.78892 10.9015 0.789063 11V12.5C0.789063 12.6989 0.868081 12.8897 1.00873 13.0303C1.14939 13.171 1.34015 13.25 1.53906 13.25H13.5391C13.738 13.25 13.9287 13.171 14.0694 13.0303C14.21 12.8897 14.2891 12.6989 14.2891 12.5V11C14.2892 10.9015 14.2699 10.8039 14.2322 10.7129C14.1944 10.6219 14.1391 10.5393 14.0693 10.4697L12.7891 9.1895ZM12.7891 11.75H2.28906V11.3105L3.56931 10.0302C3.6391 9.96072 3.69444 9.87808 3.73215 9.78707C3.76986 9.69607 3.78921 9.59851 3.78906 9.5V6.5C3.78906 4.43225 5.47131 2.75 7.53906 2.75C9.60681 2.75 11.2891 4.43225 11.2891 6.5V9.5C11.2891 9.6995 11.3678 9.89 11.5088 10.0302L12.7891 11.3105V11.75ZM7.53906 15.5C8.00354 15.5006 8.45666 15.3564 8.83543 15.0876C9.21421 14.8188 9.49982 14.4386 9.65256 14H5.42556C5.57831 14.4386 5.86392 14.8188 6.2427 15.0876C6.62147 15.3564 7.07459 15.5006 7.53906 15.5Z"
        fill={fillColor}
      />
    </svg>
  );
}