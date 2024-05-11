"use client";

import CountUp from "react-countup";
const Badge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-orange-500">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-orange-500">
          <CountUp end={endCountNum} delay={1} duration={4}>
            {endCountText}
          </CountUp> 
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
