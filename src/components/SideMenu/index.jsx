// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import play from "../../assets/chevron-right.svg";

const SideMenu = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className={`${open ? `w-[200px]` : `w-[80px]`} bg-white  h-screen relative duration-150`}>
        <img
          src={play}
          className={`absolute cursor-pointer -right-3 top-12 w-8 border-2 border-[#1E1E1E]  rounded-full bg-white ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="flex flex-col gap-6 items-center pt-14"></div>
    </div>
  );
};

export default SideMenu;
