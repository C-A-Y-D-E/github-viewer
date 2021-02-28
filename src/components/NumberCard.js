import React from "react";

const NumberCard = ({ text, number }) => {
  return (
    <div className="flex flex-col h-32 w-40 search-box-shadow text-xl justify-center text-center rounded-md">
      <span>{text}</span>
      <p className="text-2xl">{number}</p>
    </div>
  );
};

export default NumberCard;
