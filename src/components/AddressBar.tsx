import React from "react";
import "remixicon/fonts/remixicon.css";
const AddressBar: React.FC = () => {
  return (
    <div className="text-base text-gray-500 flex mt-6">
      <i className="ri-home-4-line"></i>&nbsp;
      {" > "}Flashcard&nbsp;{" > "}&nbsp;Mathematics{" > "}&nbsp;
      <div className="font-medium text-gray-800">Relations and Functions</div>
    </div>
  );
};

export default AddressBar;
