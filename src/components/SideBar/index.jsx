import { useNavigate } from "react-router-dom";
import { icons } from "../../constants";
// import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black w-[70px] h-screen">
      <div className="flex flex-col gap-6 items-center pt-14">
        <div className=" flex flex-col gap-4">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="hover:bg-gray-500 rounded-full p-2 duration-200 cursor-pointer"
              onClick={() => navigate(icon.path)}
            >
              <icon.Icon color={icon.color} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
