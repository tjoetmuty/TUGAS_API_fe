// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CirclePlus } from "lucide-react";
import { Modal } from 'antd';

const ToDo = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    postData()
    window.location.reload()
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [input, setInput] = useState("")
  const [edit, setEdit] = useState(false)

  const getData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:3333/api/tasks");
      setData(res.data);
      console.log("ini about", res.data);
    } catch (err) {
      console.log("apa yang error", err);
    }
  };

  const postData = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:3333/api/tasks", {
        'title':input, 'completed':false
      });
      console.log(res)
    } catch (err) {
      console.log("apa yang error", err);
    }
  };
  const editData = async (id) => {
    try {
      const res = await axios.put(`http://127.0.0.1:3333/api/tasks/${id}`, {
         'completed':edit
      });
      console.log(res)
    } catch (err) {
      console.log("apa yang error", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="w-[275px] h-full border-2 border-dashed rounded-lg m-4 flex flex-col ">
        <div className="flex justify-between font-semibold text-stone-500 m-2">
          <h1>To do</h1>
          <div className="flex items-center gap-2">
            <CirclePlus color="#626060" className="w-4 h-4 cursor-pointer" onClick={showModal}/>
            <p>Add new task</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          {data.map((item, index) => (
            <div key={index} className="w-[250px] h-[150px] border-2 border-solid rounded-lg  border-stone-100">
              <p className="font-bold m-2">{item.title}</p>
              <input type="checkbox" onChange={(e) => setEdit(e.target.checked)} onClick={() => editData(item.id)} defaultChecked={item.completed} />
            </div>
          ))}
        </div>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <label>Task :</label>
        <input type="text" onChange={(e) => setInput(e.target.value)}/>
      </Modal>
    </div>
  );
};

export default ToDo;
