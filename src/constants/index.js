import { PanelsTopLeft, Calendar } from "lucide-react";

export const icons = [
    { Icon: PanelsTopLeft, color: "#ffffff", path: "/to-do"},
    { Icon: Calendar, color: "#ffffff", path: "/schedule" },
  ];

export const menus = [
    {
      key: "sub",
      label: "Projects",
      children: [
        {
          key: "1",
          label: "All Projects",
        },
      ],
    },
    {
      key: "sub1",
      label: "Tasks",
      children: [
        {
          key: "3",
          label: "All Tasks",
        },
        {
          key: "4",
          label: "To Do",
        },
        {
          key: "5",
          label: "In Progress",
        },
        {
          key: "6",
          label: "Done",
        },
      ],
    },
  ];