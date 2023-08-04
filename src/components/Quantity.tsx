"use client";
import React, { useState } from "react";

const Quantity = () => {
  const [num, setNum] = useState(1);
  return (
    <div className="flex gap-x-2 items-center">
      {/* minus */}
      <button
        className="border h-8 w-8 rounded-full center"
        onClick={() => {
          setNum(num <= 1 ? 1 : num - 1);
        }}
      >
        -
      </button>
      {/* Number */}
      <span className="text-sm">{num}</span>
      {/* plus */}
      <button
        className="border h-8 w-8 rounded-full center"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;

// export const OperationButton = () => {
// return(
//     <div className='border h-8 w-8 rounded-full center'> -</div>
// )
// }
