import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="bg-white flex flex-col lg:h-58 lg:w-60 md:h-58 md:w-60 h-40 w-54 cursor-pointer">
      <Image src="/images/PC.jpeg" width={260} height={150} />
      <div className="p-2 flex flex-col">
        <p className="text-[11px] font-semibold">
          Guide to ultimate desktop setup for programmers
        </p>
        <div className="flex items-center justify-between">
          <p className="text-[8px] font-bold mt-2">Piotr M</p>
          <p className="text-[8px] mt-2">670,932 views • 1 day ago</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
