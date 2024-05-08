// eslint-disable-next-line no-unused-vars
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";

const About = () => {
  return (
    <div>
      <div className="flex justify-between m-4 ">
        <h1 className="font-bold text-lg">Welcome Muty👋</h1>
        <Space wrap size={16}>
          <Avatar size="large" icon={<UserOutlined />} />
        </Space>
      </div>
    </div>
  );
};

export default About;
