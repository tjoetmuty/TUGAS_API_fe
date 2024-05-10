import { Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import ToDo from "./features/To-do";
import Schedule from "./features/Schedule";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route element={<Wrapper />}>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/to-do" element={<ToDo />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
