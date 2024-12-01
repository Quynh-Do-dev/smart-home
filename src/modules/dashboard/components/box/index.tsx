import React from "react";
import "./index.scss";

interface IBoxProps {
  icon?: React.ReactNode;
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  className?: string;
}

export default function Box(props: IBoxProps) {
  const {icon, title, content, className} = props;
  return (
    <div className={`${className} box relative`}>
      <div className="flex gap-2 items-center justify-between py-2">
        <div className="box-icon">{icon}</div>
        <div className="box-content flex justify-center flex-1 font-bold text-[24px] -translate-x-[20px]">
          {content}
        </div>
      </div>
      <div className="box-title absolute left-1/2 top-2/3 -translate-x-1/2 font-bold text-[18px]">
        {title}
      </div>
    </div>
  );
}
