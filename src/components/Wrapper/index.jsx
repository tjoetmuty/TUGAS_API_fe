import Sidebar from "../SideBar";
import SideMenu from "../SideMenu";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <div className="bg-stone-300">
      <div className="flex">
        <Sidebar />
        <SideMenu />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
