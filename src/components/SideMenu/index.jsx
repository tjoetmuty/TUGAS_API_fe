// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import play from "../../assets/chevron-right.svg";
import { Menu } from "antd";
import { menus } from "../../constants";

const SideMenu = () => {
  const [open, setOpen] = useState(true);

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div>
      <div
        className={`${
          open ? `w-[200px]` : `w-[35px]`
        } bg-white h-screen relative duration-150 shadow-md`}
      >
        <img
          src={play}
          className={`absolute cursor-pointer -right-3 top-12 w-8 border-2 border-[#1E1E1E]  rounded-full bg-white ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div>
          <div className="flex flex-col gap-6">
            <h1 className={`font-bold text-3xl m-6 ${!open && "hidden"}`}>
              Projects
            </h1>
            <div>
              <Menu
                onClick={onClick}
                className={`w-100 ${!open && "hidden"}`}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={menus}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center pt-14"></div>
    </div>
  );
};

export default SideMenu;
