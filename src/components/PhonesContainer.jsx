import React from "react";

const PhonesContainer = ({ phones }) => {
  console.log(phones);
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"></div>
      <button>Show All</button>
    </div>
  );
};

export default PhonesContainer;
