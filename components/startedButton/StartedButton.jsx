import { ArrowUpRight } from "lucide-react";
import React from "react";

const StartedButton = ({ params }) => {
  return (
    <div>
      <div className="flex px-6 group">
        <button className={`${params[0].width} ${params[0].minWidth} flex items-center justify-between rounded-full ${params[1].bgColour} ${params[2]?.padding || "py-1"} ${params[3]?.text || "text-foreground"}   group-hover:text-chart-1 `}>
          <p className="px-6 text-lg font-bold">Get Started</p>
          <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-black ">
            <ArrowUpRight className="h-6 w-6 text-secondary group-hover:text-chart-1" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default StartedButton;
