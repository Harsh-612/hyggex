import React from "react";
import "remixicon/fonts/remixicon.css";
const AddressBar: React.FC = () => {
  return (
    <div className="text-base text-gray-600 flex mt-6">
      <i className="ri-home-4-line"></i>
      {">"}Flashcard{">"}Mathematics{">"}
      <div className="font-medium">Relations and Functions</div>
    </div>
  );
};

export default AddressBar;
