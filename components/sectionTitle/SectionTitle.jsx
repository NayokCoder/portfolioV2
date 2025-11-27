import React from "react";

const SectionTitle = ({ params }) => {
  return (
    <div>
      <div className="font-bold mb-12 ">
        {/* Tag / Label */}
        <div className="flex items-center gap-3 text-xs ">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <p className="uppercase tracking-wider text-gray-300">{params}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
